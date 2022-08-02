import  express  from "express";
import { createUser } from '../controllers/index';

const router = express.Router();

router.get('/CreateNewUser', createUser)


export default router;