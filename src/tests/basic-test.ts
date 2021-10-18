import { divide } from '../util/util';

import { expect } from 'chai';

describe('Basic test', () => {
    it('should divide two numbers', () => {
        expect(divide(4, 2)).to.equal(2);
    });

    it('should throw an error when dividing by zero', () => {
        const fn = () => divide(4, 0);

        expect(fn).to.throw('Divide by zero error');
    });
});
