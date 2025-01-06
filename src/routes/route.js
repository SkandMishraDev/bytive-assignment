import {Router} from "express";
import {createTask, deleteTask, getTask, updateTask, getAllTask} from'../controllers/task.controller.js'
const router = Router();


router.route('/todo').post(createTask)
router.route('/todo/:id').put(updateTask)
router.route('/todo/get').get(getAllTask)
router.route('/todo/get/:id').get(getTask)
router.route('/todo/:id').delete(deleteTask)

export default router