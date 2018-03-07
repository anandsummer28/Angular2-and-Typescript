import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs: ['enteredName'],
  outputs: ['passingName']
})
export class ChildComponent {


  enteredName: string;
  childName: string;
  passingName = new EventEmitter<string>();

  updatePassingName(value: string) {
    this.passingName.emit(value);
  }

  printChildValue(child) {
    this.childName = child;
  }


}
