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
const update_setor_dto_1 = require("./dto/update-setor.dto");
let SetoranController = class SetoranController {
    constructor(setoranService) {
        this.setoranService = setoranService;
    }
    create(createSetoranDto) {
        return this.setoranService.create(createSetoranDto);
    }
    findAll() {
        return this.setoranService.findAll();
    }
    findOne(id) {
        return this.setoranService.findOne(+id);
    }
    update(id, updateSetoranDto) {
        return this.setoranService.update(+id, updateSetoranDto);
    }
    remove(id) {
        return this.setoranService.remove(+id);
    }
};
exports.SetoranController = SetoranController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_setor_dto_1.CreateSetoranDto]),
    __metadata("design:returntype", void 0)
], SetoranController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SetoranController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SetoranController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_setor_dto_1.UpdateSetoranDto]),
    __metadata("design:returntype", void 0)
], SetoranController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SetoranController.prototype, "remove", null);
exports.SetoranController = SetoranController = __decorate([
    (0, swagger_1.ApiTags)('Setoran'),
    (0, common_1.Controller)('setoran'),
    __metadata("design:paramtypes", [setor_service_1.SetoranService])
], SetoranController);
//# sourceMappingURL=setor.controller.js.map