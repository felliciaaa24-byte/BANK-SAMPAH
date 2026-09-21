import { PrismaService } from '../prisma/prisma.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
export declare class AdminService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateAdminDto, userId: number): Promise<{
        id: number;
        userId: number;
        nama_unit: string;
        nama_pengelola: string;
        telpon: string;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        user: {
            username: string;
            email: string;
            password: string;
            role: import(".prisma/client").$Enums.Role;
            id: number;
        };
        setoran: {
            id: number;
            userId: number;
            nasabahId: number;
            adminId: number | null;
            jumlah: number;
            tanggal: Date;
            status: import(".prisma/client").$Enums.STATUS;
        }[];
    } & {
        id: number;
        userId: number;
        nama_unit: string;
        nama_pengelola: string;
        telpon: string;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__AdminClient<({
        user: {
            username: string;
            email: string;
            password: string;
            role: import(".prisma/client").$Enums.Role;
            id: number;
        };
        setoran: {
            id: number;
            userId: number;
            nasabahId: number;
            adminId: number | null;
            jumlah: number;
            tanggal: Date;
            status: import(".prisma/client").$Enums.STATUS;
        }[];
    } & {
        id: number;
        userId: number;
        nama_unit: string;
        nama_pengelola: string;
        telpon: string;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateAdminDto: UpdateAdminDto): import(".prisma/client").Prisma.Prisma__AdminClient<{
        id: number;
        userId: number;
        nama_unit: string;
        nama_pengelola: string;
        telpon: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__AdminClient<{
        id: number;
        userId: number;
        nama_unit: string;
        nama_pengelola: string;
        telpon: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
