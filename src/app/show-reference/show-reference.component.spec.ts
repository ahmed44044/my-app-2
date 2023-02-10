import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowReferenceComponent } from './show-reference.component';

describe('ShowReferenceComponent', () => {
  let component: ShowReferenceComponent;
  let fixture: ComponentFixture<ShowReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowReferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
