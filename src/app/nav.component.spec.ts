import {async, TestBed} from '@angular/core/testing';
import {NavComponent} from './nav.component';
import {MaterialModule} from '../material.module';

describe('NavComponent', () => {
  let fixture;
  let component;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule
      ],
      declarations: [
        NavComponent
      ],
      providers: [
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavComponent);
    fixture.detectChanges();
    component = fixture.debugElement.componentInstance;
  }));

  it('should create nav component', (() => {
    expect(component).toBeTruthy();
  }));
});
