import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinHomePageComponent } from './linkedin-home-page.component';

describe('LinkedinHomePageComponent', () => {
  let component: LinkedinHomePageComponent;
  let fixture: ComponentFixture<LinkedinHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinkedinHomePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LinkedinHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
