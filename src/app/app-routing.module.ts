import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoggedInGuard } from './guards/logged-in.guard';

import { LoginComponent } from './components/login/login.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'protected', component: ProtectedComponent, canActivate: [ LoggedInGuard ]},
  {path: '', redirectTo: '/home', pathMatch: "full"},
  {path: "**", component: NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{ }
