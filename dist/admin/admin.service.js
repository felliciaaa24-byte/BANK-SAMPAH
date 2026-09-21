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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
let AdminService = class AdminService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto, userId) {
        return this.prisma.admin.create({
            data: {
                nama_unit: dto.nama_unit,
                nama_pengelola: dto.nama_pengelola,
                telpon: dto.telpon,
                userId: userId,
            },
        });
    }
    findAll() {
        return this.prisma.admin.findMany({
            include: {
                user: true,
                setoran: true,
            },
        });
    }
    findPending() {
        return this.prisma.admin.findMany({
            where: {
                status: 'PENDING',
            },
            include: {
                user: true,
            },
        });
    }
    findOne(id) {
        return this.prisma.admin.findUnique({
            where: { id },
            include: {
                user: true,
                setoran: true,
            },
        });
    }
    async approve(id) {
        const admin = await this.prisma.admin.findUnique({
            where: { id },
        });
        if (!admin) {
            throw new common_2.NotFoundException('Pengajuan admin tidak ditemukan');
        }
        if (admin.status !== 'PENDING') {
            throw new common_3.BadRequestException('Pengajuan ini sudah diproses');
        }
        return this.prisma.$transaction(async (tx) => {
            const updatedAdmin = await tx.admin.update({
                where: { id },
                data: {
                    status: 'APPROVED',
                },
            });
            await tx.user.update({
                where: { id: admin.userId },
                data: {
                    role: 'ADMIN',
                },
            });
            return updatedAdmin;
        });
    }
    async reject(id) {
        return this.prisma.admin.update({
            where: { id },
            data: {
                status: 'REJECTED',
            },
        });
    }
    update(id, updateAdminDto) {
        return this.prisma.admin.update({
            where: { id },
            data: updateAdminDto,
        });
    }
    remove(id) {
        return this.prisma.admin.delete({
            where: { id },
        });
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminService);
//# sourceMappingURL=admin.service.js.map