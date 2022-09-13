let expect = chai.expect;

describe('MyMethods', function(){
    describe('#determineWinner', function(){
        it(`should compare two scores and declare the winner`, function(){
           let x = determineWinner(15, 6);
            expect(x).to.equal(`Player One wins the game!`);
        });
           
        });
       
    });



