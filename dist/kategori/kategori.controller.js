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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KategoriController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const kategori_service_1 = require("./kategori.service");
const create_kategori_dto_1 = require("./dto/create-kategori.dto");
const update_kategori_dto_1 = require("./dto/update-kategori.dto");
const jwt_guard_1 = require("../auth/jwt.guard");
const roles_guard_1 = require("../auth/roles.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
const swagger_2 = require("@nestjs/swagger");
const common_2 = require("@nestjs/common");
let KategoriController = class KategoriController {
    constructor(kategoriService) {
        this.kategoriService = kategoriService;
    }
    create(createKategoriDto) {
        return this.kategoriService.create(createKategoriDto);
    }
    findAll() {
        return this.kategoriService.findAll();
    }
    findOne(id) {
        return this.kategoriService.findOne(+id);
    }
    update(id, updateKategoriDto) {
        return this.kategoriService.update(+id, updateKategoriDto);
    }
    remove(id) {
        return this.kategoriService.remove(+id);
    }
};
exports.KategoriController = KategoriController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_2.ApiBearerAuth)(),
    (0, common_2.UseGuards)(jwt_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('PEMILIK'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_kategori_dto_1.CreateKategoriDto]),
    __metadata("design:returntype", void 0)
], KategoriController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], KategoriController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], KategoriController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_2.ApiBearerAuth)(),
    (0, common_2.UseGuards)(jwt_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('PEMILIK'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_kategori_dto_1.UpdateKategoriDto]),
    __metadata("design:returntype", void 0)
], KategoriController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_2.ApiBearerAuth)(),
    (0, common_2.UseGuards)(jwt_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('PEMILIK'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], KategoriController.prototype, "remove", null);
exports.KategoriController = KategoriController = __decorate([
    (0, swagger_1.ApiTags)('Kategori Sampah'),
    (0, common_1.Controller)('kategori'),
    __metadata("design:paramtypes", [kategori_service_1.KategoriService])
], KategoriController);
//# sourceMappingURL=kategori.controller.js.map