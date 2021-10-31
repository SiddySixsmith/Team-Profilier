const Manager = require("../lib/Manager");

function createManager(name="Daniel", id="123", email="dancore99@outlook.com", officeNumber='2' ){
    return new Manager(name, id, email, officeNumber);
};

describe('test Manager class', () => {

    it('should be able to init', () => {
        const result = new Manager();
        expect(result instanceof Manager).toBe(true);

    });

    it('it should constain the name property', () => {
        const result = createManager()
        expect(result).toHaveProperty("name");
    });

    it('it should constain the id property', () => {
        const result = createManager()
        expect(result).toHaveProperty("id");
    });

    it('it should constain the email property', () => {
        const result = createManager()
        expect(result).toHaveProperty("email");
    });

    it('it should return name when get name is run', () => {
        const name = "abc";
        const result = createManager(name);
        expect(result.getName()).toBe(name);
    });

    it('it should return name when get id is run', () => {
        const id = "123";
        const result = createManager("123", id);
        expect(result.getId()).toBe(id);
    });

    it('it should return name when get email is run', () => {
        const email = "dancore";
        const result = createManager("123", "123", email);
        expect(result.getEmail()).toBe(email);
    });

    it('it should return name when get role is run', () => {
        const role = "Manager";
        const result = createManager(role);
        expect(result.getRole()).toBe(role);
    });
    it('it should return officeNumber when getofficeNumber is run', () => {
        const officeNumber = "user";
        const result = createManager("123", "123", "123", officeNumber);
        expect(result.getOfficeNumber()).toBe(officeNumber);
    });
})