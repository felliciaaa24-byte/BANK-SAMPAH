import { NasabahService } from './nasabah.service';
import { CreateNasabahDto } from './dto/create-nasabah.dto';
import { UpdateNasabahDto } from './dto/update-nasabah.dto';
export declare class NasabahController {
    private readonly nasabahService;
    constructor(nasabahService: NasabahService);
    create(createNasabahDto: CreateNasabahDto, req: any): Promise<{
        foto: string;
        id: number;
        userId: number;
        nama_nasabah: string;
        alamat: string;
        telepon: string;
        saldo_poin: number;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        setoran: {
            id: number;
            tanggal: Date;
            status: import(".prisma/client").$Enums.STATUS;
            jumlah: number;
            nasabahId: number;
            adminId: number | null;
            userId: number;
        }[];
        user: {
            id: number;
            username: string;
            email: string;
            password: string;
            role: import(".prisma/client").$Enums.Role;
        };
    } & {
        foto: string;
        id: number;
        userId: number;
        nama_nasabah: string;
        alamat: string;
        telepon: string;
        saldo_poin: number;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__NasabahClient<({
        setoran: {
            id: number;
            tanggal: Date;
            status: import(".prisma/client").$Enums.STATUS;
            jumlah: number;
            nasabahId: number;
            adminId: number | null;
            userId: number;
        }[];
        user: {
            id: number;
            username: string;
            email: string;
            password: string;
            role: import(".prisma/client").$Enums.Role;
        };
    } & {
        foto: string;
        id: number;
        userId: number;
        nama_nasabah: string;
        alamat: string;
        telepon: string;
        saldo_poin: number;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateNasabahDto: UpdateNasabahDto): Promise<{
        foto: string;
        id: number;
        userId: number;
        nama_nasabah: string;
        alamat: string;
        telepon: string;
        saldo_poin: number;
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__NasabahClient<{
        foto: string;
        id: number;
        userId: number;
        nama_nasabah: string;
        alamat: string;
        telepon: string;
        saldo_poin: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
