const {
  errorResponse,
  internalServer,
} = require('../shared/generatedResponse');
const messages = require('../utils/constants/messages');

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return errorResponse(res, 401, messages.GENERIC.UNAUTHORIZED);
  try {
    jwt.verify(token, process.env.SECRET_KEY, async (err, user) => {
      if (err) return errorResponse(res, 403, messages.GENERIC.UNAUTHORIZED);
      const session_data = await SessionsService.getSessionByUserId(
        user.userId,
      );
      if (session_data?.token === token) {
        req.userId = user.userId;
        next();
      } else {
        return errorResponse(res, 403, messages.GENERIC.UNAUTHORIZED);
      }
    });
  } catch (err) {
    return internalServer(res, 'PSA01');
  }
};

module.exports = { authenticateToken };
