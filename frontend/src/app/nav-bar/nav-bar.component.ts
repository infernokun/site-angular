import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

import { Project } from '../models/Project.model';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() projects: Project[] = [];

  constructor(private location: Location, private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.projects.push({ name: 'WIP?', link: '/' } as Project);
  }

  isHomeActive(): boolean {
    return this.route.snapshot.routeConfig?.path === '';
  }

  isGameActive(): boolean {
    return this.route.snapshot.routeConfig?.path === 'project-ttg';
  }
}
