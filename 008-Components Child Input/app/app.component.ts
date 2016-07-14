import { Component } from '@angular/core';
import {childComponent} from './child.component';

@Component({
    selector: 'my-app',
    template: `<h1>This is the root component</h1>
                <child-input name="Muhammad Fahim"></child-input>
                `,
    directives:[childComponent]
})
export class AppComponent {

    constructor() { }

}