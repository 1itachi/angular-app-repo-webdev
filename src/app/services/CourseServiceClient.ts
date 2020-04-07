import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  findCourseById = (courseId) => {
    return fetch(`http://wbdv-generic-server.herokuapp.com/api/kumar.de/courses/${courseId}`)
      .then(response => response.json());
  }

  findModulesForCourse = (cid) => {
    return fetch(`http://wbdv-generic-server.herokuapp.com/api/kumar.de/courses/${cid}/modules/`)
      .then(res => res.json());
  }

  findLessonsForModules = (mid) => {
    return fetch(`http://wbdv-generic-server.herokuapp.com/api/kumar.de/modules/${mid}/lessons`)
      .then(res => res.json());
  }

  findAllCourses = () =>
    fetch('http://wbdv-generic-server.herokuapp.com/api/kumar.de/courses')
      .then(response => response.json())
}
