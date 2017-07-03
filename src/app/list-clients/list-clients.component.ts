import { Component, OnInit } from '@angular/core';
import {ListClientsService} from "./list-clients.service";

@Component({
  selector: '[app-list-clients]',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css'],
  providers: [ListClientsService],

})
export class ListClientsComponent implements OnInit {
  items: any[];
  constructor(private service: ListClientsService) { }

  ngOnInit() {

    this.service.getListClients().subscribe(res => {
      this.items = res;
    })
  }

}
