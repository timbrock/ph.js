(function(){

  "use strict";
  
  describe("stringRep function", function(){
    
    it("should return [object Undefined] if no argument", function(){
      expect(ph.stringRep()).toBe("[object Undefined]");
    });
    
    it("should return [object Object] for an object input", function(){
      expect(ph.stringRep({})).toBe("[object Object]");
    });
    
  });
  
  
  describe("isArray function", function(){
    
    let func = ph.isArray;
    
    it("should return false if no argument", function(){
      expect(func()).toBe(false);
    });
    
    it("should return false if null", function(){
      expect(func(null)).toBe(false);
    });
    
    it("should return false for an object input", function(){
      expect(func({})).toBe(false);
    });
      
    it("should return false for a numeric argument", function(){
      expect(func(7)).toBe(false);
    });
      
    it("should return false for a string argument", function(){
      expect(func("[]")).toBe(false);
    });
    
    it("should return false for a function argument", function(){
      expect(func(function(){})).toBe(false);
    });
    
    it("should return true for an empty array", function(){
      expect(func([])).toBe(true);
    });
      
    it("should return true for an array containing values", function(){
      expect(func([7, 16, "qwerty"])).toBe(true);
    });
      
    it("should return false for a Int8Array", function(){
      expect(func(new Int8Array())).toBe(false);
    });
    
    it("should return false for a Uint8Array", function(){
      expect(func(new Uint8Array())).toBe(false);
    });
    
    it("should return false for a Uint8ClampedArray", function(){
      expect(func(new Uint8ClampedArray())).toBe(false);
    }); 
    
    it("should return false for a Int16Array", function(){
      expect(func(new Int16Array())).toBe(false);
    }); 
    
    it("should return false for a Uint16Array", function(){
      expect(func(new Uint16Array())).toBe(false);
    }); 
    
    it("should return false for a Int32Array", function(){
      expect(func(new Int32Array())).toBe(false);
    }); 
    
    it("should return false for a Uint32Array", function(){
      expect(func(new Uint32Array())).toBe(false);
    }); 
    
    it("should return false for a Float32Array", function(){
      expect(func(new Float32Array())).toBe(false);
    }); 
    
    it("should return false for a Float64Array", function(){
      expect(func(new Float64Array())).toBe(false);
    }); 
    
  });
    
  
  describe("isAnyArray function", function(){
    
    let func = ph.isAnyArray;
    
    it("should return false if no argument", function(){
      expect(func()).toBe(false);
    });
    
    it("should return false if null", function(){
      expect(func(null)).toBe(false);
    });
    
    it("should return false for an object input", function(){
      expect(func({})).toBe(false);
    });
      
    it("should return false for a numeric argument", function(){
      expect(func(7)).toBe(false);
    });
      
    it("should return false for a string argument", function(){
      expect(func("[]")).toBe(false);
    });
    
    it("should return false for a function argument", function(){
      expect(func(function(){})).toBe(false);
    });
    
    it("should return true for an empty array", function(){
      expect(func([])).toBe(true);
    });
      
    it("should return true for an array containing values", function(){
      expect(func([7, 16, "qwerty"])).toBe(true);
    });
      
    it("should return true for a Int8Array", function(){
      expect(func(new Int8Array())).toBe(true);
    });
    
    it("should return true for a Uint8Array", function(){
      expect(func(new Uint8Array())).toBe(true);
    });
    
    it("should return true for a Uint8ClampedArray", function(){
      expect(func(new Uint8ClampedArray())).toBe(true);
    }); 
    
    it("should return true for a Int16Array", function(){
      expect(func(new Int16Array())).toBe(true);
    }); 
    
    it("should return true for a Uint16Array", function(){
      expect(func(new Uint16Array())).toBe(true);
    }); 
    
    it("should return true for a Int32Array", function(){
      expect(func(new Int32Array())).toBe(true);
    }); 
    
    it("should return true for a Uint32Array", function(){
      expect(func(new Uint32Array())).toBe(true);
    }); 
    
    it("should return true for a Float32Array", function(){
      expect(func(new Float32Array())).toBe(true);
    }); 
    
    it("should return true for a Float64Array", function(){
      expect(func(new Float64Array())).toBe(true);
    }); 
    
  });
  
  
  describe("isObject function", function(){
    
    let func = ph.isObject;
    
    it("should return false if no argument", function(){
      expect(func()).toBe(false);
    });
    
    it("should return false if null", function(){
      expect(func(null)).toBe(false);
    });
    
    it("should return true for an object input", function(){
      expect(func({})).toBe(true);
    });
      
    it("should return false for a numeric argument", function(){
      expect(func(7)).toBe(false);
    });
      
    it("should return false for a string argument", function(){
      expect(func("[]")).toBe(false);
    });
    
    it("should return false for a function argument", function(){
      expect(func(function(){})).toBe(false);
    });
    
    it("should return true for an empty array", function(){
      expect(func([])).toBe(false);
    });
      
    it("should return true for an array containing values", function(){
      expect(func([7, 16, "qwerty"])).toBe(false);
    });
      
    it("should return false for a Int8Array", function(){
      expect(func(new Int8Array())).toBe(false);
    });
    
    it("should return false for a Uint8Array", function(){
      expect(func(new Uint8Array())).toBe(false);
    });
    
    it("should return false for a Uint8ClampedArray", function(){
      expect(func(new Uint8ClampedArray())).toBe(false);
    }); 
    
    it("should return false for a Int16Array", function(){
      expect(func(new Int16Array())).toBe(false);
    }); 
    
    it("should return false for a Uint16Array", function(){
      expect(func(new Uint16Array())).toBe(false);
    }); 
    
    it("should return false for a Int32Array", function(){
      expect(func(new Int32Array())).toBe(false);
    }); 
    
    it("should return false for a Uint32Array", function(){
      expect(func(new Uint32Array())).toBe(false);
    }); 
    
    it("should return false for a Float32Array", function(){
      expect(func(new Float32Array())).toBe(false);
    }); 
    
    it("should return false for a Float64Array", function(){
      expect(func(new Float64Array())).toBe(false);
    }); 
    
  });
  
  
  describe("isFunction function", function(){
    
    let func = ph.isFunction;
    
    it("should return false if no argument", function(){
      expect(func()).toBe(false);
    });
    
    it("should return false if null", function(){
      expect(func(null)).toBe(false);
    });
    
    it("should return false for an object input", function(){
      expect(func({})).toBe(false);
    });
      
    it("should return false for a numeric argument", function(){
      expect(func(7)).toBe(false);
    });
      
    it("should return false for a string argument", function(){
      expect(func("[]")).toBe(false);
    });
    
    it("should return true for a function argument", function(){
      expect(func(function(){})).toBe(true);
    });
    
    it("should return false for an object containg a method", function(){
      expect(func({d: function(){}})).toBe(false);
    });
    
    it("should return true for a method argument", function(){
      expect(func({d: function(){}}.d)).toBe(true);
    });
    
    it("should return true for Date", function(){
      expect(func(Date)).toBe(true);
    });
    
    it("should return false for an array", function(){
      expect(func([])).toBe(false);
    });
      
  });
  
  
  describe("isFiniteNumber function", function(){
    
    let func = ph.isFiniteNumber;
     
    it("should return false if no argument", function(){
      expect(func()).toBe(false);
    });
    
    it("should return true for an integer", function(){
      expect(func(1)).toBe(true);
    });
    
    it("should return true for a floating point number", function(){
      expect(func(1.2)).toBe(true);
    });
    
    it("should return false for a number in string form", function(){
      expect(func("1.2")).toBe(false);
    });
    
    it("should return false for Infinity", function(){
      expect(func(Infinity)).toBe(false);
    });
    
    it("should return false for -Infinity", function(){
      expect(func(-Infinity)).toBe(false);
    });
    
    it("should return false for NaN", function(){
      expect(func(NaN)).toBe(false);
    });
    
    it("should return false for array of numbers", function(){
      expect(func([1, 2, 3])).toBe(false);
    });
    
  });
  
  
  describe("isString function", function(){
    
    let func = ph.isString;
     
    it("should return false if no argument", function(){
      expect(func()).toBe(false);
    });
    
    it("should return true for this string", function(){
      expect(func("should return true for this string")).toBe(true);
    });
    
    it("should return false for an integer", function(){
      expect(func(1)).toBe(false);
    });
    
    it("should return true for a number in string form", function(){
      expect(func("1.2")).toBe(true);
    });
    
  });
  
  
  describe("isRegExp function", function(){
    
    let func = ph.isRegex;
     
    it("should return false if no argument", function(){
      expect(func()).toBe(false);
    });
    
    it("should return false for this string", function(){
      expect(func("should return true for this string")).toBe(false);
    });
    
    it("/should\sreturn\strue\sfor\sthis\sregular\sexpression/", function(){
      expect(func(/should return true for this regular expression/)).toBe(true);
    });
    
  });
  
  
  describe("hasProperties function", function(){
    
    let func = ph.hasProperties;
    let testObj = {a: 7, b: [], c: {a: 13}, d: undefined, e: function(){}};
    
    it("should return undefined if first argument is missing", function(){
      expect(func()).toBe(undefined);
    });
    
    it("should return undefined if array is passed as only argument", function(){
      expect(func([])).toBe(undefined);
    });
    
    it("should return undefined if only one argument", function(){
      expect(func(testObj)).toBe(undefined);
    });
    
    it("should return false if second argument is not a property of first", function(){
      expect(func(testObj, "q", "b")).toBe(false);
    });
    
    it("should return false if third argument is not a property of first", function(){
      expect(func(testObj, "a", "q")).toBe(false);
    });
    
    it("should return true if there are 2 arguments and the second is a property of the 1st", function(){
      expect(func(testObj, "a")).toBe(true);
    });
    
    it("should return true if there are > 2 arguments and all after 1st are properties of the 1st", function(){
      expect(func(testObj, "a", "b", "c", "d")).toBe(true);
    });
    
  });
  
  
  describe("hasAnyProperties function", function(){
    
    let func = ph.hasAnyProperties;
    let testObj = {a: 7, b: [], c: {a: 13}, d: undefined, e: function(){}};
    
    it("should return undefined if first argument is missing", function(){
      expect(func()).toBe(undefined);
    });
    
    it("should return undefined if array is passed as only argument", function(){
      expect(func([])).toBe(undefined);
    });
    
    it("should return undefined if only argument", function(){
      expect(func(testObj)).toBe(undefined);
    });
    
    it("should return true if there are 2 arguments and the second is a property of the 1st", function(){
      expect(func(testObj, "a")).toBe(true);
    });
    
    it("should return false if none of the arguments after the first are a property of the 1st", function(){
      expect(func(testObj, "q", "z")).toBe(false);
    });
    
    it("should return true if second argument is not a property of first but third is", function(){
      expect(func(testObj, "q", "b")).toBe(true);
    });
    
    it("should return true if third argument is not a property of first but second is", function(){
      expect(func(testObj, "a", "q")).toBe(true);
    });
    
    it("should return true if there are > 2 arguments and all after 1st are properties of the 1st", function(){
      expect(func(testObj, "a", "b", "c", "d")).toBe(true);
    });
    
    it("should return true if there is one matching argument, even if others are nonsense", function(){
      expect(func(testObj, {}, "b", 4, [], function(){})).toBe(true);
    });
    
  });
  
  
  describe("safeMatch function", function(){
    
    let func = ph.safeMatch;
    let str1 = "abc abc";
    let str2 = "xyz";
    let reg1 = /abc/;
    let reg2 = /abc/g;
    
    it("should return undefined if first argument is missing", function(){
      expect(func()).toBe(undefined);
    });
    
    it("should return undefined if second argument is missing", function(){
      expect(func(str1)).toBe(undefined);
    });
    
    it("should return undefined if first argument is not a string", function(){
      expect(func(1, reg1)).toBe(undefined);
    });
    
    it("should return undefined if second argument is not a regular expression", function(){
      expect(func(str1, 1)).toBe(undefined);
    });
    
    it("should return array if string matches regular expression without g flag", function(){
      expect(ph.isArray(func(str1, reg1))).toBe(true);
    });
    
    it("should return array if string matches regular expression with g flag", function(){
      expect(ph.isArray(func(str1, reg2))).toBe(true);
    });
    
    it("should return array if there is no match", function(){
      expect(ph.isArray(func(str2, reg1))).toBe(true);
    });
    
  });
    
  
  describe("isUniqueArray function", function(){
    
    let func = ph.isUniqueArray;
    
    it("should return false if no argument", function(){
      expect(func()).toBe(false);
    });
    
    it("should return true for an empty array", function(){
      expect(func([])).toBe(true);
    });
    
    it("should return true for an array of distinct items", function(){
      expect(func([{}, [], {}, 1, 2, 3, 4, "4"])).toBe(true);
    });
    
    it("should return false if an item is repeated", function(){
      expect(func([1, 2, 2, 3, 4])).toBe(false);
    });
      
    it("should return false if object reference repeated", function(){
      let obj = {};
      expect(func([obj, obj])).toBe(false);
    });
    
  });
  
  
  describe("uniqueArray function", function(){
    
    let func = ph.uniqueArray;
    
    it("should return undefined if no argument", function(){
      expect(func()).toBe(undefined);
    });
    
    it("should return empty array for an empty array", function(){
      expect(func([])).toEqual([]);
    });
    
    it("should leave unique array unchanged", function(){
      let arr = [{}, [], {}, 1, 2, 3, 4, "4"];
      expect(func(arr)).toEqual(arr);
    });
    
    it("should return shorter array if an item is repeated", function(){
      let arr = [1, 2, 2, 3, 4];
      expect(func(arr)).toEqual([1, 2, 3, 4]);
    });
      
    it("should return shorter array if object reference repeated", function(){
      let obj = {};
      expect(func([obj, obj])).toEqual([obj]);
    });
    
  });  
  
})();