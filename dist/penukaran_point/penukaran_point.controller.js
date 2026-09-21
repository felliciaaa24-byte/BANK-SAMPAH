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
exports.PenukaranController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const penukaran_point_service_1 = require("./penukaran_point.service");
const create_penukaran_point_dto_1 = require("./dto/create-penukaran_point.dto");
const update_penukaran_point_dto_1 = require("./dto/update-penukaran_point.dto");
const jwt_guard_1 = require("../auth/jwt.guard");
const roles_guard_1 = require("../auth/roles.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
const swagger_2 = require("@nestjs/swagger");
const common_2 = require("@nestjs/common");
let PenukaranController = class PenukaranController {
    constructor(penukaranService) {
        this.penukaranService = penukaranService;
    }
    create(createPenukaranDto, req) {
        return this.penukaranService.create(createPenukaranDto, req.user.id);
    }
    findAll() {
        return this.penukaranService.findAll();
    }
    findOne(id) {
        return this.penukaranService.findOne(+id);
    }
    update(id, updatePenukaranDto) {
        return this.penukaranService.update(+id, updatePenukaranDto);
    }
    remove(id) {
        return this.penukaranService.remove(+id);
    }
};
exports.PenukaranController = PenukaranController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_2.ApiBearerAuth)(),
    (0, common_2.UseGuards)(jwt_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('NASABAH'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_penukaran_point_dto_1.CreatePenukaranDto, Object]),
    __metadata("design:returntype", void 0)
], PenukaranController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_2.ApiBearerAuth)(),
    (0, common_2.UseGuards)(jwt_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('NASABAH'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PenukaranController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PenukaranController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.Post)(),
    (0, swagger_2.ApiBearerAuth)(),
    (0, common_2.UseGuards)(jwt_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('NASABAH'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_penukaran_point_dto_1.UpdatePenukaranDto]),
    __metadata("design:returntype", void 0)
], PenukaranController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_2.ApiBearerAuth)(),
    (0, common_2.UseGuards)(jwt_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('NASABAH'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PenukaranController.prototype, "remove", null);
exports.PenukaranController = PenukaranController = __decorate([
    (0, swagger_1.ApiTags)('Penukaran'),
    (0, common_1.Controller)('penukaran'),
    __metadata("design:paramtypes", [penukaran_point_service_1.PenukaranService])
], PenukaranController);
//# sourceMappingURL=penukaran_point.controller.js.map