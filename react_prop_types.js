import React from 'react';

/**
 * @param {Object} object to be validated
 * @param {Object} propTypes object with defined prop types
 * @param {Boolean} _throw if set to true, invalid prop types will throw
 */
export default function validate(object, propTypes, _throw) {
    let propName;

    for (propName in propTypes) {
        if (propTypes.hasOwnProperty(propName)) {
            let error = propTypes[propName](object, propName, JSON.stringify(object), 'prop');
            if (error) {
                if (_throw) {
                    throw error;
                } else {
                    console.warn(error.message);
                }
            }
        }
    }
}
