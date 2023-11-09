import { Component, Input, OnInit } from '@angular/core';
// import { QuotableService } from '../quotable.service';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
})
export class QuoteListComponent implements OnInit {
  @Input() quotes: any[] = [];

  // constructor(private quotableService: QuotableService) {}

  ngOnInit() {
  }

  // search() {
  // }
}
