import { Component } from '@angular/core';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-kvadrat',
  templateUrl: './kvadrat.component.html',
  styleUrls: ['./kvadrat.component.css']
})
export class KvadratComponent {
  sidea = 0;
  omkreds: any;
  areal: any;
  kvadrat() {
    this.omkreds = this.sidea * 4;
    this.areal = this.sidea * this.sidea;
  }
}

