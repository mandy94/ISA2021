import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-table',
  templateUrl: './content-table.component.html',
  styleUrls: ['./content-table.component.css']
})
export class ContentTableComponent implements OnInit {

  @Input() displayedColumnsIndexes: string[];
  @Input() displayedColumnsTitles: string[];
  @Input() dataSource: any;
  constructor() { }
  ngOnInit() {
   
  }
  test( item){
    console.log(item)
  }
}
