describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1,2,3,4,5,6,7,8])).toEqual([[1,2,3,4],[5,6,7,8]]);
    expect(split([1,2,3,4,5])).toEqual([[1,2],[3,4,5]]);
  });

  it('is able to split an array of one', function(){
    expect(split([1])).toEqual([1]);
  });
});


describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([[1,8,10],[2,3,4]])).toEqual([1,2,3,4,8,10]);
  });
  it('is able to merge two odd numbered sorted arrays into one sorted array', function(){
    expect(merge([[1,5,9],[2,4,6,10]])).toEqual([1,2,4,5,6,9,10]);
  });
  it('is able to merge weird arrays', function(){
    expect(merge([[4,6,8,9,10],[3,5,11,12]])).toEqual([3,4,5,6,8,9,10,11,12]);
  });

});

describe('Mergesort function', function(){
    it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });
  it('handles an array of two numbers', function(){
    expect( mergeSort([10, 1]) ).toEqual( [1, 10] );
    expect( mergeSort([1, 10]) ).toEqual( [1, 10] );
  });

  it('handles an array of five numbers', function(){
    expect( mergeSort([7, 89, 3, 100, 23]) ).toEqual( [3, 7, 23, 89, 100] );
    
  });
    it('handles a longer array of numbers', function(){
    expect( mergeSort([9,3,5,7,1,8,2,6,5,9,1,5,7,2,7,9,1,6,2,6,7,8]) ).toEqual( [ 1, 1, 1, 2, 2, 2, 3, 5, 5, 5, 6, 6, 6, 7, 7, 7, 7, 8, 8, 9, 9, 9 ] );
    
  });
});
