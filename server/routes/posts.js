import { Router } from 'express'
import {
    createPost,
    getAll,
    getById,
    getMyPosts,
    removePost,
    updatePost,
    getPostComments,
} from '../controllers/posts.js'
import { verifyToken } from '../utils/verifyUser.js';
const router = new Router()

// Create Post
// http://localhost:3002/api/posts
router.post('/', verifyToken, createPost)

// Get All Posts
// http://localhost:3002/api/posts
router.get('/', getAll)

// Get Post By Id
// http://localhost:3002/api/posts/:id
router.get('/:id', getById)

// Update Post
// http://localhost:3002/api/posts/:id
router.put('/:id', verifyToken, updatePost)

// Get My Posts
// http://localhost:3002/api/posts/user/me
router.get('/user/me', verifyToken, getMyPosts)

// Remove Post
// http://localhost:3002/api/posts/:id
router.delete('/:id', verifyToken, removePost)

// Get Post Comments
// http://localhost:3002/api/posts/comments/:id
router.get('/comments/:id', getPostComments)

export default router