import { Component } from '@angular/core';

import {pro1Com} from './profile1';

@Component({
    selector: 'pro-file',
    templateUrl: './app/template/profile/profile.html',
    directives:[pro1Com]
})
export class proCom {

    constructor() { }

}