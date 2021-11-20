import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Client } from '../../../models/client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  ruc!: string;
  full_name!: string;
  email!: string;

  @Output()
  clientAdded = new EventEmitter<Client>();

  constructor() { }

  ngOnInit(): void {
  }

  addClient ( ) {

    this.clientAdded.emit({

      ruc: this.ruc,
      full_name: this.full_name,
      email: this.email
    });
    this.ruc = '';
    this.full_name = '';
    this.email = '';
  }

}
