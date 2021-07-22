describe('the findItemsOver function' , function(){

    it('should return"find item over 20", when i select itemlist' , function(){
        assert.deepEqual([ { name: 'pears', qty: 37 }, { name: 'bananas', qty: 27 } ],findItemsOver20([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ]));
        //  assert.deepEqual([2,2],[2,2]);
        
    });
    it('should return"find item over 20", when i select itemlist2' , function(){
        assert.deepEqual([ { name: 'pears', qty: 37 }, { name: 'bananas', qty: 27 } ],findItemsOver20([
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ]));
        //  assert.deepEqual([2,2],[2,2]);
        
    });

});

