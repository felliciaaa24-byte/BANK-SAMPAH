import { PrismaService } from '../prisma/prisma.service';
import { CreateNasabahDto } from './dto/create-nasabah.dto';
import { UpdateNasabahDto } from './dto/update-nasabah.dto';
export declare class NasabahService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateNasabahDto, userId: number): Promise<{
        id: number;
        userId: number;
        nama_nasabah: string;
        alamat: string;
        telepon: string;
        saldo_poin: number;
        foto: string;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        setoran: {
            status: import(".prisma/client").$Enums.STATUS;
            id: number;
            userId: number;
            nasabahId: number;
            adminId: number | null;
            jumlah: number;
            tanggal: Date;
        }[];
        user: {
            id: number;
            username: string;
            email: string;
            password: string;
            role: import(".prisma/client").$Enums.Role;
        };
    } & {
        id: number;
        userId: number;
        nama_nasabah: string;
        alamat: string;
        telepon: string;
        saldo_poin: number;
        foto: string;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__NasabahClient<({
        setoran: {
            status: import(".prisma/client").$Enums.STATUS;
            id: number;
            userId: number;
            nasabahId: number;
            adminId: number | null;
            jumlah: number;
            tanggal: Date;
        }[];
        user: {
            id: number;
            username: string;
            email: string;
            password: string;
            role: import(".prisma/client").$Enums.Role;
        };
    } & {
        id: number;
        userId: number;
        nama_nasabah: string;
        alamat: string;
        telepon: string;
        saldo_poin: number;
        foto: string;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, dto: UpdateNasabahDto): Promise<{
        id: number;
        userId: number;
        nama_nasabah: string;
        alamat: string;
        telepon: string;
        saldo_poin: number;
        foto: string;
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__NasabahClient<{
        id: number;
        userId: number;
        nama_nasabah: string;
        alamat: string;
        telepon: string;
        saldo_poin: number;
        foto: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
