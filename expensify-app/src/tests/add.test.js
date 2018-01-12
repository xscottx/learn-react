
const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(2, 5);

  expect(result).toBe(7);
});

test('should greet name', () => {
  const result = generateGreeting('Hoang');

  expect(result).toBe('Hello Hoang!');
})

test('should generate greeting for no name', () => {
  const result = generateGreeting();

  expect(result).toBe('Hello Anonymous!');
})