import {
    ModuleWithProviders,
    NgModule
} from "@angular/core";

import { NgxLocalizedNumbersService } from "./localized-numbers.service";
import { LocalizationFormatCurrencyPipe } from "./format-currency.pipe";
import { LocalizationFormatNumberPipe } from "./format-number.pipe";

let NUMBERS_DECLARATIONS: any = [
    LocalizationFormatCurrencyPipe,
    LocalizationFormatNumberPipe
];

@NgModule({
    imports: [],
    exports: [
        NUMBERS_DECLARATIONS
    ],
    declarations: [
        NUMBERS_DECLARATIONS
    ],
    providers: []
})
export class NgxLocalizedNumbers {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: NgxLocalizedNumbers,
            providers: [
                NgxLocalizedNumbersService
            ]
        };
    }
}
