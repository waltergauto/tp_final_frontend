import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  navigateToClients( ) {
    this.router.navigate(['/clients']);
  }
  
  navigateToProducts( ) {
    this.router.navigate(['/products']);
  }

  navigateToVentas( ) {
    this.router.navigate(['/ventas']);
  }

}
