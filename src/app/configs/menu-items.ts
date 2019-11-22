import { MenuItem } from '../models/menu-item';

export const MenuItemsConfig = ['At home', 'Walking', 'Games', 'Holidays'];

export const MenuItems = MenuItemsConfig.map(item => new MenuItem(item));
