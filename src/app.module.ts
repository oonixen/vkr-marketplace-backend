import { Module } from '@nestjs/common';
import { CustomersModule } from './models/customers/customers.module';
import { Customers } from './models/customers/customers.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';

const configDynamicModule = ConfigModule.forRoot({
  envFilePath: `.env.${process.env.NODE_ENV}`,
});
const sequelizeDynamicModule = SequelizeModule.forRoot({
  dialect: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  timezone: '+03:00',
  models: [Customers],
  define: { timestamps: false },
});

@Module({
  controllers: [],
  providers: [],
  imports: [configDynamicModule, sequelizeDynamicModule, CustomersModule],
})
export class AppModule {}
