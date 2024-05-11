import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesssagePageComponent } from './messsage-page.component';

describe('MesssagePageComponent', () => {
  let component: MesssagePageComponent;
  let fixture: ComponentFixture<MesssagePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MesssagePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MesssagePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
