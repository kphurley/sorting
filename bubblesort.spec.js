describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles an array of two numbers', function(){
    expect( bubbleSort([10, 1]) ).toEqual( [1, 10] );
    expect( bubbleSort([1, 10]) ).toEqual( [1, 10] );
  });

  it('handles an array of five numbers', function(){
    expect( bubbleSort([7, 89, 3, 100, 23]) ).toEqual( [3, 7, 23, 89, 100] );
    //expect( bubbleSort([3, 7, 23, 89, 100]) ).toEqual( [3, 7, 23, 89, 100] );
  });

});
