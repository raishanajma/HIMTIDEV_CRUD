import express from "express";

const router = express.Router();

let users = [
    {
        firstname : 'Taylor', 
        lastname : 'Swift',
        city : 'Nashville'
    },
    {
        firstname : 'Edward', 
        lastname : 'Sheeran',
        city : 'Halifax'
    },
    {
        firstname : 'Olivia', 
        lastname : 'Rodrigo',
        city : 'California'
    },
    {
        firstname : 'Selena', 
        lastname : 'Gomez',
        city : 'Texas'
    }
];

router.get("/", (req, res) => {
    res.send(users);
});

router.post("/", (req, res) => {
    const user = req.body;
    users.push(user);
    res.send(`${user.firstname} ${user.lastname} ADDED`);
});

export default router;