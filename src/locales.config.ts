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
    }).set("zh_TW", {
        thousandSeparator: " ",
        decimalSeparator: ".",
        whitespaceBeforeCurrency: true,
        currency: "TWS"
    }).set("ja_JP", {
        thousandSeparator: " ",
        decimalSeparator: ".",
        whitespaceBeforeCurrency: true,
        currency: "Yen"
    }).set("zh_CN", {
        thousandSeparator: " ",
        decimalSeparator: ".",
        whitespaceBeforeCurrency: true,
        currency: "CNY"
    }).set("ko_KR", {
        thousandSeparator: " ",
        decimalSeparator: ".",
        whitespaceBeforeCurrency: true,
        currency: "₩"
    }).set("ru_RU", {
        thousandSeparator: " ",
        decimalSeparator: ",",
        whitespaceBeforeCurrency: true,
        currency: "RUB"
    }).set("nl_NL", {
        thousandSeparator: " ",
        decimalSeparator: ",",
        whitespaceBeforeCurrency: true,
        currency: "€"
    }).set("pt_BR", {
        thousandSeparator: " ",
        decimalSeparator: ",",
        whitespaceBeforeCurrency: true,
        currency: "€"
    });
