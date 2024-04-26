import { Controller, Get, Req, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('world')
  getHello(@Req() request) {
    return {message: this.appService.getHello(), ip: request.ip};
  }

  @Post('world')
  createHello(@Req() request) {
    return {messge: "This is a post request for creating a greeting"}
  }
}
