import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-connection-test-dialog',
  templateUrl: './connection-test-dialog.component.html',
  styleUrls: ['./connection-test-dialog.component.css']
})
export class ConnectionTestDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConnectionTestDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  public onNoClick(): void {
    this.dialogRef.close();
  }

}
