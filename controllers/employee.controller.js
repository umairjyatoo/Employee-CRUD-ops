  const Employee = require('../models/employee.model');


  //CREATE
  var employee_create = function(req, res) {
    let newEmp = new Employee(
      {
        name: req.body.name,
        department: req.body.department,
        salary: req.body.salary
      }
    );
    newEmp.save(function(err){
      if(err) return next(err);
      res.send('Employee Created Successfully');
    })
  };

  //READ
  var employee_details = function(req, res) {
    Employee.find(function(err, employees) {
      if(err) return next(err);
      res.send(employees);
    })
  };

  //READ BY ID
  var employee_detailsbyid = function(req, res) {
    Employee.findById(req.params.id, function(err, employee) {
      if(err) return next(err);
      res.send(employee);
    })
  };

  //UPDATE
  var employee_update = function(req, res) {
    Employee.findByIdAndUpdate(req.params.id, {$set: req.body} , function(err) {
      if(err) return next(err);
      res.send('Record Updated Successfully');
    })
  };

  //DELETE
  var employee_delete = function(req, res) {
    Employee.findByIdAndRemove(req.params.id, function(err) {
      if(err) return next(err);
      res.send('Record Deleted Successfully');
    })
  };

  module.exports = {
    employee_create,
    employee_details,
    employee_detailsbyid,
    employee_update,
    employee_delete
  }
