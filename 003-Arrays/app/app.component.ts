import { Component } from '@angular/core';

@Component({
    selector: 'pro-file',
    templateUrl: './app/template/profile.html'
})
export class AppComponent {
    
    name:string;
    age: Number;
    cities : string[];
   

    constructor() {
        console.log("My Country is ",this.country);
        this.name = "Muhammad Mateen";
        this.age = 25;
        this.cities = ["Karachi","Multan","Islamabad","Lahore","Quetta"];
     }

    country : string = "PAkistan";
    

}