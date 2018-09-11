import { Component } from '@angular/core';


@Component({
  selector: 'appConvert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent {

  degree : number = 0.0; 

  result : string ="Result is : "
  toCel(){
    let c : number = (this.degree-32)/1.8;
    this.result = "Result is : " + c +"  C";
  }
  toFeh(){
    let f : number = this.degree*1.8+32;
    this.result = "Result is : " + f +"  F";
  } 

}
