import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  factorialVal = 0;
  title = 'ang-node-test';
  num = new FormControl('');

  results: any = [];
  error = '';

  constructor(public rest: RestService) {
    
   }

  getFactorial() {
    this.results = [];
    this.rest.calFactorial(this.num).subscribe((data: {}) => {
      console.log(data);
      this.results = data;
      if(this.results.error == 0) {
        this.factorialVal = this.results.result;
        this.error = '';
      } else {
        this.error = this.results.message;
      }
    });
  }
}
