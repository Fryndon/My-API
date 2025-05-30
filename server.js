const express = require("express");
const app = express();
const PORT = 5000;

// Пример данных с квестами
const quests = [
  {
    id: 1,
    title: "Поиск сокровища",
    description: "Найдите сокровище, спрятанное на острове.",
  },
  {
    id: 2,
    title: "Побег из лабиринта",
    description: "Выберитесь из сложного лабиринта до заката солнца.",
  },
  {
    id: 3,
    title: "авизхваив",
    description: "проверка",
  },
];

// Маршрут для получения всех квестов
app.get("/api/quests", (req, res) => {
  res.json(quests);
});

// Маршрут для получения квеста по ID
app.get("/api/quests/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const quest = quests.find((quest) => quest.id === id);

  if (!quest) {
    res.status(404).json({ error: "Quest not found" });
  } else {
    res.json(quest);
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
