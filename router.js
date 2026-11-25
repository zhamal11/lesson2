import { Router } from "express";
import Postcontroller from "./Postcontroller.js";

const router = new Router()

router.post('/posts', Postcontroller.create)
router.get('/posts', Postcontroller.getAll)
router.get('/posts/:id', Postcontroller.getOne)
router.put('/postsда', Postcontroller.update)
router.delete('/posts/:id', Postcontroller.delete)

export default router