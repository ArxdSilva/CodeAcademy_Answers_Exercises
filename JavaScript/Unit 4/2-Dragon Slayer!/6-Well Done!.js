var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random()*5 + 1);
var totalDamage = 0;

while (slaying) {
    if (youHit) {
        totalDamage += damageThisRound;
        console.log("You hit!");
        if (totalDamage >= 4) {
              console.log("You win!");
              slaying = false;
        } else {
              youHit = Math.floor(Math.random() * 2);
        }
    } else {
        console.log("You missed!");
    }
   slaying = false;
}
