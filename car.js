class Car{
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;

        this.speed = 0;
        this.acceleration = 0.2;
        this.maxSpeed = 3;
        this.friction = 0.05;
        this.angle = 0;

        this.controls = new Controls();
    }

    update(){
        this.#move();
    }

    #move(){
        if (this.controls.forward){
            this.speed += this.acceleration;
        }
        if (this.controls.reverse){
            this.speed -= this.acceleration;
        }

        if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
        if (this.speed <- this.maxSpeed/2){
            this.speed =- this.maxSpeed/2;
        }

        if (this.speed>0){
            this.speed -= this.friction;
        }
        if (this.speed<0){
            this.speed += this.friction;
        }
        if (Math.abs(this.speed) < this.friction){ // we need this so that the friction doesnt move the car on its own
            this.speed = 0;
        }
        
        if (this.speed != 0){// we want to only change angle when moving forwards or backwards
            const flip = this.speed > 0?1:-1; // this speed is 1 or -1 depending on the speed
            if (this.controls.left){
                this.angle += 0.03 * flip;
            }
            if (this.controls.right){
                this.angle -= 0.03 * flip;
            }
        }

        this.x -= Math.sin(this.angle)*this.speed;
        this.y -= Math.cos(this.angle)*this.speed;
    }

    draw(ctx){
        ctx.save(); // save the canvas
        ctx.translate(this.x, this.y); // move the car by the coordinates
        ctx.rotate(-this.angle);// rotate the car by the angles

        ctx.beginPath();// this just says to begin drawing
        ctx.rect(
            -this.width/2, 
            -this.height/2,
            this.width,
            this.height
        );
        ctx.fill();

        ctx.restore(); // stops movement so it doesnt continously rotate
    }
}