import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'courses', component: CourseListComponent},
  {path: 'courses/:courseId', component: CourseViewerComponent},
  {path: 'courses/:courseId/modules/:moduleId/lessons', component: CourseViewerComponent},
  {path: 'courses/:courseId/modules/:moduleId/lessons/:lessonId/topics', component: CourseViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }