const argFilter = (num) => {
  // if(args === ""){
  //   return;
  // }
  
  // timeArray = args.map((elem)=>{
  //    return Number(elem) * 1000;
  // })

  if (!isNaN(num) && num > 0) {
    setTimeout(()=>{
      console.log("\x07");
    },num * 1000)
  }



}

const timer = () => {
const numbers = process.argv.slice(2);
  for (const num of numbers){
    argFilter(num);
  }
}

timer();