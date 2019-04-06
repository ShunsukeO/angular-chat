import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './error/not-found/not-found.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
// import { UsersModule } from './users/users.module';
// import { TimelineModule } from './timeline/timeline.module';

const routes: Routes = [
  { path: '', loadChildren: './timeline/timeline.module#TimelineModule'},
  // { path: '', loadChildren: () => TimelineModule},
  { path: 'users', loadChildren: './users/users.module#UsersModule' },
  // { path: 'users', loadChildren: () => UsersModule },
  { path: 'signup', component: SignUpComponent, canActivate: [ AuthGuard ] },
  { path: 'login', component: LoginComponent, canActivate: [ AuthGuard ] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ],
  declarations: [],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule { }
