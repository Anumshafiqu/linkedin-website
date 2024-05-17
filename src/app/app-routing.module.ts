import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkedinHomePageComponent } from './linkedin-home-page/linkedin-home-page.component';
import { MesssagePageComponent } from './messsage-page/messsage-page.component';
import { NetworkPageComponent } from './network-page/network-page.component';
import { JobsPageComponent } from './jobs-page/jobs-page.component';
import { NotificationPageComponent } from './notification-page/notification-page.component';

const routes: Routes = [
  {path : '' , component : LinkedinHomePageComponent},
  {path : 'linkedin-home-page' , component : LinkedinHomePageComponent},
  {path : 'network-page' , component : NetworkPageComponent},
  {path : 'jobs-page' , component : JobsPageComponent},
  {path : 'message-page' , component : MesssagePageComponent},
  {path : 'notification-page' , component : NotificationPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
