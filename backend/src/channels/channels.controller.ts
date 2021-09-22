import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('channels')
export class ChannelsController {
  @Get()
  getAllChannels() {

  }

  @Post()
  createChannel() {

  }

  @Get(':name')
  getSpecificChannel() {

  }

  @Get(':name/chats')
  getChats(@Query() query, @Param() param) {
    console.log(query, param)
  }

  @Post(':name/chats')
  postChat(@Body() body) {

  }

  @Get(':name/members')
  getAllMembers() {

  }

  @Post(':name/members')
  inviteMembers() {
    
  }
}
