const { Sum } = require("../sum");

test("sum function to be tested", () => {
  const result = Sum(3, 4);
  expect(result).toBe(7);
//   const result2 = Sum( 'sai' , 'praveen')
//   expect(result2).toBe('sai praveen');
});
