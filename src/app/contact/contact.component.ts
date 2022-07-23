import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contactInfo = {
    title: "Contact Me ☎️",
    subtitle: "If need any information or help,\n please contact me without any hesitation",
    number: "+8801740058331",
    email_address: "irfanhossain2025@gmail.com"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
