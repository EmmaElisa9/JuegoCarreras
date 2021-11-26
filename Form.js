class Form{
    constructor(){
        this.button = createButton("play");
        this.input = createInput("enter name");
        this.greeting = createElement("h1");
    }
    display(){
        var title = createElement("h2");
        title.html("hola");
        title.position(600,100);
        this.input.position(600,150);
        this.button.position(600,200);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount++;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("bienvenido "+player.name);
            this.greeting.position(600,250);
        });
    }
    esconder(){
        this.button.hide();
        this.input.hide();
        this.greeting.hide();
    }
}