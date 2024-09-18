const { sinhalaSub } = require("../index");
async function test(){
     const movie = await sinhalaSub();
     result = await movie.search("O2");
     console.log("Result\n",result);
}
test()