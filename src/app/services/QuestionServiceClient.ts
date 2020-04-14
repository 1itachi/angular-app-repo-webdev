import {Injectable} from '@angular/core';

@Injectable()
export class QuestionServiceClient {
  findQuestionsForQuiz = (qid) =>
    fetch(`https://assignment8-nodejs.herokuapp.com/api/quizzes/${qid}/questions`)
      .then(response => response.json())
}
