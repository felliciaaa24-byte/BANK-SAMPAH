"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateHadiahDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_hadiah_dto_1 = require("./create-hadiah.dto");
class UpdateHadiahDto extends (0, swagger_1.PartialType)(create_hadiah_dto_1.CreateHadiahDto) {
}
exports.UpdateHadiahDto = UpdateHadiahDto;
//# sourceMappingURL=update-hadiah.dto.js.map