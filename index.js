function countDown(num) {
    while(num >= 0) {
      console.log(num);
      num--
    }
  }
  countDown(10);


  function writeCards()


  let names = ["Ada", "Brendan", "Ali"];
function writeCards(names, birthday) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Thank you, ${names[i]}, for the wonderful ${birthday} gift!`);
  }
  return names;
}
writeCards();