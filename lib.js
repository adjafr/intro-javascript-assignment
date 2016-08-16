function employee (name, manager) {
  return {
    name: name,
    manager: manager,
    toString: function () {
      return this.name
    }

  }
}

/**
 * Returns an array of employees (chosen from the given array of employees)
 * whose manager is the same as the given manager. This should not alter
 * the given array! A new array should be created to contain the results.
 *
 * @param manager the manager to filter by
 * @param employees the employees to choose from
 */
// function underlings (manager, employees) {
//   let array = []
//
//
// function hasManager (employee) {
//   return employee.manager === manager
// }
//
//
//   for (let person of employees) {
//     if (person.manager === manager) { //or if (hasManager(employee))
//       array.push(person)
//     }
//   }
//     return array
// }

// function names (employees) {
//   let array = []
//
//   function getName (employee) {
//     return employee.name
//   }
//
//   for (let employee of employees) {
//     array.push(getName(employee))
//   }
//   return result
// }

// function log (names) {
//   for (let name of names) {
//     console.log(name);
//   }
// }
//
// function higherOrderNames (employees) {
//   function getName (employee) {
//     return employee.name
//   }
//   return employees.map(getName)
// }

// log(names(underlings)(manager, employees)))

//iterating (foreach)
// function log (names) {
//   function logName (name){
//   console.log(name)}
// }

// log(names(underlings(manager, employees)))


  // employees
  //   .filter(function (employee) {return employee.manager === manager} ) //iterates over all
  //   .map(function (employee) {return employee.name}) //iterates over what is left in filter
  //   .forEach(n => console.log(n)) //iterates over what is left in map
// }

// function higherOrderLog (names) {
//   names.forEach(n => console.log(n))
//   // function logName (name) {
//   // console.log(name)
//
// names.forEach(logName)
// }

// function highOrderUnderlings (manager, employees) {
//   function hasManager (employee) {
//     return employee.manager === manager
//   }
//   return employees.filter(hasManager) //filter is a function on array, filters the portion of the array you want, supposed to return true or false
//   //if it returns true it becomes a result, it not there is no result
// }

// function logUnderlingNames (manager, employees) {
// employees.filter(e => e.manager === manager).map(e => e.name).forEach(n => console.log(n))

function logUnderlingNames (manager, employees) {
  let arr = []
  employees
  .filter(function (employee) {return employee.manager === manager} ) //iterates over all
  .map(function (employee) {return employee.name}) //iterates over what is left in filter
  .forEach(function (name) {return arr.push(name)}) //iterates over what is left in map
  return arr
}

let managerArray = []
function groupByManagerName (employees) {
 employees
  //let isManager = 0;

       .filter(function (employee) {return employee.manager !== undefined} ) //iterates over all
       .map(function (employee) {return employee.manager}) //iterates over what is left in filter
       //.filter(function (employee) {return employee.manager === manager} ) //iterates over all
       .forEach(function (n) {managerArray[n.name] = logUnderlingNames(n, employees)}) //iterates over what is left in map
    return managerArray
}


// function logUnderlingNames (manager, employees) {
// manager.filter(e => e.underlings === employees).map(e => e.name).forEach(n => console.log(n))
  // for (let e of employees) {
  //   employees.forEach
  //   if (!managerArray.includes === manager) {
  //     managerArray.push(manager)
  //   }
  // }

module.exports = {
  employee: employee,
  logUnderlingNames: logUnderlingNames,
  groupByManagerName: groupByManagerName
}
