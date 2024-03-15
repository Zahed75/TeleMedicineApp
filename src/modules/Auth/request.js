const adminValidate = (req, res, next) => {
    if (req.user.role === "AM") {
      next();
    } else {
      res.status(401).send("Unauthorized");
    }
  };