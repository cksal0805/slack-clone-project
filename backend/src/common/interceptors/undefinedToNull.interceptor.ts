import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";

// 인터셉터랑 미들웨어 차이점
// 인터셉터는 AOP의 용어
// 관심사를 가로로 분리
// 인터셉터는 컨트롤러 실행 전 후로 동시에 관리 가능, 미들웨어는 컨트롤러 실행 전 후 한가지만 관리 가능
@Injectable()
export class UndefinedToNullInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<any> | Promise<Observable<any>> {
    // 컨트롤러 가기 전 부분에서 undefined check 처리 null or data
    return next.handle().pipe(
      map(data => (data === undefined ? null : data))
    )
  }
} 