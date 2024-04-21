import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AccessTokenStrategy } from './strategies/access-token.strategy';
import { RefreshTokenStrategy } from './strategies/refresh-token.strategy';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customers } from '../customers/customers.model';
import { CustomersAuth } from '../customers-auth/customers-auth.model';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AccessTokenStrategy, RefreshTokenStrategy],
  imports: [SequelizeModule.forFeature([CustomersAuth, Customers]), JwtModule.register({})],
})
export class AuthModule {}
