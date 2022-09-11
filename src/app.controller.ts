import { Controller, Get } from '@nestjs/common';
@Controller()
export class AppController {
  @Get('/health')
  healthCheck(): string {
    console.log('111');
    return 'success';
  }
}
