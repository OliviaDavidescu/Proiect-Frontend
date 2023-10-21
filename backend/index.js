import express from"express";
import mysql from"mysql2";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(
    cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
    })
   );

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "calendarapp1",
    database: "my_database",
});

app.get("/", (req,res) => {
    res.json("Hello")
})

app.get("/signup", (req,res) => {
    const q = "SELECT * FROM clienti"
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post('/signup', (req, res) => {

    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;

    db.query(
        "INSERT INTO clienti (nume_client, prenume_client, email_client, parola_client) VALUES (?,?,?,?)",
        [lastname, firstname, email, password],
        (err, result) => {
            console.log(err);
        }
    );
});

app.post('/signin', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    db.query(
        "SELECT * FROM clienti WHERE email_client = ? AND parola_client = ?",
        [email, password],
        (err, result) => {
            if (err) {
                res.send({err: err});
            }
    
            if (result.length > 0) {
                res.send(result);
                }
            
            else({message: "Wrong username/password comination!"});
            })
        }
    );

app.listen(3001, () => {
    console.log("connected to backend");
})
