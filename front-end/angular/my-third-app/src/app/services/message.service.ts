import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages : Array<string> = []
  counter : number = 1;

  add(){
    this.messages.push('Message '+ this.counter)
    this.counter++;
  }

  constructor() { }
}

// object creation using new keyword
// let messageService : MessageService = new MessageService();
