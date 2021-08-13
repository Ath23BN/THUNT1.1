class Security {
    constructor(){
        this.access1=createInput("code1");
        this.access1.position(140,100);
        

        this.button1=createButton("check");
        this.button1.position(160,170);

        this.access2=createInput("code2");
        this.access2.position(800,200);

        this.button2=createButton("check");
        this.button2.position(800,270);


        this.access3=createInput("code3");
        this.access3.position(500,400);


        this.button3=createButton("check");
        this.button3.position(560,470);
    }

display(){
    this.button1.mousePressed(() => {
        if(system.authenticate(code1,this.access1.value())){
            this.button1.hide();
            this.access1.hide();
            score++;
        }
    });
    this.button2.mousePressed(() => {
        if(system.authenticate(code2,this.access2.value())){
            this.button2.hide();
            this.access2.hide();
            score++;
        }
    });
    this.button3.mousePressed(() => {
        if(system.authenticate(code3,this.access3.value())){
            this.button3.hide();
            this.access3.hide();
            score++;
        }
    });


}


}