describe('the greet function' , function(){

    it('should return"Hello, Nemaorani", when i greet Nemaorani' , function(){
        assert.equal('Hello, Nemaorani',greet('Nemaorani'));
      //  assert.deepEqual([2,2],[2,2]);
    });
    it('should return"Hello, kenneth", when i greet kenneth' , function(){
        assert.equal('Hello, kenneth',greet('kenneth'));
      //  assert.deepEqual([2,2],[2,2]);
    });

});
