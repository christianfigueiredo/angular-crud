import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {

  @Input() textButton: string = 'LifeCicle Hooks';

    constructor() {
      console.log('construído');}

      ngOnchanges(){
        console.log('alterado');
      }

      ngOnInit(){
        console.log('inicializado');
      }

      ngDoCheck(){
        console.log('doCheck');
      }

      ngOnDestroy(){
        window.alert('destruido');

      }

      teste(){
        console.log('botao clicado');
      }
     }


