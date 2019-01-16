import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogComponent} from '../../core/dialog/dialog.component';
import {ThemeService} from '../../core/services/theme-service.service';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private themeService: ThemeService) {}

  ngOnInit() {
  }

}
