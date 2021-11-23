const Intern = require('./lib/intern.js')

test('generates an intern object', () => {
    const intern = new Intern('John Adams', '3', 'johnadams@adams.com', 'college')

    expect(intern.name).toBe('John Adams');
    expect(intern.id).toBe('3');
    expect(intern.email).toBe('johnadams@adams.com');
    expect(intern.school).toBe('college');
});

test('gets interns school', () => {
    const intern = new Intern('John Adams', '3', 'johnadams@adams.com', 'college')

    expect(intern.getSchool()).toEqual(expect.stringContaining('college'));
});

test('gets interns role', () => {
    const intern = new Intern('John Adams', '3', 'johnadams@adams.com', 'college')

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});