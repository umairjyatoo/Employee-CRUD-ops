  const express = require('express');
  const router = express.Router();
  const Employee_Controller = require('../controllers/employee.controller');

  router.post('/create', Employee_Controller.employee_create);

  router.get('/list', Employee_Controller.employee_details);

  router.get('/:id', Employee_Controller.employee_detailsbyid);

  router.put('/:id/update', Employee_Controller.employee_update);

  router.delete('/:id/delete', Employee_Controller.employee_delete);


  module.exports = router;
