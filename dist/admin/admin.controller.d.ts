import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    create(CreateAdminDto: CreateAdminDto, req: any): Promise<{
        id: number;
        userId: number;
        nama_unit: string;
        nama_pengelola: string;
        telpon: string;
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
        userId: number;
        nama_unit: string;
        nama_pengelola: string;
        telpon: string;
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__AdminClient<({
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
        userId: number;
        nama_unit: string;
        nama_pengelola: string;
        telpon: string;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateAdminDto: UpdateAdminDto): import(".prisma/client").Prisma.Prisma__AdminClient<{
        id: number;
        userId: number;
        nama_unit: string;
        nama_pengelola: string;
        telpon: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__AdminClient<{
        id: number;
        userId: number;
        nama_unit: string;
        nama_pengelola: string;
        telpon: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
