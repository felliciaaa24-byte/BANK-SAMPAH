import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    create(dto: CreateAdminDto, req: any): Promise<{
        id: number;
        status: import(".prisma/client").$Enums.StatusAdmin;
        userId: number;
        nama_unit: string;
        nama_pengelola: string;
        telpon: string;
        createdAt: Date;
        updatedAt: Date;
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
        id: number;
        status: import(".prisma/client").$Enums.StatusAdmin;
        userId: number;
        nama_unit: string;
        nama_pengelola: string;
        telpon: string;
        createdAt: Date;
        updatedAt: Date;
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
        id: number;
        status: import(".prisma/client").$Enums.StatusAdmin;
        userId: number;
        nama_unit: string;
        nama_pengelola: string;
        telpon: string;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__AdminClient<({
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
        id: number;
        status: import(".prisma/client").$Enums.StatusAdmin;
        userId: number;
        nama_unit: string;
        nama_pengelola: string;
        telpon: string;
        createdAt: Date;
        updatedAt: Date;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    approve(id: number): Promise<{
        id: number;
        status: import(".prisma/client").$Enums.StatusAdmin;
        userId: number;
        nama_unit: string;
        nama_pengelola: string;
        telpon: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    reject(id: number): Promise<{
        id: number;
        status: import(".prisma/client").$Enums.StatusAdmin;
        userId: number;
        nama_unit: string;
        nama_pengelola: string;
        telpon: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, updateAdminDto: UpdateAdminDto): import(".prisma/client").Prisma.Prisma__AdminClient<{
        id: number;
        status: import(".prisma/client").$Enums.StatusAdmin;
        userId: number;
        nama_unit: string;
        nama_pengelola: string;
        telpon: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__AdminClient<{
        id: number;
        status: import(".prisma/client").$Enums.StatusAdmin;
        userId: number;
        nama_unit: string;
        nama_pengelola: string;
        telpon: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
