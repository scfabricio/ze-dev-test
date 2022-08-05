import format from "../format";

test("Should return money format to zero value", () => {
    expect(format.money(0)).toEqual("0,00");
});

test("Should return 0 formatted to NaN value", () => {
    expect(format.money(NaN)).toEqual("0,00");
});

test("Should format correctly to the value of thousands", () => {
    expect(format.money(12345678.01)).toEqual("12.345.678,01");
});
