import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pb-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  todate = Date.now();
  constructor() {}

  ngOnInit(): void {}

}
