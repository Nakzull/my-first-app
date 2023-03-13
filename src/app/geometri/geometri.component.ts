import { Component } from '@angular/core';

@Component({
  selector: 'app-geometri',
  templateUrl: './geometri.component.html',
  styleUrls: ['./geometri.component.css']
})
export class GeometriComponent {
  sidea = 0;
  sideb = 0;
  omkreds: any;
  areal: any;
  rektangle() {
    this.omkreds = this.sidea * 2 + this.sideb * 2;
    this.areal = this.sidea * this.sideb;
  }
}
