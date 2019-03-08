import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthService } from './services/auth/auth.service';

import { CacheInterceptor } from './interceptors/cache.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    {
      useClass: CacheInterceptor,
      provide: HTTP_INTERCEPTORS,
      multi: true
    }
  ]
})
export class SharedModule { }
