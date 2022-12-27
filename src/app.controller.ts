import { Body, Controller, Get, Patch, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { SchemaType } from './types/SchemaType';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('/health')
  getHello(): string {
    return 'Hello World!';
  }
  // get the credential schema
  @Get()
  getCredentialSchema(@Query() query) {
    console.log('id: ', query.id);
    return this.appService.credentialSchema({ id: query.id });
  }

  @Post()
  createCredentialSchema(@Body() body: SchemaType) {
    return this.appService.createCredentialSchema(body);
  }

  @Patch()
  updateCredentialSchema(@Query() query, @Body() data: SchemaType) {
    console.log('id: ', query.id);
    console.log('body: ', data);
    return this.appService.updateCredentialSchema({
      where: { id: query.id },
      data,
    });
  }
}
