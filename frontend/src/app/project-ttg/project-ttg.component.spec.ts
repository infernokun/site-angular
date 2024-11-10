import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTtgComponent } from './project-ttg.component';

describe('ProjectTtgComponent', () => {
  let component: ProjectTtgComponent;
  let fixture: ComponentFixture<ProjectTtgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectTtgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTtgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
