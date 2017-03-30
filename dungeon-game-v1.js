/* VARIABLES */
var eH = 50; //ENEMY HEALTH
var uH = 10; //PLAYER HEALTH
var slaying = true; //SLAYING STATUS

while(slaying){
    var atk = readLine("Attack Y or N? ");
    var damage = Randomizer.nextInt(10, 20);
    var eDamage = Randomizer.nextInt(0, 5);
    
    if(atk == "Y" || atk == "y"){
        println("YOu attak with " + damage + " damage! ALso, you take " + eDamage + " from the enemy!");
        eH = eH - damage;
        uH = uH - eDamage;
    }
    
    if(atk == "N" || atk == "n"){
        println("Ypu stand your ground, and take " + eDamage + " from the enemy!");
        uH = uH - eDamage;
    }
    
    println("User Health: " + uH);
    println("Enemy Health: " + eH);
    println("");
    
    if(uH <= 0){
        slaying = false;
        println("You fall in battle!");
    }
    
    if(eH <= 0){
        slaying = false;
        println("You hath slain the beast!");
    }
}
