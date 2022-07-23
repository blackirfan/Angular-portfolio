import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  timeline = [
    {
      heading: "Second Major - Computer Science & Engineering",
      duration: "2018",
      subtitle: "Shahjalal University of Science and Technology, Sylhet",
      content: "Successfully completed my Second Major in Computer science & Engineering from SUST, Sylhet.",
      className1: "mar-left",
      className2: "prt_about_learnbox_right"
    },
    {
      heading: "B.Sc - Geography & Environment",
      duration: "2018",
      subtitle: "Shahjalal University of Science and Technology, Sylhet",
      content: "Successfully completed my B.Sc in Geography & Environment from SUST, Sylhet.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    },
    {
      heading: "Higher Secondary(12th)",
      duration: "2012",
      subtitle: "Dhaka Board",
      content: "Successfully completed my HSC in 2012 from Birshrestha Munshi Abdur Rouf Public College, Dhaka.",
      className1: "mar-left",
      className2: "prt_about_learnbox_right"
    },
    {
      heading: "Secondary Stage(10th)",
      duration: "2010",
      subtitle: "Dhaka Board",
      content: "Successfully completed my high school studies in 2010 from Dhanmondi Govt. Boys' High School, Dhaka.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
