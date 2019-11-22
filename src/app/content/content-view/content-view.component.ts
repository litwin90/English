import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from '../../services/menu-service/menu.service';
import { IMenuItem } from '../../models/menu-item';

@Component({
    selector: 'app-content-view',
    templateUrl: './content-view.component.html',
    styleUrls: ['./content-view.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContentViewComponent implements OnInit {
    menuItemId: number;
    menuItem: IMenuItem;

    constructor(private activatedRoute: ActivatedRoute, private menuService: MenuService) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(data => {
            this.menuItemId = data.id;
            this.menuItem = this.menuService.getMenuItem(this.menuItemId);
        });
    }
}
