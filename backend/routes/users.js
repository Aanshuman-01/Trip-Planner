import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js';
const router=express.Router()

import { verifyAdmin, verifyUser } from "../utils/verifyToken.js"

//update use
 router.put('/:id',verifyUser,updateUser);

 //delete user
 router.delete('/:id',verifyUser,deleteUser);
 
 //getsingle user
 router.get('/:id', verifyUser, getSingleUser);
 
 //getAll users
 router.get('/',verifyAdmin,getAllUser);

export default router
