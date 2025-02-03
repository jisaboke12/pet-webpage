import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetParadigmComponent } from './pet-paradigm.component';

describe('PetParadigmComponent', () => {
  let component: PetParadigmComponent;
  let fixture: ComponentFixture<PetParadigmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetParadigmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetParadigmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
