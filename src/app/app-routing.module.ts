import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'AboutUs', component: AboutUsComponent},
  {path: 'Contact', component: ContactComponent},
  {path: 'View', component: ViewComponent},
  {path: 'View/:id', component: ViewComponent},
  {path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
