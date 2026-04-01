import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [RouterOutlet, AppComponent],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: { params: of({}) }
                }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeTruthy();
    });
});
