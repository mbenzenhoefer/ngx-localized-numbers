import { ModuleWithProviders, NgModule } from '@angular/core';

import { NgxLocalizedNumbersService } from './localized-numbers.service';
import { LocalizationFormatCurrencyPipe } from './format-currency.pipe';
import { LocalizationFormatNumberPipe } from './format-number.pipe';

let PIPE_DECLARATIONS: any = [
  LocalizationFormatCurrencyPipe,
  LocalizationFormatNumberPipe
];

@NgModule({
  imports: [],
  exports: [PIPE_DECLARATIONS],
  declarations: [PIPE_DECLARATIONS],
  providers: []
})
export class NgxLocalizedNumbers {
  static forRoot(): ModuleWithProviders<NgxLocalizedNumbers> {
    return {
      ngModule: NgxLocalizedNumbers,
      providers: [NgxLocalizedNumbersService]
    };
  }
}
