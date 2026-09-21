import { PrismaService } from '../prisma/prisma.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
export declare class AdminService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateAdminDto, userId: number): Promise<{
        nama_unit: string;
        nama_pengelola: string;
        telpon: string;
        status: import(".prisma/client").$Enums.StatusAdmin;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
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
        nama_unit: string;
        nama_pengelola: string;
        telpon: string;
        status: import(".prisma/client").$Enums.StatusAdmin;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
    })[]>;
    findPending(): import(".prisma/client").Prisma.PrismaPromise<({
        user: {
            id: number;
            username: string;
            email: string;
            password: string;
            role: import(".prisma/client").$Enums.Role;
        };
    } & {
        nama_unit: string;
        nama_pengelola: string;
        telpon: string;
        status: import(".prisma/client").$Enums.StatusAdmin;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__AdminClient<({
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
        nama_unit: string;
        nama_pengelola: string;
        telpon: string;
        status: import(".prisma/client").$Enums.StatusAdmin;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    approve(id: number): Promise<{
        nama_unit: string;
        nama_pengelola: string;
        telpon: string;
        status: import(".prisma/client").$Enums.StatusAdmin;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
    }>;
    reject(id: number): Promise<{
        nama_unit: string;
        nama_pengelola: string;
        telpon: string;
        status: import(".prisma/client").$Enums.StatusAdmin;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
    }>;
    update(id: number, updateAdminDto: UpdateAdminDto): import(".prisma/client").Prisma.Prisma__AdminClient<{
        nama_unit: string;
        nama_pengelola: string;
        telpon: string;
        status: import(".prisma/client").$Enums.StatusAdmin;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__AdminClient<{
        nama_unit: string;
        nama_pengelola: string;
        telpon: string;
        status: import(".prisma/client").$Enums.StatusAdmin;
        createdAt: Date;
        updatedAt: Date;
        id: number;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
