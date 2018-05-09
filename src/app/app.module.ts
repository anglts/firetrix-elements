import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';

import { createCustomElement } from '@angular/elements';
import { UserPollComponent } from './user-poll/user-poll.component';

const config = {

}
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
  declarations: [
    UserPollComponent
  ],
  imports: [
    BrowserModule,
  ],
  entryComponents: [
    UserPollComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor (private injector: Injector) { }

  ngDoBootstrap() {
    const el = createCustomElement(UserPollComponent, { injector: this.injector });

    customElements.define('user-poll', el);
  }
}
