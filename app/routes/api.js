var Sport = require('../models/sport');
module.exports = function(router){

	router.post("/sports",function(req,res){
		var news = new Sport();
		news.title=req.body.title;
		news.description=req.body.description;
		news.img_url=req.body.img_url;
		news.url=req.body.url;
		news.save(function(err){
		if(err){
			res.send("Cannot completed!");
			}
		else{
			res.send("request completed!");
			}
		});	
	});

	router.get('/home',function(req,res){
	Sport.find({},function(err,sports){
		if(err)
			throw err;
		res.json(sports);
	});
});

	return router;
}