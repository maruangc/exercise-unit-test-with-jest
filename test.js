const {sum} = require('./app.js');
test('suma 14 + 9 igual a 23',()=>{
    let total = sum(14,9);
    expect(total).toBe(23);
})

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);
    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;
    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
});
test('Un Yen debera ser 156.5 Dolares', function() {
    const {fromDollarToYen} = require('./app.js');
    const yenes = fromDollarToYen(2);
    const expected = 2 * 156.5;
    expect(fromDollarToYen(2)).toBe(313);
});
test('1 libra esterlina deberia ser 0.87 Yenes', function(){
    const {fromYenToPound} = require('./app.js');
    const pounds = fromYenToPound(4.5);
    const expected = 4.5 * 0.87;
    expect(fromYenToPound(4.5)).toBe(3.915);
});