import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogComponent} from '../../core/dialog/dialog.component';
import {ThemeService} from '../../core/services/theme-service.service';

@Component({
  selector: 'app-remove-dialog',
  templateUrl: './remove-dialog.component.html',
  styleUrls: ['./remove-dialog.component.scss']
})
export class RemoveDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private themeService: ThemeService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }


  activeTheme = '';

  ngOnInit() {
    this.themeService.themePallet.subscribe(newTheme => {
      console.log(newTheme);
      this.activeTheme = newTheme;
    });
  }

}
