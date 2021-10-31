const Engineer = require("../lib/Engineer");

function createEngineer(name="Daniel", id="123", email="dancore99@outlook.com", github='username' ){
    return new Engineer(name, id, email, github);
};

describe('test Engineer class', () => {

    it('should be able to init', () => {
        const result = new Engineer();
        expect(result instanceof Engineer).toBe(true);

    });

    it('it should constain the name property', () => {
        const result = createEngineer()
        expect(result).toHaveProperty("name");
    });

    it('it should constain the id property', () => {
        const result = createEngineer()
        expect(result).toHaveProperty("id");
    });

    it('it should constain the email property', () => {
        const result = createEngineer()
        expect(result).toHaveProperty("email");
    });

    it('it should return name when get name is run', () => {
        const name = "abc";
        const result = createEngineer(name);
        expect(result.getName()).toBe(name);
    });

    it('it should return name when get id is run', () => {
        const id = "123";
        const result = createEngineer("123", id);
        expect(result.getId()).toBe(id);
    });

    it('it should return name when get email is run', () => {
        const email = "dancore";
        const result = createEngineer("123", "123", email);
        expect(result.getEmail()).toBe(email);
    });

    it('it should return name when get role is run', () => {
        const role = "Engineer";
        const result = createEngineer(role);
        expect(result.getRole()).toBe(role);
    });
    it('it should return github when getGithub is run', () => {
        const github = "user";
        const result = createEngineer("123", "123", "123", github);
        expect(result.getGithub()).toBe(github);
    });
})