import {
    Component,
    ChangeDetectionStrategy,
    ViewChild,
    ElementRef,
    HostListener,
    Renderer2,
    Inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-menu-tablet',
    templateUrl: './menu-tablet.component.html',
    styleUrls: ['./menu-tablet.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuTabletComponent {
    private previousScrollTopOffset = 0;
    private isHidden = false;

    @ViewChild('header') header: ElementRef<HTMLElement>;

    constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2) {}

    @HostListener('window:scroll')
    onWindowScroll() {
        const currentScrollTopOffset = this.document.scrollingElement.scrollTop;
        const isScrollTop = currentScrollTopOffset < this.previousScrollTopOffset;

        if (isScrollTop) {
            if (this.isHidden) {
                this.renderer.removeClass(this.header.nativeElement, 'hidden');
                this.isHidden = false;
            }
        } else {
            if (!this.isHidden) {
                this.renderer.addClass(this.header.nativeElement, 'hidden');
                this.isHidden = true;
            }
        }

        this.previousScrollTopOffset = this.document.scrollingElement.scrollTop;
    }
}
