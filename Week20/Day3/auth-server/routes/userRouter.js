const { Router } = require('express');
const { verifyAccessToken } = require('../middlewares/verifyToken.js');

const userController = require('../controllers/userController.js');

const router = Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.delete('/logout', verifyAccessToken, userController.logoutUser);

router.get('/all', verifyAccessToken, userController.getUsers);
router.get('/auth', verifyAccessToken, userController.verifyAuth);


module.exports = router;
