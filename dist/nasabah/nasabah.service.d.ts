import { PrismaService } from '../prisma/prisma.service';
import { CreateNasabahDto } from './dto/create-nasabah.dto';
import { UpdateNasabahDto } from './dto/update-nasabah.dto';
export declare class NasabahService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createNasabahDto: CreateNasabahDto): import(".prisma/client").Prisma.Prisma__NasabahClient<{
        nama_nasabah: string;
        alamat: string;
        telepon: string;
        saldo_poin: number;
        foto: string;
        id: number;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        user: {
            id: number;
            username: string;
            email: string;
            password: string;
            role: import(".prisma/client").$Enums.Role;
        };
        setoran: {
            id: number;
            userId: number;
            nasabahId: number;
            adminId: number;
            jumlah: number;
            tanggal: Date;
            status: import(".prisma/client").$Enums.STATUS;
        }[];
    } & {
        nama_nasabah: string;
        alamat: string;
        telepon: string;
        saldo_poin: number;
        foto: string;
        id: number;
        userId: number;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__NasabahClient<({
        user: {
            id: number;
            username: string;
            email: string;
            password: string;
            role: import(".prisma/client").$Enums.Role;
        };
        setoran: {
            id: number;
            userId: number;
            nasabahId: number;
            adminId: number;
            jumlah: number;
            tanggal: Date;
            status: import(".prisma/client").$Enums.STATUS;
        }[];
    } & {
        nama_nasabah: string;
        alamat: string;
        telepon: string;
        saldo_poin: number;
        foto: string;
        id: number;
        userId: number;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateNasabahDto: UpdateNasabahDto): import(".prisma/client").Prisma.Prisma__NasabahClient<{
        nama_nasabah: string;
        alamat: string;
        telepon: string;
        saldo_poin: number;
        foto: string;
        id: number;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__NasabahClient<{
        nama_nasabah: string;
        alamat: string;
        telepon: string;
        saldo_poin: number;
        foto: string;
        id: number;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
