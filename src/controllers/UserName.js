class UserName {
    async index(req, res) {
        const { name } = req.body;
        let userName = name;

        if (!name) {
            return res.status(400).json({ error: "Enter a valid name." });
        }

        if (name.match(/l/)) {
            const reverseStrg = name.split("").reverse().join("");
            userName = reverseStrg;
            return res.status(200).json({ name: reverseStrg });
        }

        return res.status(200).json({ name: name.toLowerCase() });
    }
}

module.exports = new UserName();