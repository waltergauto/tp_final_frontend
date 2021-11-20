import { Component, OnInit } from '@angular/core';

import { Client } from 'src/app/models/client';

import { DataClientService } from 'src/app/services/client/data-client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients!: Client[];

  constructor( public dataClientService: DataClientService ) { }

  ngOnInit(): void {

    this.clients = this.dataClientService.getClients();
    
  }

  addClient( client: Client ) {

    this.dataClientService.addClient( client );
  
  }

}
