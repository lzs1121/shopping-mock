export default {
  "post /api/login"(req, res, next) {
    const { username, password } = req.body;
    console.log(username, password);
    if (username == "web" && password == "123") {
      return res.json({
        code: 0,
        data: {
          token: "kaikebaisgood",
          role: "admin",
          balance: 1000,
          username: "web"
        }
      });
    }
    if (username == "sean" && password == "123") {
      return res.json({
        code: 0,
        data: {
          token: "kaikebaisgood",
          role: "user",
          balance: 100,
          username: "sean"
        }
      });
    }
    return res.status(401).json({
      code: -1,
      msg: "wrong password"
    });
  }
};
