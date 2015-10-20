import React from 'react';
import {expect} from 'chai'
import check from '../';
import type from './type';

beforeEach(function() {
    this._consoleError = console.error;

    this.errors = [];

    global.console.error = (...args) => {
        this.errors.push(args);
    };
});

afterEach(function() {
    console.error = this._consoleError;
});

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

        check({
            a: 5,
            b: 'abc',
            c: {d: 1}
        }, type);

        expect(this.errors).to.have.length(2);
    });

    it('validates external type', function() {
        check({}, {message: type});
        expect(this.errors).to.have.length(1);
    });

    it('passes validation', function() {
        check({a: 1}, {a: React.PropTypes.number.isRequired});
        expect(this.errors).to.be.empty;
    });
});
