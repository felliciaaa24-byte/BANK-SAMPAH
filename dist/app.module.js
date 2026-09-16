"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("./prisma/prisma.module");
const auth_module_1 = require("./auth/auth.module");
const nasabah_module_1 = require("./nasabah/nasabah.module");
const admin_module_1 = require("./admin/admin.module");
const setor_module_1 = require("./setor/setor.module");
const kategori_module_1 = require("./kategori/kategori.module");
const detail_sampah_module_1 = require("./detail_sampah/detail_sampah.module");
const hadiah_module_1 = require("./hadiah/hadiah.module");
const penukaran_point_module_1 = require("./penukaran_point/penukaran_point.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            nasabah_module_1.NasabahModule,
            admin_module_1.AdminModule,
            setor_module_1.SetoranModule,
            kategori_module_1.KategoriModule,
            detail_sampah_module_1.DetailSetoranModule,
            hadiah_module_1.HadiahModule,
            penukaran_point_module_1.PenukaranModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map