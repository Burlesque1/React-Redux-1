const add = (a, b) => a + b;
const generateGreeting = (name = 'fafsa') => `Hello ${name}`;

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('fdasfd', () => {
    const g = generateGreeting('fdas');
    expect(g).toBe('Hello fdas');
});

test('fdasfd', () => {
    const g = generateGreeting();
    expect(g).toBe('Hello fafsa');
});