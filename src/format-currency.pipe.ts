import {
    Injectable,
    Pipe,
    PipeTransform
} from "@angular/core";
import { NgxLocalizedNumbersService } from "./localized-numbers.service";

@Pipe({
    name: "formatCurrency"
})
@Injectable()
export class LocalizationFormatCurrencyPipe implements PipeTransform {
    constructor(private numberService: NgxLocalizedNumbersService) {

    }
    transform(value: any, args: any[]): any {
        return this.numberService.formatCurrency(value);
    }
}
