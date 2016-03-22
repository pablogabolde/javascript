window.addEventListener("load",function(){
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    var select = document.getElementById("selectTaille");
    var couleur = document.getElementById("selectColor");
    

    var background = new Image();
    background.src = "http://www.journaldugeek.com/wp-content/blogs.dir/1/files/2015/01/aad49e913dd2b90e4aa68bfbefd8a67c_large.jpeg";

   
    background.addEventListener("load", function(){
        context.drawImage(background,0,0,578,200);   
    });
    
    
    
    context.lineWidth = 1;
    context.strokeStyle = '#0000';
    
    //On change la taille en fonction du choix
    select.addEventListener("change", function(){
        console.log("ca change de taille");
        context.lineWidth = select.value;
    });
    
    //On change la couleur en fonction du choix
    couleur.addEventListener("change", function(){
        console.log("ca change de couleur bien");
        context.strokeStyle = couleur.value;
        
    });
    
    
    
    
    
    canvas.addEventListener("mousedown",function(e){
        console.log("mousedown");
        
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        
        var onPaint = function(e){
            console.log("mousemove");
            
            context.beginPath();
            context.moveTo(x,y);
            context.lineTo(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
            context.stroke();
            x = e.pageX - this.offsetLeft;
            y = e.pageY - this.offsetTop;
            
        };
        
        canvas.addEventListener("mousemove",onPaint);
        
        
        canvas.addEventListener("mouseup",function(e){
            console.log("mouseup");

            canvas.removeEventListener("mousemove",onPaint);
        });
        
    });
    
    
    
});
      