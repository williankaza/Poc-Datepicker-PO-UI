import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  { 
  frmCadastro: FormGroup;

  constructor(
		private formBuilder: FormBuilder
  ){
    
  }
}
