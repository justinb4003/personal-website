import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from 'src/app/components/pages/projects/projects.component';
import { AboutComponent } from 'src/app/components/pages/about/about.component';

const routes: Routes = [
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
