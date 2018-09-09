import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMaterialComponent } from './sidebar-material.component';

describe('SidebarMaterialComponent', () => {
  let component: SidebarMaterialComponent;
  let fixture: ComponentFixture<SidebarMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
