import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Project } from '../models/Project.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() projects: Project[] = [];

  public ngOnInit(): void {
    this.projects.push({name: 'ProjectTTG', link: '/project-ttg'} as Project);
  }
}
