import { Component, OnInit } from '@angular/core';
import { MovedHistoryService } from 'src/app/services/moved-history.service';
import {History} from '../../Model/History';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit {

 historyList: History[];

  constructor(private movedHistoryService:MovedHistoryService) { }

  ngOnInit() {
    this.getMovedHistories();
  }

  getMovedHistories():void{
    this.movedHistoryService.getMovedHistories().subscribe(historyList => this.historyList = historyList);
  }

}
