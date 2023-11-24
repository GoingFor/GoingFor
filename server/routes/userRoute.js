/** EXTERNE DEPENDENCIES */
import express, { Router } from 'express';

/** IMPORTS */
import { deleteUser, test, updateUser,  getUserListings, getUser, addEventToUser, removeEventFromUser} from '../controllers/userController.js';
import { verifyToken } from '../utils/verifyUser.js';

/* VARIABELN */
const userRouter = Router();

userRouter
    .get('/getdata', 
        verifyToken, 
        getUser)
    .put('/updatedata', 
        verifyToken,
        updateUser)
    .put('/addevent',
        verifyToken,
        addEventToUser)
    .delete('/removeevent',
        verifyToken,
        removeEventFromUser);
    

// userRouter.post('/user/update/:id', verifyToken, updateUser);
// userRouter.delete('/user/delete/:id', verifyToken, deleteUser);
// userRouter.get('/user/listings/:id', verifyToken, getUserListings);


export default userRouter;