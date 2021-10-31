const Employee = require("../lib/Employee");


function createEmployee(name="Daniel", id="123", email="dancore99@outlook.com" ){
    return new Employee(name, id, email);
};

describe('test employee class', () => {

    it('should be able to init', () => {
        const result = new Employee();
        expect(result instanceof Employee).toBe(true);

    });

    it('it should constain the name property', () => {
        const result = createEmployee()
        expect(result).toHaveProperty("name");
    });

    it('it should constain the id property', () => {
        const result = createEmployee()
        expect(result).toHaveProperty("id");
    });

    it('it should constain the email property', () => {
        const result = createEmployee()
        expect(result).toHaveProperty("email");
    });

    it('it should return name when get name is run', () => {
        const name = "abc";
        const result = createEmployee(name);
        expect(result.getName()).toBe(name);
    });

    it('it should return name when get id is run', () => {
        const id = "123";
        const result = createEmployee("123", id);
        expect(result.getId()).toBe(id);
    });

    it('it should return name when get email is run', () => {
        const email = "dancore";
        const result = createEmployee("123", "123", email);
        expect(result.getEmail()).toBe(email);
    });

    it('it should return name when get role is run', () => {
        const role = "Employee";
        const result = createEmployee(role);
        expect(result.getRole()).toBe(role);
    });
})