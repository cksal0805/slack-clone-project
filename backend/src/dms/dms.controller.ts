import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('DM')
@Controller('api/workspaces/:url/dms')
export class DmsController {
  @ApiParam({
    name: 'id',
    required: true,
    description: '사용자 id'
  })
  @ApiParam({
    name: 'url',
    required: true,
    description: '사용자 url'
  })
  @ApiQuery({
    name: 'page',
    required: true,
    description: '불러올 페이지'
  })
  @Get(':id/chats')
  getChats(@Query() query, @Param() param) {
    console.log(query, param)
  }

  @Post(':id/chats')
  postChat(@Body() body) {

  }
}
