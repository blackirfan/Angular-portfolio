import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public workExperiences = {
    viewExperiences: true,
    experience: [
      {
        role: "Full Stack Engineer",
        company: "Synesis IT",
        color: "#3781c2",
        companylogo: "./assets/images/Synesistit.jpg",
        date: "25-07-2021 - on going",
        desc: "Programmer at Synesis IT",
      },
      {
        role: "RA in BUET",
        company: "BUET",
        color: "#3f703f",
        companylogo: "./assets/images/buet.png",
        date: "Aug 2019 – Jul 2020",
        desc: "I had worked here as a RA in Dhaka Mass Rapid Transit Development Project line 5: (Northern Route) in BUET",
      },
      {
        role: "IT Officer",
        company: "GPAD",
        color: "#ff9102",
        companylogo: "./assets/images/gpad.png",
        date: "Jun 2018 – Aug 2018",
        desc: "The 6- Week summer training focused on full-stack web development and helped learn to work in a team",
        },
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
