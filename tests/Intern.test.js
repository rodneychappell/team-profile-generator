const Intern = require('../pages/Intern');
const intern = new Intern('rchapp','123','rchapp@mail.com');

test('test if we can get the values for employee object', () => {
    expect(intern.name).toBe('rchapp');
    expect(intern.id).toBe('123');
    expect(intern.email).toBe('rchapp@mail.com');
});

test('test if we can get the name from getName() method', () => {
    expect(intern.getName()).toBe('rchapp');
});

test('test if we can get the name from getId() method', () => {
    expect(intern.getId()).toBe('123');
});

test('test if we can get the name from getEmail() method', () => {
    expect(intern.getEmail()).toBe('rchapp@mail.com');
});

test('test if we can get the name from getRole() method', () => {
    expect(intern.getRole()).toBe('Employee');
});