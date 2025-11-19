import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularTrpc } from './angular-trpc';

describe('AngularTrpc', () => {
  let component: AngularTrpc;
  let fixture: ComponentFixture<AngularTrpc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularTrpc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularTrpc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
