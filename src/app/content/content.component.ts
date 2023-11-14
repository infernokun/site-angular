import { AfterViewInit, Component, ElementRef } from '@angular/core';

import Flickity from 'flickity';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements AfterViewInit {
  private flickityInstance: any;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    // Initialize Flickity after the view has been initialized
    this.flickityInstance = new Flickity(this.el.nativeElement.querySelector('.main-carousel'), {
      "cellAlign": "center",
      "autoPlay": 2000,
      "wrapAround": true,
      "draggable": true
    });
  }

}
