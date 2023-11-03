class GamerController {
  async createGamer(req, res) {
    const { name, speed } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO high_scores (name, speed) VALUES ($1, $2) RETURNING id",
      [name, speed]
    );
    res.json({ success: true, id: result.rows[0].id });
  } catch (error) {
    console.error("Error adding a high score:", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to add a high score" });
  }
  }
  async getUsers(req, res) {
    const users = await db.query("SELECT * FROM gamer");
    res.json(users.rows);
  }
}

module.exports = new GamerController();
