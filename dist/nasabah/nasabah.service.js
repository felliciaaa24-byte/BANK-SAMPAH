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
exports.NasabahService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let NasabahService = class NasabahService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto, userId) {
        return this.prisma.nasabah.create({
            data: {
                nama_nasabah: dto.nama_nasabah,
                alamat: dto.alamat,
                telepon: dto.telepon,
                foto: dto.foto,
                saldo_poin: 0,
                userId: userId,
            },
        });
    }
    findAll() {
        return this.prisma.nasabah.findMany({
            include: {
                user: true,
                setoran: true,
            },
        });
    }
    findOne(id) {
        return this.prisma.nasabah.findUnique({
            where: { id },
            include: {
                user: true,
                setoran: true,
            },
        });
    }
    async update(id, dto) {
        return this.prisma.nasabah.update({
            where: { id },
            data: {
                nama_nasabah: dto.nama_nasabah,
                alamat: dto.alamat,
                telepon: dto.telepon,
                foto: dto.foto,
            },
        });
    }
    remove(id) {
        return this.prisma.nasabah.delete({
            where: { id },
        });
    }
};
exports.NasabahService = NasabahService;
exports.NasabahService = NasabahService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NasabahService);
//# sourceMappingURL=nasabah.service.js.map