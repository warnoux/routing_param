import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-composant2',
  templateUrl: './composant2.component.html',
  styleUrls: ['./composant2.component.scss']
})
export class Composant2Component implements OnInit {
  param: string;
  param1: string;
  constructor(  private route: ActivatedRoute) {  }

  ngOnInit(): void {
    this.param1 = this.route.snapshot.queryParams.id;

    this.route.params.subscribe(params => {
        this.param = params.id;
      }
    );
  }
}
