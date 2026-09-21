import { PrismaService } from '../prisma/prisma.service';
import { CreateSetoranDto } from './dto/create-setor.dto';
export declare class SetoranService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateSetoranDto, userId: number): Promise<{
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
        } | null;
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
        adminId: number | null;
        userId: number;
    }>;
}
