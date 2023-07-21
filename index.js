const cards = ["Guadalupe","Ollie","Aki"]
function writeCards(cards, eventName) {
  let messages = [];
  for (let i = 0; i < cards.length; i++) {
    messages.push(`Thank you, ${cards[i]}, for the wonderful ${eventName} gift!`);
  }
  return messages;
}

function countDown() {
  let i=10;
  while(i>=0){
    console.log(i--);
  }
}