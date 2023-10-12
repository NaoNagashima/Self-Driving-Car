class Controls{
    constructor(){
        this.forward = false;
        this.left = false;
        this.right = false;
        this.reverse = false;
    
        this.#addKeyboardListeners();
    }

    #addKeyboardListeners(){
        // these functions as activated when the keys are pressed
        // arrow function (event)=> is the same as function(event) however function() is only scoped with in the function itself
        // meaning this.left isnt being called from the class and instead is being called from the function(i.e. nothing) itself
        document.onkeydown=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left = true;
                    break;
                case "ArrowRight":
                    this.right = true;
                    break;
                case "ArrowUp":
                    this.forward = true;
                    break;
                case "ArrowDown":
                    this.reverse = true;
                    break;
            }
        }
        document.onkeyup=(event)=>{
            switch(event.key){
                case "ArrowLeft":
                    this.left = false;
                    break;
                case "ArrowRight":
                    this.right = false;
                    break;
                case "ArrowUp":
                    this.forward = false;
                    break;
                case "ArrowDown":
                    this.reverse = false;
                    break;
            }
        }
    }
}