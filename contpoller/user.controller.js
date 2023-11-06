const db = require("../db");

class UserControllers {
  async createUser(req, res) {
    const { name } = req.body;
    const newPerson = await db.query(
      `INSERT INTO person (name) values($1) RETURNING *`,
      [name]
    );
    res.json(newPerson.rows[0]);
  }
  async getUsers(req, res) {
    try {
      const queryResult = await db.query("SELECT * FROM person");
      const users = queryResult.rows;
      res.json(users);
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
      res.status(500).json({ error: 'Ошибка при получении данных' });
    }
  }
  async deleteUser(req, res) {
    const id = req.params.id;
    const user = await db.query('DELETE FROM person where id = $1', [id]);
    res.json(user.rows[0]);
  }
}

module.exports = new UserControllers();
