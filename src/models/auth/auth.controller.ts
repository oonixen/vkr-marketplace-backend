import { Body, Controller, Post, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthSendCodeBodyDto } from './dto/auth.send-code.body.dto';
import { AuthVerifyCodeBodyDto } from './dto/auth.verify-code.body.dto';
import { RefreshTokenGuard } from './guards/refresh-token.guard';
import { Request } from 'express';
import { RefreshJWTTokenPayload } from './strategies/refresh-token.strategy';
import { ValidationNotEmptyPipe } from 'src/common/pipes/validations/validation.not-empty.pipe';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UsePipes(ValidationNotEmptyPipe)
  @Post('send-code')
  sendCode(@Body() dto: AuthSendCodeBodyDto) {
    return this.authService.sendCode(dto);
  }

  @UsePipes(ValidationNotEmptyPipe)
  @Post('verify-code')
  verifyCode(@Body() dto: AuthVerifyCodeBodyDto) {
    return this.authService.verifyCode(dto);
  }

  @UseGuards(RefreshTokenGuard)
  @Post('refresh-token')
  refresh(@Req() req: Request & RefreshJWTTokenPayload) {
    const { id, refreshToken } = req.user;
    return this.authService.refresh(id, refreshToken);
  }
}
