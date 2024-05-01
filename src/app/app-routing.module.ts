import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkedinHomePageComponent } from './linkedin-home-page/linkedin-home-page.component';

const routes: Routes = [
  {path : 'linkedin-home-page' , component : LinkedinHomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
