class GamerController {
  async createGamer(req, res) {
    const { player_name, score } = req.body;

    try {
      const result = await pool.query(
        "INSERT INTO high_scores (player_name, score) VALUES ($1, $2) RETURNING id",
        [player_name, score]
      );
      res.json({ success: true, id: result.rows[0].id });
    } catch (error) {
      console.error("Ошибка при добавлении рекордного счета:", error);
      res
        .status(500)
        .json({ success: false, error: "Не удалось добавить рекордный счет" });
    }
  }
}

module.exports = new GamerController();
