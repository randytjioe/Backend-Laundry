const mongoose = require("mongoose");

const AdminObject = {
  username: { type: String, default: null },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
}

const AdminSchema = new mongoose.Schema(AdminObject);

const AdminModel = new mongoose.model('Admin', AdminSchema);

module.exports = {
  AdminObject,
  AdminSchema,
  AdminModel
}