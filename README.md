# React-Prefixr

React-Prefixr, is a utility primarily for managing vendor prefixes for styles in React.

That said, React-Prefixr has no dependencies and can be used in projects where you are not using React.
The main difference is that this utility is for adding prefixes for javascript style camelCased styles properties.

## Usage

React-Prefixr is used much like ClassList helper from React addons.

```
var s = require('react-prefixr');

React.createClass({
  render: function(){
    return React.DOM.div({
      style: s({transform: 'translateX(10px)'})
    });
  }
})

```

Just pass the value to assigned to the style property of a React Element and react-prefixr will convert the object to one with vendor prefixes.

## Inner Workings

A list is maintained of properties that may need vendor prefixes. This list will grow over time and contribution are welcome. The correct vendor prefix is determined at run-time in the browser.

As soon, as one of the prefixes is found to apply, the other prefixes are never tested again.

All transforms are also cached.

Finally, properties not found in the list are never even tested and returned as-is.
If a property isn't supported at all in a browser it is also returned as-is.

All properties are left untouched when run in Node.

## TO-DO
- Add some code to transform the values of certain properties. e.g. `transition: "transform 0.5s ease"` Should become `WebkitTransition: "-webkit-transform 0.5s ease".
- Find missing holes in the list of properties being checked.
- depend on a third party library to work within node.