import { Injectable } from '@angular/core';
import { MenuItems } from '../../configs/menu-items';

@Injectable({
    providedIn: 'root',
})
export class MenuService {
    public getMenuItem(id: number) {
        return MenuItems.find(item => item.id === id);
    }
}
