const router = require('express').Router();
const { Posts } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Posts.create({
            ...req.body,
            userId: req.session.user_id,
        });

        res.status(200).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;