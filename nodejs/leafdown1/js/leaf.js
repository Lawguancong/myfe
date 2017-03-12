
define(function(require,exports,module){
	function Leaf(options){
		this.width=options.width;
		this.left=options.left;

		this.oImg=new Image();
		this.oImg.src="img/"+parseInt(Math.random()*4+1)+".png";
		this.oImg.width=this.width;
		this.oImg.style.left=this.left+"px";
		options.container.appendChild(this.oImg);
		this.fall = function(){

			var that=this;
			setInterval(function(){
				that.oImg.style.top=that.oImg.offsetTop+5+"px";
			},Math.random()*200);

		}
	}

	//Leaf.prototype.fall=function(){
	//	var that=this;
	//	setInterval(function(){
	//		that.oImg.style.top=that.oImg.offsetTop+5+"px";
	//	},Math.random()*200);
	//}


	module.exports=Leaf;
	//return Leaf;
});
