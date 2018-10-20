var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');

//使用连接池链接数据库

var pool = mysql.createPool(models.mysql);

var jsonWrite = function(res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};
//获取文章
router.use('/getArticle', (req, res) => {
    var sql = $sql.article.select;
    var params = req.body;
    console.log(params);
    var pageSize = params.pageSize;
    var pageNum = params.pageNum;
    var ini = (pageNum-1)*pageSize;
    pool.query(sql, [ini,pageSize], function(error, results, fields) {
        if (error) throw error;
        if (results) {
            console.log(results)
            jsonWrite(res, results);
        }
    })
});
//添加文章
router.use('/addArticle', (req, res) => {
    var sql = $sql.article.add;
    var params = req.body;
    console.log(params);
    pool.query(sql, [params.title,params.type,params.author,params.time,params.headimg,params.dec,params.content], function(error, results, fields) {
        if (error) throw error;
        if (results) {
            console.log(results)
            jsonWrite(res, results);
        }
    })
});
//查询分类
router.use('/searchCalssify', (req, res) => {
    var sql = $sql.classify.check;
    var params = req.body;
    pool.query(sql, [params.name,params.id], function(error, results, fields) {
        if (error) throw error;
        if (results) {
            console.log(res,results)
            jsonWrite(res, results);
        }
    })
});
//添加分类
router.use('/addClassify', (req, res) => {
    var sql = $sql.classify.add;
    var params = req.body;
    console.log(params);
    pool.query(sql, [params.classifyname], function(error, results, fields) {
        if (error) throw error;
        if (results) {
            console.log(results)
            jsonWrite(res, results);
        }
    })
});
//查询图片
router.use('/searchImg', (req, res) => {
    var sql = $sql.img.check;
    var params = req.body;
    pool.query(sql, [params.imgurl,params.name], function(error, results, fields) {
        if (error) throw error;
        if (results) {
            console.log(res,results)
            jsonWrite(res, results);
        }
    })
});
//添加图片
router.use('/addImg', (req, res) => {
    var sql = $sql.img.add;
    var params = req.body;
    console.log(params);
    pool.query(sql, [params.imgurl,params.name,params.classify,params.classifyid], function(error, results, fields) {
        if (error) throw error;
        if (results) {
            console.log(results)
            jsonWrite(res, results);
        }
    })
});
module.exports = router;