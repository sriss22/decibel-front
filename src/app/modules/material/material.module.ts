import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatIconModule,
        MatTableModule,
        MatToolbarModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatIconModule,
        MatTableModule,
        MatToolbarModule
    ]
})
export class MaterialModule { }