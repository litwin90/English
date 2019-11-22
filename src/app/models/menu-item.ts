import { Icons } from '../configs/icons';

export interface IMenuItem {
    id: number;
    name: string;
    routePath: string;
    iconClass: Icons;
}

export class MenuItem implements IMenuItem {
    id: number;
    name: string;
    routePath: string;
    iconClass: Icons;

    constructor(name: string) {
        this.id = this.getId();
        this.name = name;
        this.routePath = this.getRoutePath(name);
        this.iconClass = this.getIconClass(name);
    }

    private getId(): number {
        return Math.random() * 1000000;
    }

    private getRoutePath(name: string): string {
        const nameWords = name.split(' ');
        const loverCaseNames = nameWords.map(word => word.toLowerCase());
        const resultRoutePath = loverCaseNames.join('-');
        return resultRoutePath;
    }

    private getIconClass(menuItemName: string) {
        switch (menuItemName) {
            case 'At home':
                return Icons.Home;
            case 'Walking':
                return Icons.Walking;
            case 'Games':
                return Icons.PuzzlePiece;
            case 'Holidays':
                return Icons.BirthdayCake;
        }
    }
}
