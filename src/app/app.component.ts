import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';

  number: string;
  numNotComma: string;
  
  removeCommas(number : string){
    this.number = this.number.replace(/[',\s]/g,"");
  }

  addCommas(number: string){
    this.number = this.number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  showNumberFocus(number: string){
    this.numNotComma = this.number.replace(/[',\s]/g,"");
    return parseInt(this.numNotComma);
    // return this.numNotComma;
  }

  showNumberBlur(number: string){
    this.numNotComma = this.number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return this.numNotComma;
  }
  
  addCommasevent(){
    this.number = this.number.replace(/[',\s]/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // isNumber(val) { return typeof val }

  onlyNumberKey(event) {
      return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
  }

}
