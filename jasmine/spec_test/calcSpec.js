describe('generateRandomNumbers', () =>{

  it('should return an array with 20 character', () => {
      var test = generateRandomNumbers();
      expect( test.length ).toEqual(20);
  });

  it('calls to the function twice return different arrays', () => {
      var randomNumbers1 = generateRandomNumbers();

      var randomNumbers2 = generateRandomNumbers();

      expect(randomNumbers1).not.toEqual(randomNumbers2);
  });

  it('should return numbers under or equal 4', () => {
      var randomNumbers = generateRandomNumbers();

      var highestNumber = Math.max(...randomNumbers)
      expect(highestNumber).toBeLessThanOrEqual(4);
  });
});


