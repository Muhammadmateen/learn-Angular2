import { Component } from '@angular/core';

import {pro3Com} from './profile3';

@Component({
    selector: 'pro2',
    templateUrl: './app/template/profile/profile2.html',
    directives:[pro3Com]
})
export class pro2Com {

    constructor() { }

}