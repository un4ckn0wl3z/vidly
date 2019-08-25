function admin(req, res, next) {
    if (!req.user.isAdmin) return res.status(403);
    next();
}

module.exports = admin;