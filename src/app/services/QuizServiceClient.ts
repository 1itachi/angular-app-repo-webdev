import {Injectable} from '@angular/core';

@Injectable()
export class QuizServiceClient {
  findAllQuizzes = () =>
    fetch('https://assignment8-nodejs.herokuapp.com/api/quizzes')
      .then(response => response.json())
  findQuizById = (qid) =>
    fetch(`https://assignment8-nodejs.herokuapp.com/api/quizzes/${qid}`)
      .then(response => response.json())
}
