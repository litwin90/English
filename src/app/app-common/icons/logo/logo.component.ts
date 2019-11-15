import { Component, OnInit, Input } from '@angular/core';
import { pxToRem } from '../../utils.ts/utils';

@Component({
    selector: 'app-logo',
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
    @Input() width: number;
    @Input() height: number;

    constructor() {}

    ngOnInit() {}

    getStyles() {
        return {
            ['width.rem']: this.width ? pxToRem(this.width) : undefined,
            ['height.rem']: this.height ? pxToRem(this.height) : undefined,
        };
    }
}
