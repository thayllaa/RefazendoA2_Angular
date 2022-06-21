import { Component, OnInit } from '@angular/core';
import { ThayllaTasksService } from '../thaylla-tasks.service';

@Component({
  selector: 'app-thaylla-tasks',
  templateUrl: './thaylla-tasks.component.html',
  styleUrls: ['./thaylla-tasks.component.css']
})
export class ThayllaTasksComponent implements OnInit {

  constructor(private thatllaService: ThayllaTasksService) { }

  ngOnInit() {
  }
}