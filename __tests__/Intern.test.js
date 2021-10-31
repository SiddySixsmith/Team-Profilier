const Intern = require("../lib/Intern");

function createIntern(name="Daniel", id="123", email="dancore99@outlook.com", school='trilagy' ){
    return new Intern(name, id, email, school);
};

describe('test Intern class', () => {

    it('should be able to init', () => {
        const result = new Intern();
        expect(result instanceof Intern).toBe(true);

    });

    it('it should constain the name property', () => {
        const result = createIntern()
        expect(result).toHaveProperty("name");
    });

    it('it should constain the id property', () => {
        const result = createIntern()
        expect(result).toHaveProperty("id");
    });

    it('it should constain the email property', () => {
        const result = createIntern()
        expect(result).toHaveProperty("email");
    });

    it('it should return name when get name is run', () => {
        const name = "abc";
        const result = createIntern(name);
        expect(result.getName()).toBe(name);
    });

    it('it should return name when get id is run', () => {
        const id = "123";
        const result = createIntern("123", id);
        expect(result.getId()).toBe(id);
    });

    it('it should return name when get email is run', () => {
        const email = "dancore";
        const result = createIntern("123", "123", email);
        expect(result.getEmail()).toBe(email);
    });

    it('it should return name when get role is run', () => {
        const role = "Intern";
        const result = createIntern(role);
        expect(result.getRole()).toBe(role);
    });
    it('it should return school when getschool is run', () => {
        const school = "UWA";
        const result = createIntern("123", "123", "123", school);
        expect(result.getSchool()).toBe(school);
    });
})