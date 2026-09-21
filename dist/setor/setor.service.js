"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetoranService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
let SetoranService = class SetoranService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto, userId) {
        const nasabah = await this.prisma.nasabah.findUnique({
            where: {
                userId: userId,
            },
        });
        if (!nasabah) {
            throw new common_3.NotFoundException('Anda belum terdaftar sebagai nasabah');
        }
        const admin = await this.prisma.admin.findUnique({
            where: {
                id: dto.adminId,
            },
        });
        if (!admin) {
            throw new common_3.NotFoundException('Lokasi penyetoran tidak ditemukan');
        }
        return this.prisma.setoran.create({
            data: {
                nasabahId: nasabah.id,
                adminId: dto.adminId,
                userId: userId,
                jumlah: 0,
                tanggal: new Date(dto.tanggal),
                status: 'PENDING',
            },
            include: {
                nasabah: true,
                admin: true,
                detailSetoran: true,
            },
        });
    }
    async findPengajuanByAdmin(userId) {
        const admin = await this.prisma.admin.findUnique({
            where: {
                userId: userId,
            },
        });
        if (!admin) {
            throw new common_3.NotFoundException('Anda bukan admin dari unit manapun');
        }
        return this.prisma.setoran.findMany({
            where: {
                adminId: admin.id,
                status: 'PENDING',
            },
            include: {
                nasabah: true,
                detailSetoran: {
                    include: {
                        kategori: true,
                    },
                },
            },
            orderBy: {
                tanggal: 'desc',
            },
        });
    }
    async reject(setoranId, userId) {
        const admin = await this.prisma.admin.findUnique({
            where: {
                userId: userId,
            },
        });
        if (!admin) {
            throw new common_3.NotFoundException('Anda bukan admin dari unit manapun');
        }
        const setoran = await this.prisma.setoran.findUnique({
            where: {
                id: setoranId,
            },
        });
        if (!setoran) {
            throw new common_3.NotFoundException('Setoran tidak ditemukan');
        }
        if (setoran.adminId !== admin.id) {
            throw new common_2.ForbiddenException('Anda tidak memiliki akses ke setoran ini');
        }
        if (setoran.status !== 'PENDING') {
            throw new common_2.BadRequestException('Setoran ini sudah diproses');
        }
        return this.prisma.setoran.update({
            where: {
                id: setoranId,
            },
            data: {
                status: 'REJECTED',
            },
            include: {
                nasabah: true,
                admin: true,
                detailSetoran: {
                    include: {
                        kategori: true,
                    },
                },
            },
        });
    }
    async approve(setoranId, userId) {
        const admin = await this.prisma.admin.findUnique({
            where: {
                userId: userId,
            },
        });
        if (!admin) {
            throw new common_3.NotFoundException('Anda bukan admin dari unit manapun');
        }
        const setoran = await this.prisma.setoran.findUnique({
            where: {
                id: setoranId,
            },
            include: {
                detailSetoran: true,
            },
        });
        if (!setoran) {
            throw new common_3.NotFoundException('Setoran tidak ditemukan');
        }
        if (setoran.adminId !== admin.id) {
            throw new common_2.ForbiddenException('Anda tidak memiliki akses ke setoran ini');
        }
        if (setoran.status !== 'PENDING') {
            throw new common_2.BadRequestException('Setoran ini sudah diproses');
        }
        const jumlah = setoran.detailSetoran.reduce((total, detail) => total + detail.berat_kg, 0);
        const totalPoin = setoran.detailSetoran.reduce((total, detail) => total + detail.sub_totalPoint, 0);
        return this.prisma.$transaction(async (tx) => {
            const updatedSetoran = await tx.setoran.update({
                where: {
                    id: setoranId,
                },
                data: {
                    status: 'APPROVED',
                    jumlah: jumlah,
                },
                include: {
                    nasabah: true,
                    admin: true,
                    detailSetoran: {
                        include: {
                            kategori: true,
                        },
                    },
                },
            });
            await tx.nasabah.update({
                where: {
                    id: setoran.nasabahId,
                },
                data: {
                    saldo_poin: {
                        increment: totalPoin,
                    },
                },
            });
            return updatedSetoran;
        });
    }
};
exports.SetoranService = SetoranService;
exports.SetoranService = SetoranService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SetoranService);
//# sourceMappingURL=setor.service.js.map