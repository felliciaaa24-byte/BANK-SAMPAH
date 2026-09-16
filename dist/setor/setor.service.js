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
let SetoranService = class SetoranService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createSetoranDto) {
        return this.prisma.setoran.create({
            data: {
                nasabahId: createSetoranDto.nasabahId,
                adminId: createSetoranDto.adminId,
                userId: createSetoranDto.userId,
                jumlah: createSetoranDto.jumlah,
                tanggal: new Date(createSetoranDto.tanggal),
            },
        });
    }
    findAll() {
        return this.prisma.setoran.findMany({
            include: {
                nasabah: true,
                admin: true,
                user: true,
                detailSetoran: true,
            },
        });
    }
    findOne(id) {
        return this.prisma.setoran.findUnique({
            where: { id },
            include: {
                nasabah: true,
                admin: true,
                user: true,
                detailSetoran: true,
            },
        });
    }
    update(id, updateSetoranDto) {
        return this.prisma.setoran.update({
            where: { id },
            data: {
                ...(updateSetoranDto.nasabahId !== undefined && {
                    nasabahId: updateSetoranDto.nasabahId,
                }),
                ...(updateSetoranDto.adminId !== undefined && {
                    adminId: updateSetoranDto.adminId,
                }),
                ...(updateSetoranDto.userId !== undefined && {
                    userId: updateSetoranDto.userId,
                }),
                ...(updateSetoranDto.jumlah !== undefined && {
                    jumlah: updateSetoranDto.jumlah,
                }),
                ...(updateSetoranDto.tanggal !== undefined && {
                    tanggal: new Date(updateSetoranDto.tanggal),
                }),
            },
        });
    }
    remove(id) {
        return this.prisma.setoran.delete({
            where: { id },
        });
    }
};
exports.SetoranService = SetoranService;
exports.SetoranService = SetoranService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SetoranService);
//# sourceMappingURL=setor.service.js.map