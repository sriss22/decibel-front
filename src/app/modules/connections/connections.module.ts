import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionComponent, ConnectionTestDialogComponent } from 'src/app/components';
import { DbStatsComponent } from 'src/app/components/db-stats/db-stats.component';
import { TableStatsComponent } from 'src/app/components/table-stats/table-stats.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    ConnectionComponent,
    ConnectionTestDialogComponent,
    DbStatsComponent,
    TableStatsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    ConnectionComponent,
    ConnectionTestDialogComponent,
    DbStatsComponent,
    TableStatsComponent
  ]
})
export class ConnectionsModule { }
