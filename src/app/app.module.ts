import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Ng2PageScrollModule} from 'ng2-page-scroll';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { AchievementsComponent } from './component/achievements/achievements.component';
import { LeadershipTeamComponent } from './component/leadership-team/leadership-team.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    AchievementsComponent,
    LeadershipTeamComponent,
    ProjectsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    Ng2PageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
