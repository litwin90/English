import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-menu-button-desktop',
    templateUrl: './menu-button-desktop.component.html',
    styleUrls: ['./menu-button-desktop.component.scss'],
})
export class MenuButtonDesktopComponent {
    @Input() icon: string;
    @Input() text: string;
}
