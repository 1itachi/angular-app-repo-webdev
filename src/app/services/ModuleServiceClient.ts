import {Injectable} from '@angular/core';

@Injectable()
export class ModuleServiceClient {
  findModulesForCourse = (cid) => {
    return fetch(`http://wbdv-generic-server.herokuapp.com/api/kumar.de/courses/${cid}/modules/`)
      .then(res => res.json());
  }
}
