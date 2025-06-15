const { Router } = require("express");
const searchController = require("../controllers/usersController");
const searchRouter = Router();


searchRouter.get("/", searchController.usersSearchGet);

module.exports = searchRouter;
