const Engineer = require('../lib/engineer.js')

test('generates an engineer object', () => {
    const engineer = new Engineer ('Sam Smith', '2', 'samsmith@smith.com', 'samsmithit')

    expect(engineer.name).toBe('Sam Smith');
    expect(engineer.id).toBe('2');
    expect(engineer.email).toBe('samsmith@smith.com');
    expect(engineer.github).toBe('samsmithgit');
});

test('gets engineers github username', () => {
    const engineer = new Engineer ('Sam Smith', '2', 'samsmith@smith.com', 'samsmithit')

    expect(engineer.getGitHub()).toEqual(expect.stringContaining('samsmithgit'));
});

test('gets engineers role', () => {
    const engineer = new Engineer ('Sam Smith', '2', 'samsmith@smith.com', 'samsmithit')
    
    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'))
});