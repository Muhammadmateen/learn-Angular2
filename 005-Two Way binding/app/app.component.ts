import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app/Template/helo.html'
})
export class AppComponent {
    
    firstName: string;
    lastName:  string;
    details:    string;
    age: number;
    one_userInfo : Object;


    user_fName:string;
    user_lName:string;
    user_details:string;
    user_age:number;
    user_Obj : Object

    constructor() {
        this.firstName = "Muhammad";
        this.lastName = "Mateen";
        this.details = "I am a developer";
        this.age = 25;


        this.user_fName = "Muhammad Mateen";
        this.user_lName = "Mateen";
        this.user_details = "I am a Meanstack Developer";
        this.user_age = 25;


     };

    checkDetails()
    {
        this.one_userInfo = {
          firstName: this.firstName,
          lastName:this.lastName,
           details:this.details,
           age:this.age
        }
        console.log("Function call : ", this.one_userInfo);
    };


    checkUserDetails()
    {
        this.user_Obj = {
            firstName: this.user_fName,
            lastName:this.user_lName,
            details:this.user_details,
            age:this.user_age
        }

        console.log("Two way Funcation call : ",this.user_Obj);
    };

}