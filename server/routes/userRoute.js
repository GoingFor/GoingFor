import express, { Router } from 'express';
import { deleteUser, test, updateUser,  getUserListings, getUser} from '../controllers/userController.js';
import { verifyToken } from '../utils/verifyUser.js';

/* VARIABELN */
const userRouter = Router();

// userRouter.get('/user/test', test);

// http://localhost:3002/api/user/profile
// User anzeigen lassen, bearbeiten:
// userRouter.get('/user/:id', verifyToken, getUser);
userRouter
    .get('/getdata', 
        verifyToken, 
        getUser)
    .put('/updatedata', 
        verifyToken,
        updateUser)
    

// userRouter.post('/user/update/:id', verifyToken, updateUser);
// userRouter.delete('/user/delete/:id', verifyToken, deleteUser);
// userRouter.get('/user/listings/:id', verifyToken, getUserListings);


export default userRouter;