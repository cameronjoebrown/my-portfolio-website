import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutMeComponent } from './about-me.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('AboutMeComponent', () => {
    let component: AboutMeComponent;
    let fixture: ComponentFixture<AboutMeComponent>;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [FontAwesomeModule, AboutMeComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(AboutMeComponent);
        component = fixture.componentInstance;
        fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
