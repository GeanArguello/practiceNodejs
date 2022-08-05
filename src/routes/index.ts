import  express  from "express";
import { 
    createUser, 
    deleteAllUsers, 
    getAllUsers, 
    getUser, 
    updateUser, 
    deleteUser
} from '../controllers/index';

import { register, login, profile } from '../controllers/jwt'


const router = express.Router();


//Crud
router.post('/CreateNewUser', createUser);
router.post('/GetAllUsers', getAllUsers);
router.post('/GetUser/:id', getUser);
router.post('/UpdateUser/:id', updateUser);
router.post('/DeleteAllUsers', deleteAllUsers);
router.post('/DeleteUser', deleteUser);

//Test Json Web Token

router.post('/register', register);
router.post('/login', login);
router.get('/profile', profile);


export default router;