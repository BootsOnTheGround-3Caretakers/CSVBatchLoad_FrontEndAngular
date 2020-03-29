import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvFormUploadComponent } from './csv-form-upload.component';

describe('CsvFormUploadComponent', () => {
  let component: CsvFormUploadComponent;
  let fixture: ComponentFixture<CsvFormUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvFormUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvFormUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
