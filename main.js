var canvas= new fabric.Canvas('myCanvas')
playerx=10
playery=10
blockimgwidth=30
blockimgheight=30
var playerobject=""
var blockimgobject=""
function playerupdate(){
fabric.Image.fromURL("player.png",function(Img){
playerobject=Img
playerobject.scaleToWidth(150);
playerobject.scaleToHeight(150);
playerobject.set({
    top:playery,left:playerx
})
canvas.add(playerobject)
})
}
function newimage(getimage){
    fabric.Image.fromURL(getimage,function(Img){
    blockimageobject=Img
    blockimageobject.scaleToWidth(blockimgwidth)
    blockimageobject.scaleToHeight(blockimgheight);
    blockimageobject.set({
        top:playery,left:playerx
    })
    canvas.add(blockimageobject)
    })
    }
    window.addEventListener("keydown",my_keydown)
    function my_keydown(e){
        keypressed=e.keyCode
        console.log(keypressed)
        if (e.shiftKey==true&&keypressed=='80') {
        console.log("p&shiftkeypressedtogether")    
        blockimgwidth=blockimgwidth+10
        blockimgheight=blockimgheight+10
        document.getElementById("current_width").innerHTML = block_image_width; document.getElementById("current_height").innerHTML = block_image_height;
        }
        if (e.shiftKey==true&&keypressed=='77') {
            console.log("m&shiftkeypressedtogether")    
            blockimgwidth=blockimgwidth-10
            blockimgheight=blockimgheight-10
            document.getElementById("current_width").innerHTML = block_image_width; document.getElementById("current_height").innerHTML = block_image_height;
            }
            if (keypressed=='38') {
            up()   
            }
            if (keypressed=='40') {
                down()   
                }
                if (keypressed=='39') {
                    right()   
                    }  
                    if (keypressed=='37') {
                        left()   
                        }      
                        if (keypressed=='71') {
                            newimage('ground.png')   
                            }
                            if (keypressed=='87') {
                                newimage('wall.jpg')   
                                } 
                                if (keypressed=='76') {
                                    newimage('light_green.png')   
                                    }
                                    if (keypressed=='84') {
                                        newimage('trunk.jpg')   
                                        }
                                        if (keypressed=='82') {
                                            newimage('roof.jpg')   
                                            }   
                                            if (keypressed=='89') {
                                                newimage('yellow_wall.png')   
                                                }
                                                if (keypressed=='68') {
                                                    newimage('dark_green.png')   
                                                    }
                                                    if (keypressed=='85') {
                                                        newimage('unique.png')   
                                                        }
                                                        if (keypressed=='67') {
                                                            newimage('cloud.jpg')   
                                                            }
    }
    function up(){
        if (playery>=0) {
            playery=playery-blockimgheight
            canvas.remove(playerobject)
            playerupdate()
        }
    }
    function down(){
        if (playery<=600) {
            playery=playery+blockimgheight
            canvas.remove(playerobject)
            playerupdate()
        }
    }
    function left(){
        if (playerx>=0) {
            playerx=playerx+blockimgheight
            canvas.remove(playerobject)
            playerupdate()
        }
    }
    function right(){
        if (playerx<=1000) {
            playerx=playerx-blockimgheight
            canvas.remove(playerobject)
            playerupdate()
        }
    }