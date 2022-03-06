// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
    for (let i = 0; i < this.length; i++) {   // "this" keyword refers to the array being called.
        if (this[i] === undefined) continue;
        // callbackFn can take up to 3 input parameters:
        // element
        // element, index
        // element, index, array
        callbackFn(this[i], i, this);   // callbackFn is "console.log(x,i,myArray)" 
    }
};

// MAP // Jordan Sukhnandan
Array.prototype.myMap = function(callbackFn) {
    let new_array = [];
    for(let i = 0; i < this.length; i++) {
        if(this[i] === undefined)
          new_array.length += 1;
        else
            new_array.push(callbackFn(this[i]));
    }
    return new_array;
};

// SOME // Jordan Sukhnandan
Array.prototype.mySome = function(callbackFn) {
    let exists = false;
    for(let i = 0; i < this.length; i++)
    {
        if(this[i] === undefined) continue;

        if(callbackFn(this[i]) == true)
            exists = true;
    }
    return exists;
};

// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //Oscar Andrade
Array.prototype.myIncludes = function(searchElement, fromIndex = 0) {

    //turn negative index to positive
    if(fromIndex < 0)
    {
        fromIndex = this.length + fromIndex;
    }

    //index > array length
    if(fromIndex >= this.length)
    {
        return false;
    }

    for (let i = fromIndex; i < this.length; i++)
    {
        //use strict equality for '2' === 2 expected false
        if(this[i] === searchElement)
        {
            return true;
        }
        //use object.is for NaN == NaN
        else if(Object.is(this[i], searchElement))
        {
            return true;
        }
    }
    return false;

};

// INDEXOF //Oscar Andrade
Array.prototype.myIndexOf = function(searchElement, fromIndex = 0) {
    
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
Array.prototype.myPush = function(...args) {
    let args_index = 0;  // Index of new element
    let length = this.length;   // Length of "this" array
    // The last element of "this" array is at length - 1
    for (let i = length; i < length + args.length; i++) {
        this[i] = args[args_index];  // Add new element to end of "this" array
        args_index++;
    }
    return this.length;  // Return new length of "this" array
};

// LASTINDEXOF // Arifa Baksh
Array.prototype.myLastIndexOf = function(searchElement, fromIndex) {
    if(fromIndex === undefined || fromIndex >= this.length) { //if fromIndex is not given or is greater than array length
        fromIndex = this.length - 1;                            //search entire array
    }
    else if (fromIndex < 0) {
        if(fromIndex + this.length < 0) {return -1;} //if fromIndex + array.length is less than 0, don't search array
        else
            fromIndex = fromIndex + this.length; //else, start search from index fromIndex + array.length
    }
    for(let i = fromIndex; i >= 0; i--) { //search array backwards, beginning at index fromIndex
        if (this[i] === searchElement) {return i;}
    }
    return -1; //if element not found, return -1
};

// KEYS // Alden Lee
Object.myKeys = function(obj) {
    const keys = [];
    for(const key in obj){
        keys.push(key);
    }
    return keys;
};

// VALUES // Alden Lee
Object.myValues = function(obj) {
    const val = [];
    for(const key in obj){
        val.push(obj[key]);
    }
    return val;
};