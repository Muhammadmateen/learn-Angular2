import { Component } from '@angular/core';

import {signupComponent} from './signup';

@Component({

    selector: 'my-app',
    templateUrl: './app/template/home.html',
    directives:[signupComponent]

})
export class AppComponent {

    constructor() { }
}