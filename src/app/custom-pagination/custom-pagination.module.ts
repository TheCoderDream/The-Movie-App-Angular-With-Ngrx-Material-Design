import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationPipe } from './pagination.pipe';
import {MatButtonModule, MatButtonToggle, MatButtonToggleModule, MatIconModule} from '@angular/material';

@NgModule({
  declarations: [PaginationComponent, PaginationPipe],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
  ],
  exports: [PaginationComponent, PaginationPipe]
})
export class CustomPaginationModule { }
