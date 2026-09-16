import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    create(createAdminDto: CreateAdminDto): import(".prisma/client").Prisma.Prisma__AdminClient<{
        nama_unit: string;
        nama_pengelola: string;
        telpon: string;
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
        nama_unit: string;
        nama_pengelola: string;
        telpon: string;
        id: number;
        userId: number;
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
            id: number;
            userId: number;
            nasabahId: number;
            adminId: number;
            jumlah: number;
            tanggal: Date;
            status: import(".prisma/client").$Enums.STATUS;
        }[];
    } & {
        nama_unit: string;
        nama_pengelola: string;
        telpon: string;
        id: number;
        userId: number;
    }) | null, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateAdminDto: UpdateAdminDto): import(".prisma/client").Prisma.Prisma__AdminClient<{
        nama_unit: string;
        nama_pengelola: string;
        telpon: string;
        id: number;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__AdminClient<{
        nama_unit: string;
        nama_pengelola: string;
        telpon: string;
        id: number;
        userId: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
