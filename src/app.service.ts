import { Global, Injectable, Scope } from '@nestjs/common';

@Injectable()
//   {
//   scope: Scope.DEFAULT --> singleton
//   scope: Scope.REQUEST --> on each http req
//   scope: Scope.TRANSIENT --> on each new injection
// }
export class AppService {
  console() {
    console.log('consoled');
  }
  getHello(): string {
    return 'get api worked completed';
  }
}
