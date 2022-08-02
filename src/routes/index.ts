import  express  from "express";
import { createUser, getAllUsers } from '../controllers/index';

const router = express.Router();

router.post('/CreateNewUser', createUser);
router.post('/GetAllUsers', getAllUsers);


export default router;