import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CustomersAuth } from '../customers-auth/customers-auth.model';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize';
import { AuthSendCodeBodyDto } from './dto/auth.send-code.body.dto';
import { AuthVerifyCodeBodyDto } from './dto/auth.verify-code.body.dto';
import { hash, verify } from 'argon2';
import { Customers } from '../customers/customers.model';
import { ErrorMessageHttp } from 'src/common/error-message/error-message.http';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(CustomersAuth) private customersAuthDb: typeof CustomersAuth,
    private jwtService: JwtService,
    @InjectModel(Customers) private customersDb: typeof Customers,
  ) {}

  async sendCode(dto: AuthSendCodeBodyDto) {
    //send sms
    //
    return;
  }

  async verifyCode(dto: AuthVerifyCodeBodyDto) {
    //verify code from sms
    //

    let customer = await this.customersDb.findOne({ where: { phone: dto.phone }, include: [CustomersAuth] });
    if (!customer) customer = await this.customersDb.create({ phone: dto.phone, balance: 10000 });

    return await this.getTokens(customer);
  }

  async refresh(id: string, refreshToken: string) {
    const customer = await this.customersDb.findOne({ where: { id }, include: [CustomersAuth] });
    const refreshTokenFromDb = customer.customers_auth.refresh_token;
    const isTokensMatch = await verify(refreshTokenFromDb, refreshToken, {
      secret: Buffer.from(process.env.HASH_SECRET),
    });

    if (!isTokensMatch) throw new HttpException(ErrorMessageHttp.toBeUnauthorized, HttpStatus.UNAUTHORIZED);
    return await this.getTokens(customer);
  }

  private async getTokens(customer: Customers) {
    const tokens = await this.createTokens(customer.id);
    await this.setRefreshToken(customer, tokens.refresh);
    return tokens;
  }

  private async createTokens(id: string) {
    const [access, refresh] = await Promise.all([
      this.jwtService.signAsync({ id }, { secret: process.env.JWT_ACCESS_SECRET, expiresIn: '1h' }),
      this.jwtService.signAsync({ id }, { secret: process.env.JWT_REFRESH_SECRET, expiresIn: '7d' }),
    ]);
    return { access, refresh };
  }

  private async setRefreshToken(customer: Customers, refreshToken: string) {
    const hashedRefreshToken = await hash(refreshToken, { secret: Buffer.from(process.env.HASH_SECRET) });
    if (!customer.customers_auth)
      return await this.customersAuthDb.create({ customer_id: customer.id, refresh_token: hashedRefreshToken });
    return await this.customersAuthDb.update(
      { refresh_token: hashedRefreshToken },
      { where: { customer_id: customer.id } },
    );
  }
}
