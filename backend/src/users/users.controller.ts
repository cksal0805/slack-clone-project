import { Body, Controller, Get, Post, Req, Res, UseInterceptors } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/common/decorators/user.decorator';
import { UserDto } from 'src/common/dto/user.dto';
import { UndefinedToNullInterceptor } from 'src/common/interceptors/undefinedToNull.interceptor';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

// UseInterceptors 로 언디파인드 체크 -> JSON에 undefined 들어가지 않도록 전체 api 처리 
@UseInterceptors(UndefinedToNullInterceptor)
@ApiTags('Users')
@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @ApiOkResponse({
    description: '성공',
    type: UserDto
  })
  @ApiResponse({
    status: 500,
    description: '서버에러',
  })
  @ApiOperation({ summary: '내 정보 조회' })
  @Get()
  getUsers(@User() user) {
    return user;
  }

  @ApiOperation({ summary: '회원가입' })
  @Post()
  postUsers(@Body() data: JoinRequestDto) {
    this.usersService.postUsers(data.email, data.nickname, data.password)
  }

  @ApiOperation({ summary: '로그인' })
  @Get('login')
  login(@User() user) {
    return user;
  }

  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  logOut(@Req() req, @Res() res) {
    req.logOut();
    res.clearCookie('connect.sid', { httpOnly: true });
    res.send('ok');
  }
}
