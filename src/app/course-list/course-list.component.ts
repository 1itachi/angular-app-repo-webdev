import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../services/CourseServiceClient';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  constructor(private service: CourseServiceClient) { }
  newCourseTitle = '';
  courses = [
    // {_id: '123', title: 'Course A'},
    // {_id: '234', title: 'Course B'},
    // {_id: '345', title: 'Course C'}
  ];

  deleteCourse = (deleteCourse) =>
    this.courses = this.courses.filter(course => course !== deleteCourse)
  createCourse = (title1) =>
      this.courses.push({_id: '777', title: title1})
  ngOnInit(): void {
      this.service.findAllCourses().then(courses => this.courses = courses);
  }

}
