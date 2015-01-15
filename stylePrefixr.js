'use strict';

var el;

if(!!global.document){
  el = global.document.createElement('div');
}

var prefixes = ["ms", "Moz", "Webkit", "O"];
var properties = [
  'userSelect',
  'transform',
  'transition',
  'transformOrigin',
  'transformStyle',
  'transitionProperty',
  'transitionDuration',
  'transitionTimingFunction',
  'transitionDelay',
  'borderImage',
  'borderImageSlice',
  'boxShadow',
  'backgroundClip',
  'backfaceVisibility',
  'perspective',
  'perspectiveOrigin',
  'animation',
  'animationDuration',
  'animationName',
  'animationDelay',
  'animationDirection',
  'animationIterationCount',
  'animationTimingFunction',
  'animationPlayState',
  'animationFillMode',
  'appearance'
];

function GetVendorPrefix(property) {
  if(properties.indexOf(property) == -1 || !global.document || typeof el.style[property] !== 'undefined'){
    return property;
  }

  property = property[0].toUpperCase() + property.slice(1);
  var temp;

  for(var i = 0; i < prefixes.length; i++){
    temp = prefixes[i] + property;
    if(typeof el.style[temp] !== 'undefined'){
      prefixes = [prefixes[i]]; // we only need to check this one prefix from now on.
      return temp;
    }
  }
  return property[0].toLowerCase() + property.slice(1);
}


module.exports = (function(){
  var cache = {};
  return function(obj){
    if(!global.document){
      return obj;
    }

    var result = {};

    for(var key in obj){
      if(cache[key] === undefined){
        cache[key] = GetVendorPrefix(key);
      }
      result[cache[key]] = obj[key];
    }

    return result;
  };
})();