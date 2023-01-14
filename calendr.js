const date=new Date();

function renderDate(){    
// date.setDate(1);
// date.setMonth(1);
const firstDaysStart=date.getDay();

 
//For the last day of this month
const lastDate=new Date(
    date.getFullYear(),
    date.getMonth()+1,
    0,
).getDate();

const PrevMonlastDate=new Date(
    date.getFullYear(),
    date.getMonth(),
    0,

).getDate();
var  today=new Date();




var mon=["January","Feburary","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("month").innerHTML=mon[date.getMonth()];
document.getElementById("date_str").innerHTML=(date.toDateString());
let monthDays=document.getElementsByClassName("days")[0];

let cell="";
for(let x=firstDaysStart;x>0;x--){
    cell+="<div class='prev_dt'>"+(PrevMonlastDate-x+1)+"</div>";  
}

for(i=1;i<=lastDate;i++){
    if(i==today.getDate() && date.getMonth()==today.getMonth()){
        cell+="<div class='today'>"+i+"</div>"; 
    }
    else{
    cell+="<div>"+i+"</div>"; 
    }
    
}
monthDays.innerHTML=cell;
}
function moveDate(para){
    if(para=='next'){
        date.setMonth(date.getMonth()+1);
        
    }
    else if(para=='prev'){
        date.setMonth(date.getMonth()-1);
    }
    renderDate();

}




