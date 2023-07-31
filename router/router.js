const express = require("express");
const { homeController } = require("../controllers/home.controller");
const { jewelleryController } = require("../controllers/jewellery.controller");
const { electronicController } = require("../controllers/electronic.controller");
const { fashionController } = require("../controllers/fashion.controller");

const router = express.Router();

router.get("/", homeController);
router.get("/jewellery", jewelleryController);
router.get("/electronic", electronicController);
router.get("/fashion", fashionController);

module.exports = router;
