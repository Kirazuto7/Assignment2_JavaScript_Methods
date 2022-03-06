// FOR EACH //
Array.prototype.myEach = function() {
    for (let i = 0; i < this.length; i++) {   // "this" keyword refers to the array being called.
        if (this[i] === undefined) continue;
        // callbackFn can take up to 3 input parameters:
        // element
        // element, index
        // element, index, array
        callbackFn(this[i], i, this);   // callbackFn is "console.log(x,i,myArray)" 
    }
};

// MAP //
Array.prototype.myMap = function() {

};

// SOME //
Array.prototype.mySome = function() {

};

// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //Oscar Andrade
Array.prototype.myIndexOf = function() {
    
    //turn negative index to positive
    if(fromIndex < 0)
    {
        fromIndex = this.length + fromIndex;
    }
    
    //index > array length
    if(fromIndex >= this.length)
    {
        return -1;
    }
   
    for (let i = fromIndex; i < this.length; i++)
    {
        if(this[i] === searchElement)
        {
            return i;
        }
    }
    return -1;

};

// PUSH //
Array.prototype.myPush = function() {
    let args_index = 0;  // Index of new element
    let length = this.length;   // Length of "this" array
    // The last element of "this" array is at length - 1
    for (let i = length; i < length + args.length; i++) {
        this[i] = args[args_index];  // Add new element to end of "this" array
        args_index++;
    }
    return this.length;  // Return new length of "this" array
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.myKeys = function() {

};

// VALUES //
Object.myValues = function() {

};