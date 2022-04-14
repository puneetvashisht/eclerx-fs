import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../authentication/services/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // get token
    const authToken = this.loginService.getToken();
    console.log(`Auth token is : ${authToken} `);

    // request.url.startsWith('auth')

    const authRequest = request.clone({
      headers: request.headers.set('Authorization', 'Bearer ' + authToken)
    })

    console.log(authRequest);
    

    return next.handle(authRequest);
  }
}
