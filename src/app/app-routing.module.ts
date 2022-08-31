import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { ContactResolverResolver } from './services/contact-resolver.resolver';
import { AuthGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {
    path: 'contact/edit/:id',
    component: ContactEditComponent,
    resolve: { contact: ContactResolverResolver },
  },
  {
    path: 'contact/edit',
    component: ContactEditComponent,
  },
  {
    path: 'contact/:id',
    component: ContactDetailsComponent,
    resolve: { contact: ContactResolverResolver },
  },
  { path: 'contact', component: ContactComponent,
  canActivate: [AuthGuardGuard] },
  { path: 'statistics', component: StatisticsComponent,
  canActivate: [AuthGuardGuard] },
  { path: 'signup', component: SignupComponent },
  {
    path: '',
    component: HomeComponent,
    // resolve: { pet: PetResolver },
    canActivate: [AuthGuardGuard]
  },
  // {
  //     path: '', component: PetAppComponent, children: [
  //         { path: 'edit/:id', component: PetEditComponent, resolve: { pet: PetResolver } },
  //         { path: 'edit', component: PetEditComponent }
  //     ]
  // }
]
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
