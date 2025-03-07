
const {
  postCart_detailsServices,
  getALLCart_detailsServices,
  putUpdateCart_detailsServices,
  getCart_detailsByIdServices,
  deleteCart_detailsServices,
} = require("../services/cart_detailsServices");

const postCart_detailsAPI = async (req, res) => {
  try {
    let result = await postCart_detailsServices(req.body);
    return res.status(200).json({
      errorCode: 0,
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorCode: 1, msg: "Lỗi server" });
  }
};

const getCart_detailsAPI = async (req, res) => {
  let result = await getALLCart_detailsServices(req.query);

  return res.status(200).json({
    length: result.length,
    errorCode: 0,
    data: result,
  });
};

const updateCart_detailsAPI = async (req, res) => {
  try {
    let id = req.params.id;
    let result = await putUpdateCart_detailsServices(id, req.body);

    return res.status(200).json({
      errorCode: 0,
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ errorCode: 1, msg: "Lỗi server" });
  }
};

const getCart_detailsByIdAPI = async (req, res) => {
  let id = req.params.id;
  let result = await getCart_detailsByIdServices(id);

  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};

const deleteCart_detailsAPI = async (req, res) => {
  let id = req.params.id;
  let result = await deleteCart_detailsServices(id);
  if (!result) {
    return res
      .status(404)
      .json({ errorCode: 1 });
  }
  return res.status(200).json({
    errorCode: 0,
    data: result,
  });
};

module.exports = {
  postCart_detailsAPI,
  getCart_detailsAPI,
  updateCart_detailsAPI,
  getCart_detailsByIdAPI,
  deleteCart_detailsAPI,
};
