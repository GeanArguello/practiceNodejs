import  express  from "express";
import { 
    createUser, 
    deleteAllUsers, 
    getAllUsers, 
    getUser, 
    updateUser, 
    deleteUser
} from '../controllers/index';

const router = express.Router();

router.post('/CreateNewUser', createUser);
router.post('/GetAllUsers', getAllUsers);
router.post('/GetUser/:id', getUser);
router.post('/UpdateUser/:id', updateUser);
router.post('/DeleteAllUsers', deleteAllUsers);
router.post('/DeleteUser', deleteUser);


export default router;