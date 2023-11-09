import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuotableService } from '../quotable.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent {
  searchForm: FormGroup = this.fb.group({
    query: [''],
  });
  quoteData: string[] = [];

  constructor(private fb: FormBuilder, private quoteService: QuotableService) {}

  onSubmit() {
    const query = this.searchForm.get('query')?.value;
    if (query) {
      this.quoteService.getRandomQuote().subscribe((quote: any) => {
        this.quoteData.push(quote);
      });
    }
  }
}
