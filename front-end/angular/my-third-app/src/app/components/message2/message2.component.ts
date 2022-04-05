import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message2',
  templateUrl: './message2.component.html',
  styleUrls: ['./message2.component.css']
})
export class Message2Component implements OnInit {

  // dependency injection using constructor
  constructor(public messageService : MessageService) { }



  ngOnInit(): void {
  }

}
