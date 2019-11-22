import { Component } from '@angular/core';

import { AppRoutes } from '../../app.routes';
import { IMenuItem, MenuItem } from '../../models/menu-item';
import { MenuItemsConfig } from '../../configs/menu-items';

@Component({
    selector: 'app-menu-desktop',
    templateUrl: './menu-desktop.component.html',
    styleUrls: ['./menu-desktop.component.scss'],
})
export class MenuDesktopComponent {
    MenuItems: IMenuItem[] = MenuItemsConfig.map(item => new MenuItem(item));

    getCurrentRoutePath(index: number) {
        return AppRoutes[index + 1];
    }
}
