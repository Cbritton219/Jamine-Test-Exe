it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 25000,
    years: 5,
    rate: 5
  };
  expect(calculateMonthlyPayment(values)).toEqual('471.78');
});


it("should return a result with 2 decimal places", function () {
  const values = {
    amount: 12345,
    years: 6,
    rate: 3.9
  };
  expect(calculateMonthlyPayment(values)).toEqual('192.58');
});

it("should handle terribly high interest rates", function () {
  const values = {
    amount: 2000,
    years: 50,
    rate: 100
  };
  expect(calculateMonthlyPayment(values)).toEqual('166.67');
});
