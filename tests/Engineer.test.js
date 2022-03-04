const Engineer = require('../pages/Engineer');
const engineer = new Engineer('rchapp','123','rchapp@mail.com');

test('test if we can get the values for employee object', () => {
    expect(engineer.name).toBe('rchapp');
    expect(engineer.id).toBe('123');
    expect(engineer.email).toBe('rchapp@mail.com');
});

test('test if we can get the name from getName() method', () => {
    expect(engineer.getName()).toBe('rchapp');
});

test('test if we can get the name from getId() method', () => {
    expect(engineer.getId()).toBe('123');
});

test('test if we can get the name from getEmail() method', () => {
    expect(engineer.getEmail()).toBe('rchapp@mail.com');
});

test('test if we can get the name from getRole() method', () => {
    expect(engineer.getRole()).toBe('Employee');
});