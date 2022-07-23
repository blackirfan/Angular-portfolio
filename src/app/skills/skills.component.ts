import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsSection = {
    title: "What I do💁‍♂️",
    subTitle: "FULL STACK DEVELOPER and Researcher",
    skills: [
      "⚡ Develop highly interactive Front end in Angular and backend in java springboot framework",
      "⚡ Creating application backend in springboot, Django and laravel",
      "⚡ Extensive experience on RS and GIS oriented tools and tenchnique",
      "⚡ Extensive experience on Google Earth Engine, Arc Pro Python scripting,R and Matlab.",
      "⚡ Integration of third party services such as Firebase/ Heroku/ AWS",
      "⚡ Experience of working with Computer Vision and NLP projects"
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
