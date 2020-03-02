// // fetch("data.json")
// .then((response)=>{
//     return response.json();
// }).then((data)=>{
//     console.log(data);
// })

fetch("info.json")
.then((response)=>{
    return response.json();
}).then((info)=>{
    //console.log(data);
    display_info(info.basics);
})
var bodyElement=document.querySelector("#root");
function display_info(info)
{
    let card=document.createElement("div");
    card.classList.add("card");

    let line1=document.createElement("hr");
    card.append(line1);



    let heading=document.createElement("h2");
    heading.textContent=info.name;
    card.append(heading);
  

    let mail=document.createElement("a");
    mail.href="mailto:"+info.email;
    mail.textContent=info.email;
    card.append(mail);

    let mobile=document.createElement("h2");
    mobile.textContent=info.mobile;
    card.append(mobile);

    bodyElement.append(card);
    
  
    // Console.log(bodyElement)

    let line=document.createElement("hr");
    card.append(line);
    var button=document.createElement("a");
    button.textContent="view profile";
    button.classList.add("bttn");
    card.append(button);


}

