import { Component } from '@angular/core';

import {proCom} from './Components/profile/profile';
import {singupCom} from './Components/signup/signup'


@Component({
    selector: 'my-app',
    templateUrl: './app/template/home.html',
    directives:[proCom,singupCom]
})
export class AppComponent {

    constructor() { }

}