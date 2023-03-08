import express from 'express'
import {getAllUsers, createUser, getUserByID} from '../controllers/user.controller.js'

const router = express.Router();

router.route('/').get(getAllUsers)
router.route('/').post(createUser)
router.route('/:id').get(getUserByID)


export default router