# ngx-localized-numbers
library to localize numbers and currency with angular

* [Installation](#installation)
* [Usage](#usage)
* [Define additional locales](#define-additional-locales)

## Supported locales
The following locales are currently supported by ngx-localized-numbers:
* de_DE
* en_GB
* en_US
* fr_FR
* es_ES
* it_IT
* fr_CA
* en_CA
* zh_TW
* ko_KR
* ja_JP
* zh_CN
* ru_RU
* nl_NL
* pt_BR

## Installation
First you need to install the npm module:
```sh
npm install ngx-localized-numbers --save
```

## Usage
### Import into application
First you need to import the module as forRoot() into your parent module:
```ts
import {NgxLocalizedNumbers} from "ngx-localized-numbers";
@NgModule({
    imports: [
        // ...
        NgxLocalizedNumbers.forRoot()
    ],
    // ...
})
export class AppModule {
}
```
If using submodules you may need to include the module there as well:
```ts
import {NgxLocalizedNumbers} from "ngx-localized-numbers";
@NgModule({
    imports: [
        // ...
        NgxLocalizedNumbers
    ],
    // ...
})
export class AnyOtherModule {
}
```

### Shared module
If you are using a [`SharedModule`](https://angular.io/docs/ts/latest/guide/ngmodule.html#!#shared-modules)
which is imported into different other application modules, you may export it from here so you do not need to import it in every child module.

### Set the locale
The locale can be set as follows (and anywhere else as well):
```ts
@Component({
    // ...
})
export class AppComponent implements OnInit {
    constructor(private localizedNumbersService: NgxLocalizedNumbersService) {
    }

    ngOnInit() {
        this.localizedNumbersService.setLocale("de_DE");
    }
}
```

That's it, now you can use the localization.

### Format numbers and amounts
There are two pipes included in this modules you may use (also chained usage is possible). These samples use the de_DE as locale:

#### formatNumber - Pipe
This pipe formats numbers with thousand separator and decimal separator from the locale. As a parameter, the amount of decimals can be provided:
```ts
<p>{{1000 | formatNumber:3 | formatCurrency}}</p> - prints 1.000,000 €

<p>{{1000 | formatNumber:2}}</p> - prints 1.000,00

<p>{{1000.47 | formatNumber:2}}</p>

<p>{{1000.47 | formatNumber:1}}</p>

<p>{{1000.9 | formatNumber}}</p>

<p>{{1000.1 | formatNumber:5}}</p>
```

#### formatCurrency - Pipe
This pipe will add the locales' currency to the number.

```ts
<p>{{1000 | formatCurrency}}</p> - prints 1000 €
```

or combine both pipes:
```ts
<p>{{1000 | formatNumber:2 | formatCurrency}}</p> - prints 1.000,00 €

```

## Define additional locales
You also may add or overwrite locales to the service:
```ts
this.localizedNumbersService.addLocale("en_US", {
   thousandSeparator: ",",
   decimalSeparator: ".",
   whitespaceBeforeCurrency: true,
   currency: "$"
});

```

**feel free to add missing locales via a PR, thanks!** (see src/locales.config.ts)