import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourceControlsComponent } from './cource-controls.component';

describe('CourceControlsComponent', () => {
    let component: CourceControlsComponent;
    let fixture: ComponentFixture<CourceControlsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CourceControlsComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CourceControlsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
