let btn = document.querySelector("button");
btn.addEventListener("click",async function(){
    let inp = document.querySelector("input");
    let Colarr = await getCollage(inp.value);
    ShowName(Colarr);
    console.log(Colarr)
});
async function ShowName(Colarr){
     document.querySelector("ul").innerText = "";
    for(col of Colarr){
        let li = document.createElement("li");
        li.innerText = col.name;
        document.querySelector("ul").appendChild(li);
    }
   
}
let url = "http://universities.hipolabs.com/search?name=";


// async function getCollage(country){
//     try{
//       let r = await axios.get(url+country);
//       console.log(r);
//     //   alert("ok")
//        return r.data;
//     }
//     catch(error){
//         console.log("Information Not found");
//         return [];
//     }
// }

async function getCollage(country) {
    try{

        const response = await fetch(url+country);
        const movies = await response.json();
        console.log(movies); 
        return movies;   
    }catch{
        console.log(error);
        return [];
    }
  } 