  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;

  var EmployeeSchema = new Schema(
    {
      name: {type: String, required: true, max: 100},
      department: {type: String, required: true, max: 100},
      salary: {type: Number, required: true}
    }
  );

  module.exports = mongoose.model('Employee', EmployeeSchema);
