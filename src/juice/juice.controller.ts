import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('juice')
export class JuiceController {
  @Get()
  findAll(): string {
    return 'Esta rota exibe todos os sucos';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `Esta rota exibe o suco de número ${id}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }
}
