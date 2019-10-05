import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ConnectionComponent } from './components/connection/connection.component';
import { HeaderInterceptor } from './interceptors/header-interceptor.interceptor'; 
import { MaterialModule } from './modules/material.module';
import { ConnectionTestDialogComponent } from './components/connection-test-dialog/connection-test-dialog.component';

const appRoutes: Routes = [
  { path: 'connections', component: ConnectionComponent },
  { path: '', redirectTo: '/connections', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    ConnectionTestDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),
    MaterialModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }
  ],
  entryComponents: [
    ConnectionTestDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
