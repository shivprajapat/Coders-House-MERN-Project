class AuthController {

    sendOtp(req, res) {

    const { phone } = req.body;

    if (!phone) {
        res.status(400).json({ message: 'Phone field is required!' });
    }
    res.send("otp screen")

}
}

module.exports = new AuthController()