import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AchievementsComponent} from './component/achievements/achievements.component'

const routes: Routes = [
  { path: 'achievements', component: AchievementsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
