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
        // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        desc: "Programmer at Synesis IT",
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      },
      {
        role: "RA in Computer Science & Engineering",
        company: "BUET",
        color: "#3f703f",
        companylogo: "./assets/images/buet.png",
        date: "Aug 2016 – Jul 2020",
        desc: "I have completed my 4 year graduation degree in computer science with overall CGPA 8.6",
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      },
      {
        role: "IT Officer",
        company: "GPAD",
        color: "#ff9102",
        companylogo: "./assets/images/gpad.png",
        date: "Jun 2018 – Aug 2018",
        desc: "The 6- Week summer training focused on full-stack web development and helped learn to work in a team",
        },
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
