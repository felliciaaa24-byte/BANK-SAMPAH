import { SetoranService } from './setor.service';
import { CreateSetoranDto } from './dto/create-setor.dto';
export declare class SetoranController {
    private readonly setoranService;
    constructor(setoranService: SetoranService);
    create(createSetoranDto: CreateSetoranDto, req: any): Promise<{
        nasabah: {
            id: number;
            foto: string;
            userId: number;
            nama_nasabah: string;
            alamat: string;
            telepon: string;
            saldo_poin: number;
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
            kategoriId: number;
            berat_kg: number;
            sub_totalPoint: number;
            setoranId: number;
        }[];
    } & {
        tanggal: Date;
        status: import(".prisma/client").$Enums.STATUS;
        id: number;
        userId: number;
        nasabahId: number;
        adminId: number | null;
        jumlah: number;
    }>;
}
