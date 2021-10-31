const Employee = require("../lib/Employee");
function createEmployee(name = "Daniel", id = "123", email = "dancore" ){
    return 
}
//title

describe('test employee class', () => {

    it('should be able to init', () => {
        const result = new Employee();
        expect(result instanceof Employee .toBe(true));

    });

    it('it should constain the name property', () => {
        const name = "Daniel"
        const id = "123";
        const email = "dancore99@outlook.com";
        const result = createEmployee

        expect(result).toHaveProptery(name)

    });

    it('it should constain the id property', () => {
        const result = createEmployee

        expect(result).toHaveProptery(id)
    });

    it('it should constain the eail property', () => {
        const result = createEmployee

        expect(result).toHaveProptery(email)
    });

    it('it should return name when get name is run', () => {
        const name = 'abc'
        const result = createEmployee(name)

        expect(result.getName()).toBe(name)
    });

    it('it should return name when get id is run', () => {
        const id = 'abc'
        const result = createEmployee(id)

        expect(result.getId()).toBe(id)
    });

    it('it should return name when get email is run', () => {
        const email = 'abc'
        const result = createEmployee(email)

        expect(result.getEmail()).toBe(email)
    });

    it('it should return name when get role is run', () => {
        const role = 'Employee'
        const result = createEmployee(role)

        expect(result.getRole()).toBe(role)
    });

    it(`it should only accept string "name"`, () => {
        const makeEmployee = () => {
            const result = new Employee(123)
        }
        
        expect(makeEmployee()).toThrow(Error)
    })
})