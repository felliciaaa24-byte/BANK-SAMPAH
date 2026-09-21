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
exports.PenukaranService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PenukaranService = class PenukaranService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPenukaranDto, userId) {
        const nasabah = await this.prisma.nasabah.findUnique({
            where: {
                userId: userId,
            },
        });
        if (!nasabah) {
            throw new common_1.NotFoundException('Anda belum terdaftar sebagai nasabah');
        }
        const hadiah = await this.prisma.hadiah.findUnique({
            where: {
                id: createPenukaranDto.hadiahId,
            },
        });
        if (!hadiah) {
            throw new common_1.NotFoundException('Hadiah tidak ditemukan');
        }
        if (hadiah.stock <= 0) {
            throw new common_1.BadRequestException('Stok hadiah sudah habis');
        }
        if (nasabah.saldo_poin < hadiah.poin_dibutuhkan) {
            throw new common_1.BadRequestException('Saldo poin tidak mencukupi');
        }
        const poinTerpakai = hadiah.poin_dibutuhkan;
        const sisaPoint = nasabah.saldo_poin - poinTerpakai;
        return this.prisma.$transaction(async (tx) => {
            const penukaran = await tx.penukaran.create({
                data: {
                    kategoriId: createPenukaranDto.kategoriId,
                    hadiahId: hadiah.id,
                    poin_terpakai: poinTerpakai,
                    sisa_point: sisaPoint,
                    tanggal: new Date(),
                    status: 'PENDING',
                },
                include: {
                    hadiah: true,
                    kategori: true,
                },
            });
            await tx.nasabah.update({
                where: {
                    id: nasabah.id,
                },
                data: {
                    saldo_poin: sisaPoint,
                },
            });
            await tx.hadiah.update({
                where: {
                    id: hadiah.id,
                },
                data: {
                    stock: {
                        decrement: 1,
                    },
                },
            });
            return penukaran;
        });
    }
    findAll() {
        return this.prisma.penukaran.findMany({
            include: {
                kategori: true,
                hadiah: true,
            },
        });
    }
    findOne(id) {
        return this.prisma.penukaran.findUnique({
            where: { id },
            include: {
                kategori: true,
                hadiah: true,
            },
        });
    }
    async update(id, updatePenukaranDto) {
        return this.prisma.penukaran.update({
            where: { id },
            data: {
                ...(updatePenukaranDto.status !== undefined && {
                    status: updatePenukaranDto.status,
                }),
            },
        });
    }
    remove(id) {
        return this.prisma.penukaran.delete({
            where: { id },
        });
    }
};
exports.PenukaranService = PenukaranService;
exports.PenukaranService = PenukaranService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PenukaranService);
//# sourceMappingURL=penukaran_point.service.js.map