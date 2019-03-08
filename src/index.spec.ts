import { multiply } from './index';

describe('When multiplying numbers', () => {
  it('Should be able to compute result', () => {
    expect(multiply(2, 3)).toBe(6);
  });
});
