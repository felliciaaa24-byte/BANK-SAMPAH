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
exports.HadiahService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let HadiahService = class HadiahService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(createHadiahDto) {
        return this.prisma.hadiah.create({
            data: createHadiahDto,
        });
    }
    findAll() {
        return this.prisma.hadiah.findMany({
            include: {
                penukaran: true,
            },
        });
    }
    findOne(id) {
        return this.prisma.hadiah.findUnique({
            where: { id },
            include: {
                penukaran: true,
            },
        });
    }
    update(id, updateHadiahDto) {
        return this.prisma.hadiah.update({
            where: { id },
            data: updateHadiahDto,
        });
    }
    remove(id) {
        return this.prisma.hadiah.delete({
            where: { id },
        });
    }
};
exports.HadiahService = HadiahService;
exports.HadiahService = HadiahService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], HadiahService);
//# sourceMappingURL=hadiah.service.js.map