import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { History } from '../Model/History';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDateService implements InMemoryDbService {

  createDb() {
    const histories = [
      {
        'id': 1210,
        'fromCity': 'Bangalore',
        'toCity': 'Chennai',
        'status': 'inprogress',
        'date': '27/02/2019',
        'amount': '5000',
        'progress': {
          'started': true,
          'travel': true,
          'city': false,
          'completed': false
        }
      }, {
        'id': 1211,
        'fromCity': 'coimbatore',
        'toCity': 'Bangalore',
        'status': 'completed',
        'date': '12/10/2018',
        'amount': '5000'
      }, {
        'id': 1212,
        'fromCity': 'erode',
        'toCity': 'coimbatore',
        'status': 'completed',
        'date': '12/10/2016',
        'amount': '5000'
      }, {
        'id': 1213,
        'fromCity': 'madurai',
        'toCity': 'erode',
        'status': 'completed',
        'date': '12/10/2014',
        'amount': '5000'
      }
    ];
    return { histories };
  }
  parseRequestUrl(url: string, utils: any) {
    const newUrl = 'http://localhost:4200/api/histories';
    const parsed = utils.parseRequestUrl(newUrl);
    return parsed;
  }


  genId(histories: History[]): number {
    return histories.length > 0 ? Math.max(...histories.map(hero => hero.id)) + 1 : 11;
  }
  constructor() { }
}
