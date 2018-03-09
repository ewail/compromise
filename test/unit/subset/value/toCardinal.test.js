var test = require('tape');
var nlp = require('../../lib/nlp');
//tests 'borrowed' from Travis Savo's lib 💝 https://github.com/TSavo/english2number-js
var cardinal = function(str) {
  return nlp(str).values().numbers()[0];
};

test('should give right answers for numbers', function(t) {
  t.equal(cardinal('0'), 0);
  t.equal(cardinal('1'), 1);
  t.equal(cardinal('2'), 2);
  t.equal(cardinal('3'), 3);
  t.equal(cardinal('4'), 4);
  t.equal(cardinal('5'), 5);
  t.equal(cardinal('6'), 6);
  t.equal(cardinal('7'), 7);
  t.equal(cardinal('8'), 8);
  t.equal(cardinal('9'), 9);
  t.equal(cardinal('10'), 10);
  t.equal(cardinal('20'), 20);
  t.equal(cardinal('30'), 30);
  t.equal(cardinal('50'), 50);
  t.equal(cardinal('90'), 90);
  t.equal(cardinal('100'), 100);
  t.end();
});
test('should give right answers for numbered ordinals', function(t) {
  t.equal(cardinal('0th'), 0);
  t.equal(cardinal('1st'), 1);
  t.equal(cardinal('2nd'), 2);
  t.equal(cardinal('3rd'), 3);
  t.equal(cardinal('4th'), 4);
  t.equal(cardinal('5th'), 5);
  t.equal(cardinal('6th'), 6);
  t.equal(cardinal('7th'), 7);
  t.equal(cardinal('8th'), 8);
  t.equal(cardinal('9th'), 9);
  t.equal(cardinal('10th'), 10);
  t.equal(cardinal('20th'), 20);
  t.equal(cardinal('30th'), 30);
  t.equal(cardinal('50th'), 50);
  t.equal(cardinal('77th'), 77);
  t.equal(cardinal('90th'), 90);
  t.equal(cardinal('100th'), 100);
  t.end();
});
test('should give right answers for english names of numbers', function(t) {
  t.equal(cardinal('zero'), 0);
  t.equal(cardinal('one'), 1);
  t.equal(cardinal('two'), 2);
  t.equal(cardinal('three'), 3);
  t.equal(cardinal('four'), 4);
  t.equal(cardinal('five'), 5);
  t.equal(cardinal('six'), 6);
  t.equal(cardinal('seven'), 7);
  t.equal(cardinal('eight'), 8);
  t.equal(cardinal('nine'), 9);
  t.equal(cardinal('ten'), 10);
  t.equal(cardinal('eleven'), 11);
  t.equal(cardinal('twelve'), 12);
  t.equal(cardinal('thirteen'), 13);
  t.equal(cardinal('fourteen'), 14);
  t.equal(cardinal('fifteen'), 15);
  t.equal(cardinal('sixteen'), 16);
  t.equal(cardinal('seventeen'), 17);
  t.equal(cardinal('eighteen'), 18);
  t.equal(cardinal('nineteen'), 19);
  t.equal(cardinal('twenty'), 20);
  t.equal(cardinal('twenty-five'), 25);
  t.equal(cardinal('twenty five'), 25);
  t.equal(cardinal('forty-four'), 44);
  t.equal(cardinal('forty four'), 44);
  t.equal(cardinal('fourty four'), 44); //typo
  t.equal(cardinal('seventy'), 70);
  t.equal(cardinal('seventy-seven'), 77);
  t.equal(cardinal('eighty eight'), 88);
  t.equal(cardinal('ninety nine'), 99);
  t.equal(cardinal('one-hundred'), 100);
  t.equal(cardinal('one hundred'), 100);
  t.end();
});
test('should give right answers for english names of ordinal positions', function(t) {
  t.equal(cardinal('zeroth'), 0);
  t.equal(cardinal('first'), 1);
  t.equal(cardinal('second'), 2);
  t.equal(cardinal('third'), 3);
  t.equal(cardinal('fourth'), 4);
  t.equal(cardinal('fifth'), 5);
  t.equal(cardinal('sixth'), 6);
  t.equal(cardinal('seventh'), 7);
  t.equal(cardinal('eighth'), 8);
  t.equal(cardinal('ninth'), 9);
  t.equal(cardinal('tenth'), 10);
  t.equal(cardinal('eleventh'), 11);
  t.equal(cardinal('twelfth'), 12);
  t.equal(cardinal('thirteenth'), 13);
  t.equal(cardinal('fourteenth'), 14);
  t.equal(cardinal('fifteenth'), 15);
  t.equal(cardinal('sixteenth'), 16);
  t.equal(cardinal('seventeenth'), 17);
  t.equal(cardinal('eighteenth'), 18);
  t.equal(cardinal('nineteenth'), 19);
  t.equal(cardinal('twentieth'), 20);
  t.equal(cardinal('twenty first'), 21);
  t.equal(cardinal('twenty second'), 22);
  t.equal(cardinal('twenty third'), 23);
  t.equal(cardinal('twenty fourth'), 24);
  t.equal(cardinal('twenty-fifth'), 25);
  t.equal(cardinal('forty-fourth'), 44);
  t.equal(cardinal('seventieth'), 70);
  t.equal(cardinal('seventy-seventh'), 77);
  t.equal(cardinal('ninetieth'), 90);
  t.equal(cardinal('ninety ninth'), 99);
  t.equal(cardinal('one-hundredth'), 100);
  t.end();
});

// test('should give the right value for a very large complex number', function(t) {
//   t.equal(cardinal('one hundred and twenty-three septillion, four hundred and fifty-six sextillion, seven hundred and eighty-nine quintillion, one hundred and twenty-three quadrillion, four hundred and fifty-six trillion, seven hundred and eighty-nine billion, one hundred and twenty-three million, four hundred and fifty-six thousand and seven hundred and eighty-nine'), 123456789123456789123456789);
//   t.end();
// });
//
// test('should give the right value for cardinal numbers', function(t) {
//   t.equal(cardinal('sixty-one trillion, six hundred and eighty-nine billion, four hundred and seventy-three million, four hundred and fifty-three thousand and five hundred and ninety'), 61689473453590);
//   t.end();
// });
//
// test('should give the right value for cardinal numbers in american form (with ands)', function(t) {
//   t.equal(cardinal('sixty-one trillion, six hundred eighty-nine billion, four hundred seventy-three million, four hundred fifty-three thousand, five hundred ninety'), 61689473453590);
//   t.end();
// });

// test('should give the right value for ordinal numbers', function(t) {
//   t.equal(cardinal('sixty-one trillion, six hundred and eighty-nine billion, four hundred and seventy-three million, four hundred and fifty-three thousand and five hundred and ninetieth'), 61689473453590);
//   t.end();
// });

// test('should give the right value for cardinal numbers in american form (with ands)', function(t) {
//   t.equal(cardinal('sixty-one trillion, six hundred eighty-nine billion, four hundred seventy-three million, four hundred fifty-three thousand, five hundred ninetieth'), 61689473453590);
//   t.end();
// });

test('should deal with negative numbers', function(t) {
  t.equal(cardinal('negative thirty eight thousand two hundred sixty three'), -38263);
  // t.equal(cardinal('- thirty eight thousand two hundred sixty three'), -38263);
  // t.equal(cardinal('negative zero'), -0);
  t.end();
});
