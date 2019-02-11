
describe('ArrayLength', () =>{
    var test = generateRandomNumbers();
    it('should return an array with 20 character', () => {
      expect( test.length ).toEqual(20);
    });
});


describe('TwoRandomNumbers', () =>{
    var test = generateRandomNumbers();
    var total = 0;
    for(var i in test) { total += test[i]; }
    var test2 = generateRandomNumbers2();
    var total2 = 0;
    for(var i in test2) { total2 += test2[i]; }
    it('two functions should return different numbers', () => {
      expect(total).not.toEqual(total2);
    });
});


describe('NotMoreThan4', () =>{
    var test = generateRandomNumbers();
    var total = 0;
    for(var i in test) { total += test[i]; }
    var test2 = total / test.length;
    function check(test2) {
        if (test2 <= 4) {
          return true;
        }
          return false;
      }
    it('should return numbers under or equal 4', () => {
      expect(check(test2)).toBeTruthy();
    });
});


