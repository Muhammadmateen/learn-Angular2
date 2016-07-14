import { Component } from '@angular/core';

@Component({
    selector: 'child-input',
    template: '<p>My name is {{name}}</p>',
    inputs:['name']
})
export class childComponent {
    
    name:string;

    constructor() { 
        this.name = "Muhammad Mateen";
        console.log("Child component call");
    }


}