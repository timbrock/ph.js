let ph = (function(){
  
  "use strict";
  
  //Get the string representation of any object
  const stringRep = function(entity){
    return Object.prototype.toString.call(entity);
  };
  
  //Check if candidate is a regular array
  const isArray = function(candidate){
    return Array.isArray(candidate);
  };
  
  //Check if candidate is a regular array or a typed array
  const isAnyArray = (function(){
    let reg = /\[object [A-Za-z\d]*Array\]/;
    return function(candidate){
      return reg.test(stringRep(candidate));
    };
  })();
  
  //Check if candidate is a regular object. This is literally anything whose toString method returns "[object Object]"
  //hasProperties, below, may be more useful
  const isObject = function(candidate){
    return stringRep(candidate) === "[object Object]";
  };
  
  //Check if candidate is a function
  const isFunction = function(candidate){
    return stringRep(candidate) === "[object Function]";
  };
  
  //Check if candidate is a number that isn't +-Infinity or NaN
  const isFiniteNumber = function(candidate){
    return Number.isFinite(candidate);
  };
  
  //Check if candidate is a string
  const isString = function(candidate){
    return stringRep(candidate) === "[object String]";
  };
  
  //Check if candidate is a regular expression
  const isRegex = function(candidate){
    return stringRep(candidate) === "[object RegExp]";
  };

  //Check if obj has all of the (1 or more) properties (passed as strings) in rest parameter "properties"
  const hasProperties = function(obj, ...properties){
    if(!properties.length){return undefined;}
    return properties.every(function(property){return obj.hasOwnProperty(property);});
  };
  
  //Check if obj has any of the (1 or more) properties in rest parameter "properties"
  const hasAnyProperties = function(obj, ...properties){
    if(!properties.length){return undefined;}
    return properties.some(function(property){return hasProperties(obj, property);});
  };
  
  //Ensures string match returns array, not null, when there is no match
  //This means using forEach on the return value won't throw an error if arguments are correct
  const safeMatch = function(string, reg){
    return (isString(string) && isRegex(reg)) ? (string.match(reg) || []) : undefined;
  };
  
  //Check if each value is different
  const isUniqueArray = function(arr){
    return isArray(arr) && (new Set(arr)).size === arr.length;
  }; 
  
  //Create a new array with only unique values
  const uniqueArray = function(arr){
    return isArray(arr) ? Array.from(new Set(arr)) : undefined;
  };

   
  return{
    stringRep,
    isArray,
    isAnyArray,
    isObject,
    isFunction,
    isFiniteNumber,
    isString,
    isRegex,
    hasProperties,
    hasAnyProperties,
    safeMatch,
    isUniqueArray,
    uniqueArray
  };
  
})();