const Manager = require('./lib/manager.js');

test('generates manager object', () => {
    const manager = new Manager('Sarah Williams', '4', 'sarahwilliams@williams.com', '202')

    expect(manager.name).toBe('Sarah Williams');
    expect(manager.id).toBe('4');
    expect(manager.email).toBe('sarahwilliams@williams.com');
    expect(manager.office).toBe('202');
});

test('get managers office number', () => {
    const manager = new Manager('Sarah Williams', '4', 'sarahwilliams@williams.com', '202')

    expect(manager.getOffice()).toEqual(expect.stringContaining('202'));
});

test('get managers role', () => {
    const manager = new Manager('Sarah Williams', '4', 'sarahwilliams@williams.com', '202')

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});