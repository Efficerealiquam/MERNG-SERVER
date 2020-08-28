const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server');
module.exports = (context) => {
    // context = { ... headers}
    const authHeader = context.req.headers.authorization;
    if (authHeader) {
        //Bearer...   Al parecer cuando pones el 'Bearer dentro del split tienes q poner un ESPACIO 
        const token = authHeader.split('Bearer ')[1];
        if (token) {
            try {
                const user = jwt.verify(token, process.env.SECRET_KEY);
                return user;
            } catch (err) {
                throw new AuthenticationError('Invalid/Expired Token');
            }
        }
        throw new Error(' Authenticacion token must be \'Bearer [token]')
    }
    throw new Error(' Authorization header must be provided')
}