describe('the isWeekday function' , function(){

    it('should return"ITS NOT WEEKDAY", when it is Saturday' , function(){
        assert.equal(false, isWeekday('Saturday'));
    });

    it('should return"isWeekday", when it is Monday' , function(){
        assert.equal(true, isWeekday('Monday'));
    });
});







