const Employee = require ('../lib/Employee');

 test("Can create an Employee instance", () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object");
  });

  it("Can set a name using constructor", () => {
    const name = "Nate";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

 test("Can set an id using constructor argument", () => {
    const testValue = 100;
    const e = new Employee("TestFoo", testValue);
    expect(e.id).toBe(testValue);
  });

 test("Can set email using constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Employee("TestFoo", 1, testValue);
    expect(e.email).toBe(testValue);
  });

  test("Can get name using getName()", () => {
    const testValue = "Nate";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
  });

  test("Can get email using getEmail()", () => {
      const testValue = "test@test.com";
      const e = new Employee("TestFoo", 1, testValue);
      expect(e.getEmail()).toBe(testValue);
  });
  
  test("Can get id using getId()", () => {
      const testValue = 100;
      const e = new Employee("TestFoo", testValue);
      expect(e.getId()).toBe(testValue);
  });

  test("getRole() should return \"Employee\"", () => {
      const testValue = "Employee";
      const e = new Employee("Nate", 1, "test@test.com");
      expect(e.getRole()).toBe(testValue);
  }); 