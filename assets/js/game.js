var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 10;
var enemyAttack = 12;


function fight() {
    window.alert("Weclome to Robbot Gladiators!");
    enemyHealth = enemyHealth - playerAttack;
    console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

    // Subtract the value of `enemyAttack` from the value of `playerHealth` variable
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log( enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.")

  if( playerHealth <= 0) {
      window.alert(playerName + " has died!");
  }else {
      window.alert(playerName + " still has " + playerHealth + " headlth left.");
  }
    
}

fight();