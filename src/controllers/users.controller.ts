import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Controller('users')
export class UsersController {
  @Post()
  async create(@Body() body: { email: string; name?: string }) {
    return prisma.user.create({ data: body });
  }

  @Get(':id')
  async byId(@Param('id') id: string) {
    return prisma.user.findUnique({ where: { id } });
  }
}
