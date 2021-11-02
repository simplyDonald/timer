const args = process.argv.slice(2);
const timer = (args) => {
  let timeArray = args;
  for(let secs of timeArray){

    setTimeout(()=>{
      console.log("\007");
    },secs)
  }
}
// forEach(element => console.log("\007"));