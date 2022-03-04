const Employee = require('../pages/Employee');
const employee = new Employee('rchapp','123','rchapp@mail.com');

test('test if we can get the values for employee object', () => {
    expect(employee.name).toBe('rchapp');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('rchapp@mail.com');
});

test('test if we can get the name from getName() method', () => {
    expect(employee.getName()).toBe('rchapp');
});

test('test if we can get the name from getId() method', () => {
    expect(employee.getId()).toBe('123');
});

test('test if we can get the name from getEmail() method', () => {
    expect(employee.getEmail()).toBe('rchapp@mail.com');
});

test('test if we can get the name from getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});