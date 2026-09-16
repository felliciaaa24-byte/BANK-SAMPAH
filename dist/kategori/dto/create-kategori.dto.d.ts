import { Jenis } from '@prisma/client';
export declare class CreateKategoriDto {
    nama_kategori: string;
    harga_perKilo: number;
    poin_perKilo: number;
    jenis_sampaj: Jenis;
    foto: string;
}
