describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1,2,3,4,5,6,7,8])).toEqual([[1,2,3,4],[5,6,7,8]]);
    expect(split([1,2,3,4,5])).toEqual([[1,2],[3,4,5]]);
  });

  it('is able to split an array of one', function(){
    expect(split([1])).toEqual([1]);
  });
});


describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([[1,8,10],[2,3,4]])).toEqual([1,2,3,4,8,10]);
  });
  it('is able to merge two odd numbered sorted arrays into one sorted array', function(){
    expect(merge([[1,5,9],[2,4,6,10]])).toEqual([1,2,4,5,6,9,10]);
  });
  it('is able weird arrays', function(){
    expect(merge([[4,6,8,9,10],[3,5,11,12]])).toEqual([3,4,5,6,8,9,10,11,12]);
  });

});
