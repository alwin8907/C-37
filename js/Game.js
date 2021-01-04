class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide()
    Player.getplayerinfo()
    if(allPlayers!=undefined){
      var position=130
      for(var plr in allPlayers){
        if(plr==="player"+player.index){
          fill("blue")
        }else{
          fill("yellow")
        }
        position=position+20
        text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,position)
      }
    }
    if(keyIsDown(UP_ARROW)){
      player.distance=player.distance+20
      player.update()
    }
  }
}
