import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameOutputComponent } from './name-output.component';

describe('NameOutputComponent', () => {
  let component: NameOutputComponent;
  let fixture: ComponentFixture<NameOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
