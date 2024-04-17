import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XpComponentComponent } from './xp-component.component';

describe('XpComponentComponent', () => {
  let component: XpComponentComponent;
  let fixture: ComponentFixture<XpComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XpComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
