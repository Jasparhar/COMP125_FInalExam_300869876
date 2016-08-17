// Name : Jasdeep Parhar 
// Student Number : 300869876
// App.ts Typescript
// Date :08/17/2016
// Program description : Generates a random dice results on clicking the RollButton

module core {
    "use strict";

    let canvas: HTMLElement;
    let stage: createjs.Stage;


    // app entry function
    function init(): void {
        var assets;
var assetManifest = [
        { id: "Roll", src: "../../Assets/images/rollButton.png" },
        { id: "Label1", src: "../../Assets/images/1.png" },
         { id: "Label2", src: "../../Assets/images/2.png" },
      { id: "Label3", src: "../../Assets/images/3.png" },
     { id: "Label4", src: "../../Assets/images/4.png" },
       { id: "Label5", src: "../../Assets/images/5.png" },
        { id: "Label6", src: "../../Assets/images/6.png" }
            
    ];


 function preload() {
        assets = new createjs.LoadQueue();
        assets.loadManifest(assetManifest);
        assets.on("complete", init);


        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); 
        createjs.Ticker.framerate = 60; 
        createjs.Ticker.on("tick", gameLoop);
        main();
    }
 
    function gameLoop(): void {

        stage.update(); // refreshes the stage
    }

    function main(): void {
          console.log("App started");
        //Label
        Label1 = new objects.Label("1", "40px Consolas", "#000000", 320, 240, true);
        stage.addChild(Label1);
        Labe2 = new objects.Label("2", "40px Consolas", "#000000", 320, 240, true);
        stage.addChild(Label2);
        Labe3 = new objects.Label("3", "40px Consolas", "#000000", 320, 240, true);
        stage.addChild(Label3);
        Labe4 = new objects.Label("4", "40px Consolas", "#000000", 320, 240, true);
        stage.addChild(Label4);
        Labe5 = new objects.Label(".5", "40px Consolas", "#000000", 320, 240, true);
        stage.addChild(Label5);
        Labe6 = new objects.Label("6", "40px Consolas", "#000000", 320, 240, true);
        stage.addChild(Label6);
        
        
        
        
        //buttons
        var Roll = new createjs.Bitmap("../Assets/images/rollButton.png")
        Roll = new objects.Button(assets.getResult("Roll"), 320, 340, true);
        stage.addChild(Roll);
        Roll.on("click", RollButtonCliked, this)
        
    }

    window.addEventListener("load", init);
     function RollButtonClicked(event) {
       if (RollButtonClicked==true)
       {
           var rand=Math.random * assetManifest;
       }
    }

window.addEventListener("load", preload);
})(core || (core = {}));
//# sourceMappingURL=game.ts.map