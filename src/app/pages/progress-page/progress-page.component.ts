import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import {MovedHistoryService} from "../../services/moved-history.service";
import Progress from 'src/app/Model/progress';

@Component({
  selector: 'app-progress-page',
  templateUrl: './progress-page.component.html',
  styleUrls: ['./progress-page.component.scss']
})
export class ProgressPageComponent implements OnInit {
   progress: Progress;


  private id : string;
  constructor(private route: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private movedHistoryService:MovedHistoryService) {
    
   }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    console.log("id",this.id);
  this.movedHistoryService.getProgress(Number(this.id)).subscribe(history => this.progress = history.progress);

  }

}
