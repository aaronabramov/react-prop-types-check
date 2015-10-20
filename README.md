[![Build Status](https://travis-ci.org/dmitriiabramov/react-prop-types-check.svg?branch=master)](https://travis-ci.org/dmitriiabramov/react-prop-types-check)

# React.PropTypes validation outside of React

```js
import check from 'react-prop-types-check';

const type = {
    a: React.PropTypes.array.isRequired,
    b: React.PropTypes.string,
    c: React.PropTypes.shape({
        d: React.PropTypes.number,
        e: React.PropTypes.bool.isRequired
    })
};

check({
    a: 5,
    b: 'abc',
    c: {d: 1}
}, type);

// Invalid prop `a` of type `number` supplied to `{"a":5,"b":"abc","c":{"d":1}}`, expected `array`.
// Required prop `e` was not specified in `{"a":5,"b":"abc","c":{"d":1}}`.
```

