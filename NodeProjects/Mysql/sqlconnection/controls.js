import sql from "mysql2";
const pool = sql
  .createPool({
    host: "localhost",
    user: "root",
    password: "Gurusudhan@16",
    database: "Students",
  })
  .promise();

export async function getList(req, res) {
  const print = await pool.query(`select * from studentdetails`);
  res.send(print[0]);
}

export async function insert(req, res) {
  const { entry } = await pool.query(
    `INSERT INTO studentdetails VALUES (?,?)`,
    [req.body.username, req.body.age]
  );
  res.send("Successfully added to student details");
}

export default { insert, getList };
