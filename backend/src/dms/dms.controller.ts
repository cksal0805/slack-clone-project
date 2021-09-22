import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('api/workspaces/:url/dms')
export class DmsController {
  @Get(':id/chats')
  getChats(@Query() query, @Param() param) {
    console.log(query, param)
  }

  @Post(':id/chats')
  postChat(@Body() body) {

  }
}
