const Quest = require("../models/Quest");

exports.getAllQuests = async (req, res) => {
  try {
    const quests = await Quest.find();
    res.json(quests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createQuest = async (req, res) => {
  try {
    const quest = new Quest(req.body);
    await quest.save();
    res.status(201).json(quest);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
