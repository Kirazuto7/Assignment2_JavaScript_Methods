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

// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function() {

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

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

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