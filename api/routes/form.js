import express from 'express';
import { createform, deleteForm, updateform, getAllRoles } from '../controllers/formcontroller.js';


const router = express.Router()

//create a new form in DB
router.post('/create',createform);
router.patch('/update/:id',updateform)
router.delete('/delete/:id',deleteForm)
router.get('/getAll',getAllRoles)
export default router;


