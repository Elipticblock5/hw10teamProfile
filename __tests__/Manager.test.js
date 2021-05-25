const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can do the office number using a  constructor argument", () => {
    const testValue = 200;
    const e = new Manager("NateManager", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
  });
  
  test('getRole() should return "Manager"', () => {
    const testValue = "Manager";
    const e = new Manager("NateManager", 1, "test@test.com", 100);
    expect(e.getRole()).toBe(testValue);
  });
  
  test("Can obtain number using getOffice()", () => {
    const testValue = 200;
    const e = new Manager("NateManager", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
  });