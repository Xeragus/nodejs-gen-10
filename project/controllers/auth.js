module.exports = {
  register: (req, res) => {
    res.send({
      message: 'POST on /api/v1/auth/register'
    });
  },
  login: (req, res) => {
    res.send({
      message: 'POST on /api/v1/auth/login'
    });
  }
};