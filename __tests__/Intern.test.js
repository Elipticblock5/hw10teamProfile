const Intern = require("../lib/Intern");

test("Can set school using constructor", () => {
    const testValue = "Harvard";
    const e = new Intern("Natern", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
  });
  
  test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Natern", 1, "test@test.com", "Harvard");
    expect(e.getRole()).toBe(testValue);
  });
  
  test("Can get school via getSchool()", () => {
    const testValue = "Harvard";
    const e = new Intern("Natern", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
  });
  