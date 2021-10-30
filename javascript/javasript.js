
var data_output_tag = document.querySelector("#data_output")

var btn_table_tag = document.querySelector("#btn_table")
var btn_card_tag = document.querySelector("#btn_card")
var ducks_tag = document.querySelector(".ducks")
// setTimeout(duck_fun(),2000)
// function duck_fun(){
//   for(let i=0;i<16;i++){
//     ducks_tag.innerHTML +=`<img src="files/icons/XOsX.gif" width=25 height=70 frameBorder="0" color="#111" allowFullScreen><img src="files/icons/ZLnu.gif" width=25 height=50 frameBorder="0" color="#111" allowFullScreen>`
//   }
// }



var Arry=[]

var tables =` <div class="col-11  m-5">
<h1 class="text-white">User Details<img src="files/icons/ZLnu.gif" width=30 height=60 frameBorder="0" color="#111" allowFullScreen></h1>
<div class="row">
    <table class="table" >
        <thead>
          <tr>
            <th>id</th>
            <th>image</th>
              <th>name</th>
          <th>Email</th>
          <th>gender</th>
          <th>mobile</th>
          <th>Last Login </th>
          <th>Register date</th>
          <th>address </th>
        </tr></thead>
        <tbody id="row_data">
         
        </tbody>
      </table>
      </div>
</div>`
var card=`
        <div class="col">
        <div class="ui link cards" id="card_body">
                
        </div>
        </div>`



var row_data_tag = document.querySelector("#row_data")
let Bank_data=[]
function now_date(){
    const date=new Date()
    const [month, day, year] = [date.getMonth()+1, date.getDate(), date.getFullYear()];
    return month+"-"+day+"-"+year
}
data_output_tag.innerHTML=`<img src="files/icons/ZWdx.gif" style="width:150px;height:250px">`
fetch("json Data/bank_data.json").then(res=>res.json()).then(res=>{
    Bank_date=res.Bank
    setTimeout(getGridBank(),2200)
setTimeout(getListBank(),4000)
    // bank_card_data(Bank_date)  
})

function bank_card_data(data){
    
}



document.querySelector("#date_tage").innerHTML=now_date()
function getListBank(){
    data_output_tag.innerHTML=tables
var row_data_tag = document.querySelector("#row_data")
// row_data_tag.innerHTML=`<img src="https://i.gifer.com/ZZ5H.gif">`

setTimeout(bank_table_date(Bank_date),0)

function bank_table_date(data){
    row_data_tag.innerHTML=""
    data.forEach(element => {
        row_data_tag.innerHTML +=`<tr>
            <td>${element.id}</td>
            <td><img src=${element.image}></td>
            <td>${element.name}</td>
            <td>${element.email}</td>
            <td>${element.gender}</td>
            <td>${element.mobile}</td>
            <td>${element.last_login}</td>
            <td>${element.register_date}</td>
            <td>${element.address.permanent.city}</td>
            </tr>`
    });
    }
    // console.log(Bank_date)
}
function getGridBank(){
    data_output_tag.innerHTML=card
    var card_body_tag =document.querySelector("#card_body")
    Bank_date.forEach(element =>{
        card_body_tag.innerHTML +=`
        <div class="card">
                      <div class="image">
                      <img src=${element.image}>
                      </div>
                      <div class="content" style="background:url(../files/icons/79KE.gif);">
                        <div class="header">${element.name}</div>
                        <div class="meta">
                          <a>${element.email}</a>
                        </div>
                        <div class="description">
                          Matthew is an interior designer living in New York.
                        </div>
                      </div>
                      <div class="extra content">
                        <span class="right floated">
                          Joined in ${element.register_date}
                        </span>
                        <span>
                         
                          ${element.amount} /- Amount
                        </span>
                      </div>
                    </div>
        `
    })
}
var ajax = new XMLHttpRequest();
ajax.open("GET", "import.html", false);
ajax.send();
document.getElementById("other_html").innerHTML += ajax.responseText;