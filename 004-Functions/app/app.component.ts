import { Component } from '@angular/core';

@Component({
    selector: 'btn',
    templateUrl: './app/template/helo.html'
})
export class AppComponent  {

    countVal : number;

    constructor() {
        this.countVal = 0;
     }

     updateVal() : void {
         console.log("Before Value of count : ",this.countVal);
        this.countVal++; 
        console.log("After Value of count : ",this.countVal);
     }

}