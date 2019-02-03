describe('calculator', () => {
    describe('Addition function', () => {
        it('should return 42', () => {
            expect(addition(20,22)).toBe(42);
        });        
    });
    
});


describe('generator', () => {
    describe('Addition function', () => {
        it('should return random number',
        () => {
            generateRandomNumbers().toEqual(order);
        });        
    });
    
});
