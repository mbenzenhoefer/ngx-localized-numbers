import { Injectable } from "@angular/core";
import { ConfigurationModel } from "./config.model";
import { NGX_NUMBERS_LOCALES } from "./locales.config";

@Injectable()
export class NgxLocalizedNumbersService {
    private DEFAULT_LOCALE: string = "en_GB";

    private locale: string;

    private definedLocales: Map<string, ConfigurationModel> = new Map();

    constructor() {
        this.definedLocales = NGX_NUMBERS_LOCALES;
    }

    setLocale(locale: string): void {
        // TODO: check if locale file exists
        if (!this.definedLocales.get(locale)) {
            console.warn("locale '" + locale + "' does not exist");
        }
        this.locale = locale;
    }

    getLocale(): string {
        if (!this.locale) {
            console.warn("ngx-number: no locale was defined, return default");
            return this.DEFAULT_LOCALE;
        }
        return this.locale;
    }

    addLocale(locale: string, config: ConfigurationModel): void {
        this.definedLocales.set(locale, config);
    }

    getCurrentLocaleDefinition(): ConfigurationModel {
        return this.definedLocales.get(this.getLocale());
    }

    formatNumber(value: number, decimals: number): string {
        let strValue: string = "" + this.round(value, decimals);
        let numberParts: string[] = strValue.split(".");
        let beforeComma: string = numberParts[0];
        let afterComma: string = numberParts.length > 1 ? "." + numberParts[1] : "";
        let rgx: any = /(\d+)(\d{3})/;
        while (rgx.test(beforeComma)) {
            beforeComma = beforeComma.replace(rgx, "$1" + this.getCurrentLocaleDefinition().thousandSeparator + "$2");
        }

        let decimalSeparator: string = "";
        if (decimals > 0) {
            decimalSeparator = this.getCurrentLocaleDefinition().decimalSeparator;
        }

        // strip the dot in x2 there is one
        if (afterComma.indexOf(".") > -1) {
            afterComma = afterComma.replace(".", "");
        }

        while (afterComma.length < decimals) {
            afterComma += "0";
        }

        return beforeComma + decimalSeparator + afterComma;
    }

    formatCurrency(value: string): string {
        let output: string = value;
        if (this.getCurrentLocaleDefinition().whitespaceBeforeCurrency) {
            output += " ";
        }
        output += this.getCurrentLocaleDefinition().currency;
        return output;
    }

    // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round#Example:_Decimal_rounding
    round(value: number, prec: number): number {
        if (typeof prec === "undefined" || +prec === 0) {
            return Math.round(value);
        }

        value = +value;
        prec = +prec;

        if (isNaN(value) || !(typeof prec === "number" && prec % 1 === 0)) {
            return NaN;
        }

        // Shift
        let shiftValues: string[] = value.toString().split("e");
        value = Math.round(+(shiftValues[0] + "e" + (shiftValues[1] ? (+shiftValues[1] + prec) : prec)));

        // Shift back
        shiftValues = value.toString().split("e");
        return +(shiftValues[0] + "e" + (shiftValues[1] ? (+shiftValues[1] - prec) : -prec));
    }
}
