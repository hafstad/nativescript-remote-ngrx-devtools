import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/+state/counter.reducer';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {MyCounterComponent} from './counter/counter.component';
import {NativeScriptRemoteReduxDevtoolsModule} from './nativescript-remote-redux-devtools/nativescript-remote-redux-devtools.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyCounterComponent,
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer }),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
        maxAge: 25, // Retains last 25 states
        logOnly: environment.production, // Restrict extension to log-only mode
    }),
    NativeScriptRemoteReduxDevtoolsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
