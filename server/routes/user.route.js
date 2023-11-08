import express, { Router } from 'express';
import { deleteUser, test, updateUser,  getUserListings, getUser} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

/* VARIABELN */
const userRouter = Router();

// userRouter.get('/user/test', test);

// http://localhost:3002/api/user/profile
// User anzeigen lassen, löschen, bearbeiten:
// userRouter.get('/user/:id', verifyToken, getUser);
userRouter
    .get('/profile', 
        verifyToken, 
        getUser)
    .put('/update', 
        verifyToken,
        updateUser)
    

// userRouter.post('/user/update/:id', verifyToken, updateUser);
// userRouter.delete('/user/delete/:id', verifyToken, deleteUser);
// userRouter.get('/user/listings/:id', verifyToken, getUserListings);


export default userRouter;