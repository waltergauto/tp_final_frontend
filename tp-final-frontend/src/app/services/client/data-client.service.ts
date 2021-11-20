import { Injectable } from '@angular/core';

import { Client } from 'src/app/models/client';

@Injectable({
  providedIn: 'root'
})
export class DataClientService {

  clients: Client[]; //array of clients

  constructor() {

    this.clients = [];

  }

  getClients(): Client[] {

    if ( localStorage.getItem('clients') === null ) {

      this.clients = [];
    } else {

      this.clients = JSON.parse( localStorage.getItem('clients') || '{}' );
    }
    
    return this.clients;
  }

  addClient ( client: Client ): void {

    let clients;

    this.clients.push( client );
    
    if ( localStorage.getItem( 'clients' ) === null ) {

      clients = [];
      clients.push( client );
      localStorage.setItem( 'clients', JSON.stringify( clients ) );

    } else {

      clients = JSON.parse( localStorage.getItem( 'clients') || '{}' );
      clients.push ( client );
      localStorage.setItem( 'clients', JSON.stringify( clients ) );

    }
  }

  removeClient ( client: Client ) {
    
    for ( let i = 0; i < this.clients.length; i++ ) {

      if ( client == this.clients[i]) {

        this.clients.splice(i, 1);
        localStorage.setItem( 'clients', JSON.stringify( this.clients ));
      }
    }
  }


}
