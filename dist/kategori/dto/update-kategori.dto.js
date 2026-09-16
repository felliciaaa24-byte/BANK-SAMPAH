"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateKategoriDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_kategori_dto_1 = require("./create-kategori.dto");
class UpdateKategoriDto extends (0, swagger_1.PartialType)(create_kategori_dto_1.CreateKategoriDto) {
}
exports.UpdateKategoriDto = UpdateKategoriDto;
//# sourceMappingURL=update-kategori.dto.js.map