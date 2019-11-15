import { Component } from '@angular/core';
import { MenuItems } from '../menu.models';

@Component({
    selector: 'app-menu-desktop',
    templateUrl: './menu-desktop.component.html',
    styleUrls: ['./menu-desktop.component.scss'],
})
export class MenuDesktopComponent {
    MenuItems = MenuItems;
}
