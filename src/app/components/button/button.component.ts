import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() textButton: string ;
  @Input() size: string = 'auto';

    constructor() {
      console.log('construído');
    }     

      ngOnInit(){
        console.log('inicializado');
      }

    

     }


