function Developer(emp_name) {
  this.emp_name = emp_name;
  this.type = "Developer";
}
function Tester(emp_name) {
  this.emp_name = emp_name;
  this.type = "Tester";
}

function EmployeeFactory() {
  this.create = (emp_name, type) => {
    switch (type) {
      case "Developer":
        return new Developer(emp_name);
      case "Tester":
        return new Tester(emp_name);
    }
  };
}
const factoryFunction = new EmployeeFactory();
employees = [];
employees.push(factoryFunction.create("Gurusudhan", "Developer"));
employees.push(factoryFunction.create("Abinaya", "Tester"));
employees.push(factoryFunction.create("Dheva", "Developer"));
employees.push(factoryFunction.create("Sabari", "Developer"));
employees.push(factoryFunction.create("Harini", "Tester"));
employees.forEach((emp) => {
  console.log(emp.emp_name + " is a " + emp.type);
});
