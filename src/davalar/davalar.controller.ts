import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DavalarService } from './davalar.service';
import { CreateDavalarDto } from './create-davalar.dto';

@Controller('davalar')
export class DavalarController {
  constructor(private readonly davalarService: DavalarService) {}

  @Post('/insert')
  create(@Body() createDavalarDto: CreateDavalarDto) {
    return this.davalarService.create(createDavalarDto);
  }

  @Get()
  findAll() {
    return this.davalarService.findAll();
  }

  @Get(':mail')
  findOne(@Param('mail') mail: string) {
    return this.davalarService.findOne(mail);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDavalarDto: CreateDavalarDto) {
    return this.davalarService.update(+id, updateDavalarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.davalarService.remove(+id);
  }
}
