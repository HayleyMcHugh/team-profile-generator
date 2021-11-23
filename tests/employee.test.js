const Employee = require('../lib/employee.js')

test('generates an employee object', () => {
    const employee = new Employee('Jane Doe', '1', 'janedoe@jane.com');

    expect(employee.name).toBe('Jane Doe');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('janedoe@jane.com');
});

test('gets employees name', () => {
    const employee = new Employee('Jane Doe', '1', 'janedoe@jane.com');

    expect(employee.getName()).toEqual(expect.stringContaining('Jane Doe'));
});

test('gets employees id', () => {
    const employee = new Employee('Jane Doe', '1', 'janedoe@jane.com');

    expect(employee.getID()).toEqual(expect.stringContaining('1'));
});

test('gets employees email', () => {
    const employee = new Employee('Jane Doe', '1', 'janedoe@jane.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('janedoe@jane.com'));
});

test('gets employees role', () => {
    const employee = new Employee('Jane Doe', '1', 'janedoe@jane.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});