export default {
    money: (value: number, decimals = 2): string => {
        if (Number.isNaN(value)) {
            return "0,00";
        }

        const num = value.toFixed(decimals).split(".");

        // Divisor de milhar
        const regex = /(\d+)(\d{3})/;
        while (regex.test(num[0])) {
            num[0] = num[0].replace(regex, "$1.$2");
        }

        return num.join(",");
    }
};
