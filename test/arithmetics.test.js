


describe('Arthmetics', function (){
    describe("add(a ,b)", function (){
        it('calculates the sum of two numbers', function () {

        // Arrange 
        let a = 8;
        let b = 2;
        let expected = 10;
        // Act
        let actul = Arthmetics.add(a,b);
        // Assert 
        expected(actul).toEqual(expected);  

        });
    });
});

