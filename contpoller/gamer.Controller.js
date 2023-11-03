const db = require("../db");

class GamerController {
  async createGamer(req, res) {
    const { name, speed } = req.body;
  
    try {
      const result = await db.query(
        "INSERT INTO gamer (name, speed) VALUES ($1, $2) RETURNING id",
        [name, speed]
      );
      const insertedId = result.rows[0].id;
      res.status(201).json({ success: true, id: insertedId });
    } catch (error) {
      console.error("Ошибка при добавлении рекорда:", error);
      res.status(500).json({ success: false, error: "Не удалось добавить рекорд" });
    }
  }

  async getUsers(req, res) {
    try {
      const queryResult = await db.query("SELECT * FROM gamer");
      const users = queryResult.rows;
      res.json(users);
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
      res.status(500).json({ error: 'Ошибка при получении данных' });
    }
  }
}

module.exports = new GamerController();
