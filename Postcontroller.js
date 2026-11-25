import PostService from "./PostService.js";

class PostConteroller {
    async create(req, res) {
        try {
            const post = await PostService.create(req.body)
            res.json(post)
        } catch(e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll()

            return res.json(posts)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params
            const post = await PostService.getOne(id)
            return res.json(post)
        } catch (error) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const post = req.body
            console.log(post._id, post)

            const updatedPost = await PostService.update(post)
            return res.json(updatedPost)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            
            const post = await PostService.delete(id)
            return res.json(post)
        } catch (error) {
            res.status(500).json(e)
        }
    }
}

export default new PostConteroller;