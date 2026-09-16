import { PrismaService } from '../prisma/prisma.service';
import { CreateSetoranDto } from './dto/create-setor.dto';
import { UpdateSetoranDto } from './dto/update-setor.dto';
export declare class SetoranService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createSetoranDto: CreateSetoranDto): import(".prisma/client").Prisma.Prisma__SetoranClient<{
        jumlah: number;
        tanggal: Date;
        status: import(".prisma/client").$Enums.STATUS;
        id: number;
        nasabahId: number;
        adminId: number;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        nasabah: {
            id: number;
            userId: number;
            nama_nasabah: string;
            alamat: string;
            telepon: string;
            saldo_poin: number;
            foto: string;
        };
        admin: {
            id: number;
            userId: number;
            nama_unit: string;
            nama_pengelola: string;
            telpon: string;
        };
        user: {
            id: number;
            username: string;
            email: string;
            password: string;
            role: import(".prisma/client").$Enums.Role;
        };
        detailSetoran: {
            id: number;
            setoranId: number;
            kategoriId: number;
            berat_kg: number;
            sub_totalPoint: number;
        }[];
    } & {
        jumlah: number;
        tanggal: Date;
        status: import(".prisma/client").$Enums.STATUS;
        id: number;
        nasabahId: number;
        adminId: number;
        userId: number;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__SetoranClient<({
        nasabah: {
            id: number;
            userId: number;
            nama_nasabah: string;
            alamat: string;
            telepon: string;
            saldo_poin: number;
            foto: string;
        };
        admin: {
            id: number;
            userId: number;
            nama_unit: string;
            nama_pengelola: string;
            telpon: string;
        };
        user: {
            id: number;
            username: string;
            email: string;
            password: string;
            role: import(".prisma/client").$Enums.Role;
        };
        detailSetoran: {
            id: number;
            setoranId: number;
            kategoriId: number;
            berat_kg: number;
            sub_totalPoint: number;
        }[];
    } & {
        jumlah: number;
        tanggal: Date;
        status: import(".prisma/client").$Enums.STATUS;
        id: number;
        nasabahId: number;
        adminId: number;
        userId: number;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateSetoranDto: UpdateSetoranDto): import(".prisma/client").Prisma.Prisma__SetoranClient<{
        jumlah: number;
        tanggal: Date;
        status: import(".prisma/client").$Enums.STATUS;
        id: number;
        nasabahId: number;
        adminId: number;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__SetoranClient<{
        jumlah: number;
        tanggal: Date;
        status: import(".prisma/client").$Enums.STATUS;
        id: number;
        nasabahId: number;
        adminId: number;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
