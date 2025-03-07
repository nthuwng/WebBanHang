const Category = require("../models/category");
const aqp = require("api-query-params");
const path = require("path"); //fs : file system
const fs = require("fs");
const bcrypt = require("bcrypt");

const postCategoryServices = async (data) => {
  try {
    let result = await Category.create(data);
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

module.exports = { postCategoryServices };
