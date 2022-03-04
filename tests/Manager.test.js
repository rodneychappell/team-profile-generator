const Manager = require('../pages/Manager');
const manager = new Manager('rchapp','123','rchapp@mail.com');

test('test if we can get the values for employee object', () => {
    expect(manager.name).toBe('rchapp');
    expect(manager.id).toBe('123');
    expect(manager.email).toBe('rchapp@mail.com');
});

test('test if we can get the name from getName() method', () => {
    expect(manager.getName()).toBe('rchapp');
});

test('test if we can get the name from getId() method', () => {
    expect(manager.getId()).toBe('123');
});

test('test if we can get the name from getEmail() method', () => {
    expect(manager.getEmail()).toBe('rchapp@mail.com');
});

test('test if we can get the name from getRole() method', () => {
    expect(manager.getRole()).toBe('Employee');
});