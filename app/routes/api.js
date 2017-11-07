var Sport = require('../models/sport');
module.exports = function(router){

	router.post("/sports",function(req,res){
		var news = new Sport();
		news.title=req.body.title;
		news.description=req.body.description;
		news.img_url=req.body.img_url;
		news.url=req.body.url;
		news.genres=req.body.genres;
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
	}).sort({$natural:-1});
});
	router.get('/sports',function(req,res){
		Sport.find({'genres':'Sports'},function(err,sports){
			if(err)
				throw err;
			res.json(sports);
		}).sort({$natural:-1});
	});
	router.get('/world',function(req,res){
		Sport.find({'genres':'World'},function(err,sports){
			if(err)
				throw err;
			res.json(sports);
		}).sort({$natural:-1});
	});
	router.get('/entertainment',function(req,res){
		Sport.find({'genres':'Entertainment'},function(err,sports){
			if(err)
				throw err;
			res.json(sports);
		}).sort({$natural:-1});
	});
	router.get('/details/:_id',function(req,res){
			console.log('api is running');
			Sport.findById(req.params._id,function(err,sport){
				if(err)
					console.log("error");
				res.json(sport);
			});

	});
	router.put('/edit/:_id',function(req,res){
		console.log('editing is running in api files');
		
		var news = new Sport();
		var id ={_id:req.params._id};
		var update = {
			title: news.title,//eq.body.title,
			description: news.description,//req.body.description,
			img_url : news.img_url,//req.body.img_url,
			url: news.url,//req.body.url,
			genres: news.genres//req.body.genres,
		}
		Sport.findOneAndUpdate(id,update,{},function(err,news){
			if(err)
				throw err;
			res.json(news);
		});

	});
	router.delete('/delete/:_id',function(req,res){
		console.log("deleting ...");
		var query ={_id:req.params._id};
		Sport.remove(query,{},function(err,sport){
			if(err){
				throw err;
			}
			res.json(sport);
		});
	});
	return router;

}