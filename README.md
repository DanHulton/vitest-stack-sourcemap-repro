This repository contains a reproduction of an issue observed with [Vitest](https://vitest.dev/).

## Issue

When running tests that encounter an error in a required file, the generated trace does not point to the correct file.

Steps to reproduce:

1) `yarn install`
2) `yarn test`

Expected:

```
ReferenceError: boop is not defined
 ❯ test/main.test.js:5:12
 > src/main.js:2:9
      1| export function testFunc(x) {
      2|   return boop(x);
       |          ^
      3| }
```

Actual:

```
ReferenceError: boop is not defined
 ❯ Module.testFunc ../../../../../src/main.js:2:3
 ❯ test/main.test.js:5:12
      3| describe('Main test', () => {
      4|   it('should blow up here', () => {
      5|     expect(testFunc(5)).toBe(10);
       |            ^
      6|   });
      7| });
```
