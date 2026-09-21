import { NasabahService } from './nasabah.service';
import { CreateNasabahDto } from './dto/create-nasabah.dto';
import { UpdateNasabahDto } from './dto/update-nasabah.dto';
export declare class NasabahController {
    private readonly nasabahService;
    constructor(nasabahService: NasabahService);
    create(createNasabahDto: CreateNasabahDto, req: any): Promise<{
        id: number;
        foto: string;
        userId: number;
        nama_nasabah: string;
        alamat: string;
        telepon: string;
        saldo_poin: number;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        user: {
            id: number;
            username: string;
            email: string;
            password: string;
            role: import(".prisma/client").$Enums.Role;
        };
        setoran: {
            tanggal: Date;
            status: import(".prisma/client").$Enums.STATUS;
            id: number;
            userId: number;
            nasabahId: number;
            adminId: number | null;
            jumlah: number;
        }[];
    } & {
        id: number;
        foto: string;
        userId: number;
        nama_nasabah: string;
        alamat: string;
        telepon: string;
        saldo_poin: number;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__NasabahClient<({
        user: {
            id: number;
            username: string;
            email: string;
            password: string;
            role: import(".prisma/client").$Enums.Role;
        };
        setoran: {
            tanggal: Date;
            status: import(".prisma/client").$Enums.STATUS;
            id: number;
            userId: number;
            nasabahId: number;
            adminId: number | null;
            jumlah: number;
        }[];
    } & {
        id: number;
        foto: string;
        userId: number;
        nama_nasabah: string;
        alamat: string;
        telepon: string;
        saldo_poin: number;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateNasabahDto: UpdateNasabahDto): Promise<{
        id: number;
        foto: string;
        userId: number;
        nama_nasabah: string;
        alamat: string;
        telepon: string;
        saldo_poin: number;
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__NasabahClient<{
        id: number;
        foto: string;
        userId: number;
        nama_nasabah: string;
        alamat: string;
        telepon: string;
        saldo_poin: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
