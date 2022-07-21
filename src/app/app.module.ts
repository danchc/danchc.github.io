import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PrincipalComponent } from './principal/principal.component';
import { FooterComponent } from './footer/footer.component';
import { PrincipalModule } from './principal/principal.module';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';
import { ContactsComponent } from './contacts/contacts.component';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    AboutmeComponent,
    ContactsComponent,
    ProjectsComponent
  ],
  imports: [
    PrincipalModule,
    BrowserModule,
    AppRoutingModule,
    AngularTypewriterEffectModule,
    NgxScrollTopModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { 
  constructor() {
  }
}
