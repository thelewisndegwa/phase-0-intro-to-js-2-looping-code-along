function countDown(num) {
    while(num >= 0) {
      console.log(num);
      num--
    }
  }
  countDown(10);


 


const name = ["Ada", "Brendan", "Ali"]
function writeCards(name, birthday) {
  for (let i = 0; i < name.length; i++) {
    console.log(`Thank you, ${name[i]}, for the wonderful birthday gift!`)
  }
}
  
writeCards(name)