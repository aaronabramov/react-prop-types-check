import React from 'react';
import {expect} from 'chai'
import validate from '../';
import type from '../type';

describe('react-prop-types', () => {
    it('validates primitives', function() {
        const type = {
            a: React.PropTypes.array.isRequired,
            b: React.PropTypes.string,
            c: React.PropTypes.shape({
                d: React.PropTypes.number,
                e: React.PropTypes.bool.isRequired
            })
        };

        validate({
            a: 5,
            b: 'abc',
            c: {d: 1}
        }, type);
    });

    it('validates external type', function() {
        validate({}, {message: type});
    });
});
