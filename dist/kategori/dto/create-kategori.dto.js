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
exports.CreateKategoriDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const client_1 = require("@prisma/client");
class CreateKategoriDto {
}
exports.CreateKategoriDto = CreateKategoriDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Botol Plastik' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateKategoriDto.prototype, "nama_kategori", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5000 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateKategoriDto.prototype, "harga_perKilo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateKategoriDto.prototype, "poin_perKilo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: client_1.Jenis,
        example: client_1.Jenis.PLASTIK,
    }),
    (0, class_validator_1.IsEnum)(client_1.Jenis),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateKategoriDto.prototype, "jenis_sampaj", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'botol-plastik.jpg' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], CreateKategoriDto.prototype, "foto", void 0);
//# sourceMappingURL=create-kategori.dto.js.map