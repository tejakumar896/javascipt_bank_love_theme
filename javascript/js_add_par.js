let ary=[]
var table_tag=document.getElementById("row_data_ad_par")

fetch("json Data/bank_data.json").then(res=>res.json()).then(res=>{
    ary=res.Bank
    table_data_fun(ary)
    ta_data_perm(ary)
    ta_data_ad_bank(ary)
})

function table_data_fun(data){
    data.forEach(element => {
        table_tag.innerHTML +=`
        <tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.address.present.city}</td>
        <td>${element.address.present.street}</td>
        <td>${element.address.present.colony}</td>
        </tr>
        `
    });
}

var user_permanent_table_tag=document.querySelector(".user_permanent_table")
var ajax = new XMLHttpRequest();
ajax.open("GET", "permanent.html", false);
ajax.send();
user_permanent_table_tag.innerHTML += ajax.responseText;

var row_data_ad_permanent_tag = document.querySelector("#row_data_ad_permanent")
function ta_data_perm(data){
    data.forEach(element => {
        row_data_ad_permanent_tag.innerHTML +=`
        <tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.address.permanent.city}</td>
        <td>${element.address.permanent.street}</td>
        <td>${element.address.permanent.colony}</td>
        </tr>
        `
    });
}

var row_data_ad_bank_tag = document.querySelector("#row_data_ad_bank")
function ta_data_ad_bank(data){
    data.forEach(element => {
        let bank="",account="",ifsc="",amount,name=element.name,id=element.id
        element.bank.forEach(ele=>{
            account+="********"
            bank+=ele.bank_name+","
            account+=ele.bank_account.toString().slice(8)+", ";
            console.log(account)
            ifsc+=ele.IFSC+","
            amount+=ele.amount
        })
        row_data_ad_bank_tag.innerHTML +=`
        <tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${bank}</td>
        <td>${account}</td>
        <td>${ifsc}</td>
        </tr>
        `
    });

}
