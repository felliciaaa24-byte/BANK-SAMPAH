import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

console.log('DATABASE:', process.env.DATABASE_URL);
describe('JWT Token E2E Test', () => {
  let app: INestApplication;
  let token: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule =
      await Test.createTestingModule({
        imports: [AppModule],
      }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('POST /auth/login - mendapatkan JWT token', async () => {
  const response = await request(app.getHttpServer())
    .post('/auth/login')
    .send({
      email: 'felli24@gmail.com',
      password: 'felli24',
    });

  console.log('STATUS:', response.status);
  console.log('BODY:', response.body);

  expect(response.status).toBe(201);

  expect(response.body.access_token).toBeDefined();

  token = response.body.access_token;
});

  it('POST /nasabah - ditolak tanpa token', async () => {
    await request(app.getHttpServer())
      .post('/nasabah')
      .send({
        nama_nasabah: 'Feli',
        alamat: 'Malang',
        telepon: '081234567890',
        foto: 'foto.jpg',
      })
      .expect(401);
  });

  it('POST /nasabah - diterima dengan JWT token', async () => {
    await request(app.getHttpServer())
      .post('/nasabah')
      .set('Authorization', `Bearer ${token}`)
      .send({
        nama_nasabah: 'Feli',
        alamat: 'Malang',
        telepon: '081234567890',
        foto: 'foto.jpg',
      })
      .expect((response) => {
        expect(response.status).not.toBe(401);
      });
  });

  it('POST /nasabah - ditolak dengan token palsu', async () => {
    await request(app.getHttpServer())
      .post('/nasabah')
      .set('Authorization', 'Bearer token-palsu')
      .send({
        nama_nasabah: 'Feli',
        alamat: 'Malang',
        telepon: '081234567890',
        foto: 'foto.jpg',
      })
      .expect(401);
  });
});