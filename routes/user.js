/**
 * Created by liaoyunda on 16/11/23.
 */
var router = require('koa-router')();
var t_user_review_config = require('../models/user');
var db = require('../config/db');

router.get('/user/:userId', async function (ctx, next) {
        console.log(`ctx.params.userId: ${ctx.params.userId}`);
    var config = await t_user_review_config.findOne({
        where:{
            userId: ctx.params.userId
        }
    });
    console.log(`config.id+config.userId: ${config.id},${config.userId}, ${config.userName}`);
    ctx.state = {
        userName: config.userName
    };

    await ctx.render('user', {
    });
})
module.exports = router;
