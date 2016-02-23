var user = prompt("What's your name?").toLowerCase();

switch (user) {
  case 'arthur':
    if (1 + 1 == 2 && 1 == 1) {
      console.log('BR HU3');
    } else {
      console.log('HU3 BR');
    }
    console.log("Hey, brother!");
    break;
  case 'Gaby':
    if (1 - 1 == 0 || 1 == 1) {
      console.log("I've been waiting for you...");
    }
    console.log("I've made a huge mistake.");
    break;
  case 'Rachel':
    console.log("Steve Holt!");
    break;
  default:
    console.log("Not a good name :( ");
}
