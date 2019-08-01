import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LibUiModule } from 'lib-ui';
@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, LibUiModule],
  exports: [LibUiModule]
})
export class CoreModule {}
