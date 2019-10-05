import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ConnectionComponent } from './components/connection/connection.component';
import { HeaderInterceptor } from './interceptors/header-interceptor.interceptor'; 
import { MaterialModule } from './modules/material/material.module';
import { ConnectionTestDialogComponent } from './components/connection-test-dialog/connection-test-dialog.component';
import { ConnectionsModule } from './modules/connections/connections.module';

const appRoutes: Routes = [
  { path: 'connections', component: ConnectionComponent },
  { path: '', redirectTo: '/connections', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),
    ConnectionsModule,
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
