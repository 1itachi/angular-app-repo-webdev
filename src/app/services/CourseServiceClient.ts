import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findCourseById = (courseId) => {
    return fetch(`http://wbdv-generic-server.herokuapp.com/api/kumar.de/courses/${courseId}`)
      .then(response => response.json());
  }

  findAllCourses = () =>
    fetch('http://wbdv-generic-server.herokuapp.com/api/kumar.de/courses')
      .then(response => response.json())
}
