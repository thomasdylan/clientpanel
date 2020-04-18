import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Client } from '../../models/Client';
import { FlashMessagesModule } from 'angular2-flash-messages/module/module';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  id: string;
  client: CLient = {
    firstName: '',
    lastName: '',
    email: '', 
    phone: '',
    balance: 0
  }

  disableBalanceOnEdit: boolean = true;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClient(this.id).subscribe(client => this.client = client);
  }

  onSubmit({value, valid}: {value: Client, valid: boolean}) {
    if(!valid) {
      this.flashMessage.show('Please edit form correctly', {
        cssClass: 'alert-danger', timeout: 4000
      });
    } else {
      value.id = this.id;

      this.clientService.updateClient(value);
      this.flashMessage.show('Client Updated', {
        cssClass: 'alert-success', timeout: 4000
      });

      this.router.navigate(['/client/' + this.id]);
    }
  }

}
