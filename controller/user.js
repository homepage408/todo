const connect = require('../config/config')
const { hashing } = require('../common/helper/hash')


class UsersController {
    static async signUp(req, res, next) {
        try {
            const { password, username, email } = req.body
            const { salt, hash } = hashing(password)
            email.toLowerCase()
            console.log(email)

            const existing = await connect.query(`select * from users where email = '${email}'`)
            if (existing) return res.json({ success: false, message: "email is already in use" });

            const push = await connect.query(`insert into users(username,email,password,salt) values($1,$2,$3,$4) RETURNING *`, [username, email, hash, salt], function (err, result) {
                if (err) throw err;
            });

            return res.json({ success: true, message: "account has been registered please login" })

        } catch (e) {
            return res.json({ error: e.message });
        }
    console.log("HAI");}
}

module.exports = UsersController