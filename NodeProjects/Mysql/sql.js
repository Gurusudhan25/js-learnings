import sql from "mysql2";

const pool = sql
  .createPool({
    host: "localhost",
    user: "root",
    password: "Gurusudhan@16",
    database: "userdata",
  })
  .promise();

async function getDetail() {
  const [viewTable] = await pool.query("SELECT * from users");
  return viewTable;
}

async function getUser(id) {
  const result = await pool.query("SELECT * from users WHERE id =?", [id]);
  return result[0];
}

async function addUser(name, age) {
  const [result] = await pool.query(
    `INSERT INTO users  (name,age)
  VALUES (?,?);`,
    [name, age]
  );
  const idval = result.insertId;
  console.log(idval);
  return getUser(idval)
}


const addPeople = await addUser("Ravi rahul", 23);
console.log(addPeople);

// console.log(details);
