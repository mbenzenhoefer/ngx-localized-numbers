import {
    Pipe,
    PipeTransform
} from "@angular/core";
import { NgxLocalizedNumbersService } from "./localized-numbers.service";

@Pipe({
    name: "formatNumber"
})

export class LocalizationFormatNumberPipe implements PipeTransform {

    constructor(private numberService: NgxLocalizedNumbersService) {

    }

    transform(value: any, decimals: number): any {
        return this.numberService.formatNumber(value, decimals);
    }
}
