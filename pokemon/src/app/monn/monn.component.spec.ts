import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonnComponent } from './monn.component';

describe('MonnComponent', () => {
  let component: MonnComponent;
  let fixture: ComponentFixture<MonnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonnComponent]
    });
    fixture = TestBed.createComponent(MonnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
