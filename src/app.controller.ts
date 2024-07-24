import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/checkDb')
  async checkDb() {
    return await this.appService.checkDb();
  }

  @Get('/checkapi')
  checkApi(): string {
    return this.appService.checkApi();
  }

  @Get('/checkrpc')
  checkRpc(): string {
    return this.appService.checkRpc();
  }
}
