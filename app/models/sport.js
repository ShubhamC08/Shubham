var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var sportSchema=mongoose.Schema({
	title:{
		type:String,
		required:true,
		unique:true
	},
	description:{
		type:String,
		required:true,
		unique:true
	},
	img_url:{
		type:String,
		required:true,
		unique:true
	},
	url:{
		type:String,
		required:true,
		unique:true
	}
});

module.exports=mongoose.model("Sport",sportSchema);