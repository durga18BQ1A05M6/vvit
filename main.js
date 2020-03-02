// // fetch("data.json")
// .then((response)=>{
//     return response.json();
// }).then((data)=>{
//     console.log(data);
// })

fetch("data.json")
.then((response)=>{
    return response.json();
}).then((data)=>{
    //console.log(data);
    display_info(data.basics);
})
var bidyElement=document.querySelector("#root");
function display_info(info)
{
    let heading=document.createElement(" h2");
    heading.textContent=info.name;
}

