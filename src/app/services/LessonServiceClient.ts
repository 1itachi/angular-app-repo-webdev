import {Injectable} from '@angular/core';

@Injectable()
export class LessonServiceClient {
  findLessonsForModules = (mid) => {
    return fetch(`http://wbdv-generic-server.herokuapp.com/api/kumar.de/modules/${mid}/lessons`)
      .then(res => res.json());
  }
}
