import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
    public needToShowItems = false;

    constructor() {}

    ngOnInit() {}

    public toggleItems() {
        this.needToShowItems = !this.needToShowItems;
    }
}
