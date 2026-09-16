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
exports.DetailSetoranController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const detail_sampah_service_1 = require("./detail_sampah.service");
const create_detail_sampah_dto_1 = require("./dto/create-detail_sampah.dto");
const update_detail_sampah_dto_1 = require("./dto/update-detail_sampah.dto");
let DetailSetoranController = class DetailSetoranController {
    constructor(detailSetoranService) {
        this.detailSetoranService = detailSetoranService;
    }
    create(createDetailSetoranDto) {
        return this.detailSetoranService.create(createDetailSetoranDto);
    }
    findAll() {
        return this.detailSetoranService.findAll();
    }
    findOne(id) {
        return this.detailSetoranService.findOne(+id);
    }
    update(id, updateDetailSetoranDto) {
        return this.detailSetoranService.update(+id, updateDetailSetoranDto);
    }
    remove(id) {
        return this.detailSetoranService.remove(+id);
    }
};
exports.DetailSetoranController = DetailSetoranController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_detail_sampah_dto_1.CreateDetailSetoranDto]),
    __metadata("design:returntype", void 0)
], DetailSetoranController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DetailSetoranController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DetailSetoranController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_detail_sampah_dto_1.UpdateDetailSetoranDto]),
    __metadata("design:returntype", void 0)
], DetailSetoranController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DetailSetoranController.prototype, "remove", null);
exports.DetailSetoranController = DetailSetoranController = __decorate([
    (0, swagger_1.ApiTags)('Detail Setoran'),
    (0, common_1.Controller)('detail-setoran'),
    __metadata("design:paramtypes", [detail_sampah_service_1.DetailSetoranService])
], DetailSetoranController);
//# sourceMappingURL=detail_sampah.controller.js.map