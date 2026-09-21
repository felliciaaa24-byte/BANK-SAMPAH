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
exports.DetailSetoranService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const common_2 = require("@nestjs/common");
let DetailSetoranService = class DetailSetoranService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createDetailSetoranDto) {
        const kategori = await this.prisma.kategori.findUnique({
            where: {
                id: createDetailSetoranDto.kategoriId,
            },
        });
        if (!kategori) {
            throw new common_2.NotFoundException('Kategori sampah tidak ditemukan');
        }
        const subTotalPoint = kategori.poin_perKilo * createDetailSetoranDto.berat_kg;
        return this.prisma.detailSetoran.create({
            data: {
                setoranId: createDetailSetoranDto.setoranId,
                kategoriId: createDetailSetoranDto.kategoriId,
                berat_kg: createDetailSetoranDto.berat_kg,
                sub_totalPoint: subTotalPoint,
            },
            include: {
                kategori: true,
                setoran: true,
            },
        });
    }
    findAll() {
        return this.prisma.detailSetoran.findMany({
            include: {
                setoran: true,
                kategori: true,
            },
        });
    }
    findOne(id) {
        return this.prisma.detailSetoran.findUnique({
            where: { id },
            include: {
                setoran: true,
                kategori: true,
            },
        });
    }
    update(id, updateDetailSetoranDto) {
        return this.prisma.detailSetoran.update({
            where: { id },
            data: updateDetailSetoranDto,
        });
    }
    remove(id) {
        return this.prisma.detailSetoran.delete({
            where: { id },
        });
    }
};
exports.DetailSetoranService = DetailSetoranService;
exports.DetailSetoranService = DetailSetoranService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DetailSetoranService);
//# sourceMappingURL=detail_sampah.service.js.map