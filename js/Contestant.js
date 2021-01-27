class Contestant {
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.submit = createButton('Submit');
      }
    
      getCount(){
        var contestCountRef = database.ref('contestantCount');
        contestCountRef.on("value",(data)=>{
          contestantCount = data.val();
        })
      }
    
      updateCount(count){
        database.ref('/').update({
          contestCount: count
        });
      }
    
      update(){
        var playerIndex = "Contestants/Contestant" + this.index;
        database.ref(playerIndex).set({
          name:this.name,
          distance:this.distance
        });
      }
    
      static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
          allPlayers = data.val();
        })
      }
      display() {
        this.submit.position(310,300);
        this.submit.mousePressed(()=>{
            this.title.hide();
            this.input1.hide();
            this.submit.hide();
            contestant.name = this.input1.value();
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        })
      }
}