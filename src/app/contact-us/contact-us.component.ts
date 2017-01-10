import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  email: string = '';
  message: string = '';
  messageSent: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  reset() {
    this.email = '';
    this.message = '';
  }

  sendMessage() {
    this.reset();
    this.messageSent = true;
  }

}
