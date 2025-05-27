const express = require("express");
const router = express.Router();
const questController = require("../controllers/quests");

router.get("/", questController.getAllQuests);
router.post("/", questController.createQuest);

module.exports = router;
