import { Component , Input} from '@angular/core';

@Component({
  selector: 'number-com',
  template: 
  `
    <br><hr><br>
    <div><label>How looks model :  {{num}}</label></div>
    <div>Type of : {{isNumber(num)}}</div>
  `
  , 
  styleUrls: ['app.component.css']
})

export class NumberComponent {
  
    @Input() num: number;
    
    // toNumber(number){
    //     return this.num2= +number;
    // }

    isNumber(val) { return typeof val }
}