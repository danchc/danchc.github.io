import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { defineLordIconElement } from 'lord-icon-element';
import lottie from 'lottie-web';
import { PrincipalComponent } from './principal.component';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';

@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [AngularTypewriterEffectModule],
  providers: [],
  exports: [PrincipalComponent],
  bootstrap: [PrincipalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PrincipalModule { 
  constructor() {
    defineLordIconElement(lottie.loadAnimation);
  }
}
