import { Component, Input, OnInit } from '@angular/core';

import { Client } from '../../../models/client';
import { DataClientService } from '../../../services/client/data-client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  @Input('client')
  client!: Client;

  constructor( public dataClientService: DataClientService ) { }

  ngOnInit(): void {
  }

  removeClient ( client: Client ) {
    
    const response = confirm('Are you sure to delete it?');

    if ( response ) {
      this.dataClientService.removeClient( client );
    }
  }

}
