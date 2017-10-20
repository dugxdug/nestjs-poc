import { Controller, Get, Req, Post, Body } from '@nestjs/common';
import { CreateCatDto } from '../dto/create-cat.dto';
import { Cat } from '../interfaces/cat.interface';
import { CatsService } from '../services/cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  findAll(@Req() request) {
    return this.catsService.findAll();
  }
}
