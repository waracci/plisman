import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  closeResult: string;

  constructor( 
    private _auth: AuthService,
    private _modalService: NgbModal,
  ) { }

  open(content) {
    this._modalService.open(content);
  }

  ngOnInit() {
  }

}
