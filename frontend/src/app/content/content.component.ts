import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import Flickity from 'flickity';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, AfterViewInit {
  private flickityInstance: any;

  private projectListHTML: string[] = [];
  @ViewChild('content') content!: ElementRef;
  @ViewChild('showAll') showAll!: ElementRef;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // Initialize Flickity after the view has been initialized
    this.flickityInstance = new Flickity(this.el.nativeElement.querySelector('.main-carousel'), {
      "cellAlign": "center",
      "autoPlay": 2000,
      "wrapAround": true,
      "draggable": true
    });
    const allProjects = this.el.nativeElement.querySelectorAll('.project-item');
    allProjects.forEach((project: any) => {
      this.projectListHTML.push(project.innerHTML);
    });
    if (window.innerWidth <= 768) {
      this.pushSingleProject();
    } else {
      this.pushAllProjects();
    }

  }

  pushSingleProject() {
    this.content.nativeElement.innerHTML = "";
    const newItem = `<div class="project-item">${this.projectListHTML[0]}</div>`;
    this.content.nativeElement.insertAdjacentHTML('beforeend', newItem);
  }

  pushAllProjects(event?: any) {
    this.content.nativeElement.innerHTML = "";

    this.projectListHTML.forEach((project: any) => {
      const newItem = `<div class="project-item">${project}</div>`;
      this.content.nativeElement.insertAdjacentHTML('beforeend', newItem);
    });

    if (event) {
      this.showAll.nativeElement.style.display = 'none';
    }
  }

}
