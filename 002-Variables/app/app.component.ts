import { Component } from '@angular/core';

@Component({
    selector: 'my-name',
    template: '<h2>My Name is {{name}} {{age}}</h2>'
})
export class AppComponent {
     name: string;
     age: int;
    constructor() { 
        console.log("Welcome To angular 2");
        this.name = "Muhammad Mateen";
        this.age = "adsjfbd";
    }
}