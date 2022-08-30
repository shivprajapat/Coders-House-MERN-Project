const hashService = require("../services/hash-service");
const otpService = require("../services/otp-service");

class AuthController {
  async sendOtp(req, res) {
    const { phone } = req.body;
    if (!phone) {
      res.status(400).json({ message: "Phone field is required!" });
    }

    const otp = await otpService.generateOtp();

    const ttl = 1000 * 60 * 2; // 2 min
    const expires = Date.now() + ttl;
    const data = `${phone}.${otp}.${expires}`;
    const hash = hashService.hashOtp(data);

    // send OTP
    try {
      await otpService.sendBySms(phone, otp);
      res.json({
        hash: `${hash}.${expires}`,
        phone,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "message sending failed" });
    }
  }
  async verifyOtp(req, res) {
    const { otp, hash, phone } = req.body;
    if (!otp || !hash || phone) {
      res.status(400).json({ message: "All field is required!" });
    }

    const [hashedOtp, expires] = hash.split(".");
    const data = `${phone}.${otp}.${expires}`;
    const isValid = otpService.verifyOtp(hashedOtp, data);

    if (!isValid) {
      let user;
      let assesToken;
      let refershToken;
    }
  }
}

module.exports = new AuthController();
