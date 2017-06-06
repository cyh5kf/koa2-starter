var router = require('koa-router')();
var db = require('../config/db');
var user = require('../models/user');

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'koa2 title'
  };

  //根据model自动在数据库中创建表  force：是否强制建表，即删除原来表
  // db.sync({force: true});
  var now = Date.now();
   var data = await user.create({
        id: 'd-' + now,
        userId: '0',
        userName: 'chenyu',
        createdAt: now,
        updatedAt: now
    });
    console.log('created: ' + JSON.stringify(data));

  await ctx.render('index', {
  });
})
module.exports = router;
