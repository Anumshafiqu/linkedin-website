import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkedinHomePageComponent } from './linkedin-home-page/linkedin-home-page.component';
import { MesssagePageComponent } from './messsage-page/messsage-page.component';

const routes: Routes = [
  {path : '' , component : LinkedinHomePageComponent},
  {path : 'linkedin-home-page' , component : LinkedinHomePageComponent},
  {path : 'message-page' , component : MesssagePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
