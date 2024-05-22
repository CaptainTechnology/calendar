let date=document.getElementById("date");
let day=document.getElementById("day");
let month=document.getElementById("month");
let year=document.getElementById("year");


function realtime(){
    setInterval(() => {
    let m=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let week=["Itwar","Peer","Mnagar","Buddh","Jumerat","Juma","Sanichar"];
    let dt=new Date();
    let y=dt.getFullYear();
    let mnt=m[dt.getMonth()];
    let tarikh=(dt.getDate()<10?"0":"")+dt.getDate();
    let d=week[dt.getDay()];
    date.innerHTML=tarikh;
    day.innerHTML=d;
    month.innerHTML=mnt;
    year.innerHTML=y;
}, 1000);
}

realtime();