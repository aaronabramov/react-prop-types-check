/**
 * @param {Object} object to be validated
 * @param {Object} propTypes object with defined prop types
 * @param {Boolean} _throw if set to true, invalid prop types will throw
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = check;

function check(object, propTypes, _throw) {
    var propName = undefined;

    for (propName in propTypes) {
        if (propTypes.hasOwnProperty(propName)) {
            var error = propTypes[propName](object, propName, JSON.stringify(object), 'prop');
            if (error) {
                if (_throw) {
                    throw error;
                } else {
                    console.error(error.message);
                }
            }
        }
    }
}

module.exports = exports['default'];