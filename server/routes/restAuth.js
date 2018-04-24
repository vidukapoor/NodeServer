import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './../utils/constants';
/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @Note : further this can be used as a authrization layer for each request
 * //todo: need to check the session storage at login
 */
function isLoggedIn(req, res, next) {     // jwt authentication
  console.log('req.auth', req.body);
  const { authToken } = req.body;
  console.log(authToken);
  // jwt.verify(authToken, JWT_SECRET, (err, decoded) => {
  //   console.log(decoded, err); // bar
  //   return next();
  // });
  try {
    const decoded = jwt.verify(authToken, JWT_SECRET);
    console.log(decoded);
    return next();
  } catch (err) {
    // err
    console.log(err);
  }
  return res.status(401).json({ success: false, message: 'You are not authenticated' });
}

module.exports = isLoggedIn;

