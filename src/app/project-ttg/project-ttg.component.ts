import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, Scroll } from '@angular/router';
import { Project } from '../models/Project.model';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-project-ttg',
  templateUrl: './project-ttg.component.html',
  styleUrls: ['./project-ttg.component.scss']
})
export class ProjectTtgComponent implements OnInit {

  //pictures: string[] = [];
  pictures: Project[] = [];

  constructor(private router: Router, private viewportScroller: ViewportScroller) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Scroll to the top of the page
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
   }

  public ngOnInit(): void {
    this.pictures.push(new Project(undefined, undefined,
      "/assets/images/game2.png", "Gameplay Blueprint",
      "Gameplay Blueprints in Unreal Engine represent game logic using a visual scripting language. \
       It allows designers and developers to create and customize game functionality without extensive coding. \
       Gameplay Blueprints are versatile, supporting events, functions, and interactions within the game world."));

    this.pictures.push(new Project(undefined, undefined,
      "/assets/images/game3.png", "Control Rig", "Control Rig is a powerful animation tool in Unreal Engine that enables artists \
       to create and manipulate character animations procedurally. It provides a node-based interface to define skeletal controls,\
        allowing for dynamic and responsive character animations."));

    this.pictures.push(new Project(undefined, undefined,
      "/assets/images/game4.png", "Control Rig Blueprint", "Control Rig Blueprints are a way to encapsulate and reuse Control Rig setups.\
       Artists can create modular and configurable animation systems using Control Rig Blueprints, making it easier to manage and apply \
       complex character animations across different characters or scenarios."));

    this.pictures.push(new Project(undefined, undefined,
      "/assets/images/game5.png", "Third Person Gameplay", "Implementing third-person gameplay in the style of the Resident Evil Remake involves creating a dynamic\
       camera system, character controls, and interactions that emphasize suspense and horror. It often includes fixed camera angles,\
        limited resources, and environmental puzzles to enhance the immersive experience."));

    this.pictures.push(new Project(undefined, undefined,
      "/assets/images/game6.png", "3D Model", "Crafting a 3D model of Clementine, the iconic character from The Walking Dead, entails \
      intricate design, rigging, and animation within Unreal Engine. Leveraging the Control Rig, procedural animation brings Clementine \
      to life, enabling dynamic movements responsive to environmental cues or user inputs. By cloning and customizing existing animations,\
       a personalized and authentic representation of Clementine emerges, enhancing the immersive experience in the game environment."));
  }
}
