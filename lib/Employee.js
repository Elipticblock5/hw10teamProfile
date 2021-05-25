//creating Employee Class, and exporting module

class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.title = 'Employee';
    }
  
    getName() {
      return this.name;
      }
  
    getRole() {
      return "Employee";
    }
  
    getEmail() {
          return this.email;
      }
  
    getId(Id) {
      return this.id;
      }
    }
  
  
  module.exports = Employee;