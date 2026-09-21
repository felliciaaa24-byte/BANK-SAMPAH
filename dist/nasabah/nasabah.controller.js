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
exports.NasabahController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const nasabah_service_1 = require("./nasabah.service");
const create_nasabah_dto_1 = require("./dto/create-nasabah.dto");
const update_nasabah_dto_1 = require("./dto/update-nasabah.dto");
const jwt_guard_1 = require("../auth/jwt.guard");
const roles_guard_1 = require("../auth/roles.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
const swagger_2 = require("@nestjs/swagger");
const common_2 = require("@nestjs/common");
let NasabahController = class NasabahController {
    constructor(nasabahService) {
        this.nasabahService = nasabahService;
    }
    create(createNasabahDto, req) {
        return this.nasabahService.create(createNasabahDto, req.user.id);
    }
    findAll() {
        return this.nasabahService.findAll();
    }
    findOne(id) {
        return this.nasabahService.findOne(+id);
    }
    update(id, updateNasabahDto) {
        return this.nasabahService.update(+id, updateNasabahDto);
    }
    remove(id) {
        return this.nasabahService.remove(+id);
    }
};
exports.NasabahController = NasabahController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_2.ApiBearerAuth)(),
    (0, common_2.UseGuards)(jwt_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('NASABAH'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_nasabah_dto_1.CreateNasabahDto, Object]),
    __metadata("design:returntype", void 0)
], NasabahController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_2.ApiBearerAuth)(),
    (0, common_2.UseGuards)(jwt_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NasabahController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_2.ApiBearerAuth)(),
    (0, common_2.UseGuards)(jwt_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NasabahController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_2.ApiBearerAuth)(),
    (0, common_2.UseGuards)(jwt_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('NASABAH'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_nasabah_dto_1.UpdateNasabahDto]),
    __metadata("design:returntype", void 0)
], NasabahController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_2.ApiBearerAuth)(),
    (0, common_2.UseGuards)(jwt_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('ADMIN'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NasabahController.prototype, "remove", null);
exports.NasabahController = NasabahController = __decorate([
    (0, swagger_1.ApiTags)('Nasabah'),
    (0, common_1.Controller)('nasabah'),
    __metadata("design:paramtypes", [nasabah_service_1.NasabahService])
], NasabahController);
//# sourceMappingURL=nasabah.controller.js.map