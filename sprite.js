var 
s_bird,
s_bg,
s_fg,
s_pipeNorth,
s_pipeSouth,
s_text,
s_score,
s_hscore,
s_splash,
s_buttons,
s_numberS,
s_numberB;

function Sprite(img, x, y, width, height) {
	this.img = img;
	this.x = x*2;
	this.y = y*2;
	this.width = width*2;
	this.height = height*2;
};
Sprite.prototype.draw = function(ctx, x, y) {
	ctx.drawImage(this.img, this.x, this.y, this.width, this.height,
		x, y, this.width, this.height);
};

function initSprites(img_arr) {
	//console.log(img_arr[4].src	);
	s_bird = [
		new Sprite(img_arr[1], 0, 0, 30, 30),
		new Sprite(img_arr[1], 0, 0, 30, 30),
		new Sprite(img_arr[1], 0, 0, 30, 30)
	];
	
	s_bg = new Sprite(img_arr[3], 0, 0, 160, 300);
	s_bg.color = "#70C5CF";
	s_fg = new Sprite(img_arr[9], 0, 0, 110,  56);
	
	s_pipeNorth = new Sprite(img_arr[2], 0, 0, 26, 200);
	s_pipeSouth = new Sprite(img_arr[2], 0, 0, 26, 200);
	
	s_text = {
		GameOver:   new Sprite(img_arr[5], 0, 20, 140, 40),
		GetReady:   new Sprite(img_arr[6], 0, 0, 160, 40)
	}
	s_buttons = {
		Ok:    new Sprite(img_arr[10], 0, 0, 220, 90),
		Start: new Sprite(img_arr[0], 159, 191, 40, 14)
	}

	s_score  = new Sprite(img_arr[7],  0,  0, 140, 43);
	s_hscore  = new Sprite(img_arr[8],  0,  0, 100, 40);
	s_splash = new Sprite(img_arr[0],  0, 130,  59, 33);

	s_numberS = new Sprite(img_arr[4], 0, 9, 7, 9);
	s_numberB = new Sprite(img_arr[4], 0, 9, 7, 9);

	s_numberS.draw = function(ctx, x, y, num,center,padding) {
		num = num.toString();
		var step = this.width + 2;
		if(center){
			x=center-(num.length*step -2)/2;
		}
		if(padding){
			x+=step*(padding-num.length);
		}
		for (var i = 0, len = num.length; i < len; i++) {
			var n = parseInt(num[i]);
			ctx.drawImage(img_arr[4], step*n, this.y, this.width, this.height,
				x, y, this.width, this.height)
			x += step;
		}
	}
	s_numberB.draw = function(ctx, x, y, num,center,padding) {
		num = num.toString();
		var step = this.width + 2;
		if(center){
			x=center-(num.length*step -2)/2;
		}
		if(padding){
			x+=step*(padding-num.length);
		}
		for (var i = 0, len = num.length; i < len; i++) {
			var n = parseInt(num[i]);
			ctx.drawImage(img_arr[4], step*n, this.y, this.width, this.height,
				x, y, this.width, this.height)
			x += step;
		}
	}
}