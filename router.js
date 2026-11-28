import { Router } from "express";
import Postcontroller from "./Postcontroller.js";

const router = new Router()

/**
 * @swagger
 * /posts:
 *   post:
 *     summary: Создать пост
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               picture:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Созданный пост
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 */
router.post('/posts', Postcontroller.create)

/**
 * @swagger
 * /posts:
 *   get:
 *     summary: Получить все посты
 *     responses:
 *       200:
 *         description: Список постов
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Post'
 */
router.get('/posts', Postcontroller.getAll)

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     summary: Получить пост по ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Пост
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 */
router.get('/posts/:id', Postcontroller.getOne)

/**
 * @swagger
 * /posts:
 *   put:
 *     summary: Обновить пост
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Post'
 *     responses:
 *       200:
 *         description: Обновлённый пост
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 */
router.put('/postsда', Postcontroller.update)

/**
 * @swagger
 * /posts/{id}:
 *   delete:
 *     summary: Удалить пост по ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Удалённый пост
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Post'
 */
router.delete('/posts/:id', Postcontroller.delete)

export default router
