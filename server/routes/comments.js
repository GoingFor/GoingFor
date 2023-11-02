import { Router } from 'express'
const router = new Router()
import { verifyToken } from '../utils/verifyUser.js';
import { createComment } from '../controllers/comments.js'

// Create Comment
// http://localhost:3002/api/comments/:id
router.post('/:id', verifyToken, createComment)

export default router