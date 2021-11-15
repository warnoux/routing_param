import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-composant1',
  templateUrl: './composant1.component.html',
  styleUrls: ['./composant1.component.scss']
})
export class Composant1Component implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  gotopage2(routerLink: string, queryParams: string): any {
    const navigationExtras: NavigationExtras = {
      queryParams: { id: queryParams }
    };
    event.preventDefault();

    this.router.navigate(['/composant2/' + routerLink], navigationExtras);
  }

}
