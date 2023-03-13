import { testFunc } from '../src/main';

describe('Main test', () => {
  it('should blow up here', () => {
    expect(testFunc(5)).toBe(10);
  });
});
