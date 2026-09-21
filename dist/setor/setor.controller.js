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
exports.SetoranController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const setor_service_1 = require("./setor.service");
const create_setor_dto_1 = require("./dto/create-setor.dto");
const jwt_guard_1 = require("../auth/jwt.guard");
const roles_guard_1 = require("../auth/roles.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
const swagger_2 = require("@nestjs/swagger");
let SetoranController = class SetoranController {
    constructor(setoranService) {
        this.setoranService = setoranService;
    }
    create(createSetoranDto, req) {
        return this.setoranService.create(createSetoranDto, req.user.id);
    }
};
exports.SetoranController = SetoranController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_2.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('NASABAH'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_setor_dto_1.CreateSetoranDto, Object]),
    __metadata("design:returntype", void 0)
], SetoranController.prototype, "create", null);
exports.SetoranController = SetoranController = __decorate([
    (0, swagger_1.ApiTags)('Setoran'),
    (0, common_1.Controller)('setoran'),
    __metadata("design:paramtypes", [setor_service_1.SetoranService])
], SetoranController);
//# sourceMappingURL=setor.controller.js.map