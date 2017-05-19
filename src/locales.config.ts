import { ConfigurationModel } from "./config.model";
export const NGX_NUMBERS_LOCALES: Map<string, ConfigurationModel> = new Map()
    .set("de_DE", {
        thousandSeparator: ".",
        decimalSeparator: ",",
        whitespaceBeforeCurrency: true,
        currency: "€"
    }).set("en_GB", {
        thousandSeparator: ",",
        decimalSeparator: ".",
        whitespaceBeforeCurrency: true,
        currency: "GBP"
    }).set("en_US", {
        thousandSeparator: ",",
        decimalSeparator: ".",
        whitespaceBeforeCurrency: true,
        currency: "$"
    }).set("fr_FR", {
        thousandSeparator: " ",
        decimalSeparator: ",",
        whitespaceBeforeCurrency: true,
        currency: "€"
    }).set("es_ES", {
        thousandSeparator: ".",
        decimalSeparator: ".",
        whitespaceBeforeCurrency: true,
        currency: "€"
    }).set("it_IT", {
        thousandSeparator: ".",
        decimalSeparator: ",",
        whitespaceBeforeCurrency: true,
        currency: "€"
    }).set("fr_CA", {
        thousandSeparator: " ",
        decimalSeparator: ",",
        whitespaceBeforeCurrency: true,
        currency: "CAD"
    }).set("en_CA", {
        thousandSeparator: " ",
        decimalSeparator: ",",
        whitespaceBeforeCurrency: true,
        currency: "CAD"
    });
