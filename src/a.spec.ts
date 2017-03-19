import { multiply  } from './a';

describe('When multiplying numbers', () => {
    it('Shoud be able to compute result', () => {
        expect(multiply(2, 3)).toBe(6);
    })
})