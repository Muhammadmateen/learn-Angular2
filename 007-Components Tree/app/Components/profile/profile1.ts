import { Component } from '@angular/core';

import {pro2Com} from './profile2';


@Component({
    selector: 'pro1',
    templateUrl: './app/template/profile/profile1.html',
    directives:[pro2Com]
})
export class pro1Com {

    constructor() { }

}