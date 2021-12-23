const userService = require('../services/user');
const tokenService = require('../services/token');

const login = async (req, res) => {
  // Authenticate the user.
  const user = await userService.getUserByUsername(req.body.username);
  if(user === null) {
    res.send(404, 'user not found');
    return;
  } else if (req.body.passphrase !== user.passphrase) {
    res.send(403, 'incorrect passphrase');
    return;
  } else if (user.isLocked === true) {
    res.send(403, 'account locked');
    return;
  }

  // Create a token and send it back to the user.
  const userAccessToken = await tokenService.createAccessTokenForUser(user);
  const responseData = {
    accessToken: userAccessToken,
  };

  res.send(200, responseData);
};

const logout = async (req, res) => {
  // Get the token out of the header.
  const authorization = req.headers['authorization'];
  if (authorization == null) {
    res.send(401);
    return;
  }
  const accessToken = authorization.split(' ')[1];

  // Invalidate the token.
  await tokenService.invalidateToken(accessToken);

  res.send(200);
}

module.exports = {
  login,
  logout,
};
