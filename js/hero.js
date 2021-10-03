let canvas = document.querySelector('canvas');
let c = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
c.fillRect(0,0,canvas.width,canvas.height);
function random(min,max){
	return Math.floor(Math.random() * (max - min) + min);
}
function Circle(x,y,radius){
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.draw = function(){
		c.fillStyle = 'rgba(40,225,130,1)';
		c.beginPath();
		c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
		c.fill();
	}
	this.update = function(){
		if(this.y < 0){
			this.y = canvas.height;
		}
		this.y -= random(1,3);
		this.draw();
	}
}
let particles = [];
function init(number){
	canvas.width = window.innerWidth;	
	canvas.height = window.innerHeight;
	for(let i = 0; i < number; i-=-1){
		let radius = random(3,8);	
		let x = random(radius * 6,canvas.width - (radius * 6));
		let y = random(radius,canvas.height - radius);
		particles.push(new Circle(x,y,radius));
	}
}
init(100);
(function animate(){
	requestAnimationFrame(animate);
	c.fillStyle = 'rgba(0,0,0,.3)';
	c.fillRect(0,0,canvas.width,canvas.height);
	particles.forEach(particle => {
		particle.update();
	});
}());
window.addEventListener('resize',() => {
	particles = [];
	init(100);
});