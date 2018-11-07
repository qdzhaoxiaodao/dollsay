var login_name = 'zygg'
	console.log('参数',)
    // sql语句
var sqlMap = {
	//文章
	article:{
    	add: 'insert into article_info(article_title,article_type,article_author,article_time,article_headimg,article_dec,article_content) values (?,?,?,?,?,?,?)',
    	select: 'select * from article_info order by article_time desc limit ?,?',
    	selectDetial:'select * from article_info where id = ?',
    },
    //分类
    classify:{
    	add: 'insert into classify_info(classify_name,classify_img,classify_dec,classify_likenum,classify_type) values (?,?,?,?,?)',
    	check: 'select * from classify_info order by id desc limit ?,?',
    },
    //图片
    img:{
    	add: 'insert into img_info(img_url,img_name,img_classify,img_classifyid) values (?,?,?,?)',
    	check: 'select * from img_info order by id desc limit ?,?',
    	checkone: 'select * from img_info where img_name = ? order by id desc limit ?,?',
    },
    user: {
        add: 'insert into user_info(user_name, user_pwd) values (?,?)',
        check: 'select user_name,user_pwd from user_info',
    },
    message: {
        written: 'insert into message_board(message_list, author, date) values (?,?,?)',
        search: 'select message_list, author, date from message_board'
    },
    diary: {
        written: 'insert into diary_board(diary_list, author, date) values (?,?,?)',
        search_myself: "select * from diary_board where author='" + login_name + "'",
        search_all: 'select * from diary_board'
    },
    comment: {
        written: 'insert into comment(userid, msg_id, comment_message, create_time) values (?,?,?,?)',
        search: 'select userid, msg_id, comment_message, create_time from comment'
    }
}
module.exports = sqlMap;