import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// https://angular.io/guide/styleguide#shared-feature-module

@NgModule({
  imports: [CommonModule],
  exports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  declarations: [],
  providers: []
})
export class SharedModule {}
