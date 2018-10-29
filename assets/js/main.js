var p=0;

function calculate(product){
    var count = prompt("ใส่จำนวนของสินค้า");
// Berry Icecream
    if(product==1){
        total = parseInt(count)*60;
        document.getElementById('rowCount').innerHTML += count + "<br/>";
        document.getElementById('rowName').innerHTML += "Berry Icecream<br/>";
        document.getElementById('rowPrice').innerHTML += "60<br/>";
        document.getElementById('rowTotal').innerHTML += total+"<br/>";
        document.getElementById('store').innerHTML = total;

// Chocolate Cake
    }else if(product==2){
        total = parseInt(count)*120;
        document.getElementById('rowCount').innerHTML += count+"<br/>";
        document.getElementById('rowName').innerHTML += "Chocolate Cake<br/>";
        document.getElementById('rowPrice').innerHTML += "120<br/>";
        document.getElementById('rowTotal').innerHTML += total + "<br/>";
        document.getElementById('store').innerHTML = total;

// Cup Cake
    }else if(product==3){
        total = parseInt(count)*40;
        document.getElementById('rowCount').innerHTML += count+"<br/>";
        document.getElementById('rowName').innerHTML += "Cup Cake<br/>";
        document.getElementById('rowPrice').innerHTML += "40<br/>";
        document.getElementById('rowTotal').innerHTML += total + "<br/>";
        document.getElementById('store').innerHTML = total;

// Donut
    }else if(product==4){
        total = parseInt(count)*29;
        document.getElementById('rowCount').innerHTML += count+"<br/>";
        document.getElementById('rowName').innerHTML += "Donut<br/>";
        document.getElementById('rowPrice').innerHTML += "29<br/>";
        document.getElementById('rowTotal').innerHTML += total + "<br/>";
        document.getElementById('store').innerHTML = total;

// Macaroon
    }else if(product==5){
        var total = parseInt(count)*40;
        document.getElementById('rowCount').innerHTML += count+"<br/>";
        document.getElementById('rowName').innerHTML += "Macaroon<br/>";
        document.getElementById('rowPrice').innerHTML += "40<br/>";
        document.getElementById('rowTotal').innerHTML += total + "<br/>";
        document.getElementById('store').innerHTML = total;
    }
}

$("#cal").click(function(){
    var value = parseInt($("#store").text());
    // console.log(value);
    if(value >= 0 && p == 0){
        p = value;
        // console.log(p);
        document.getElementById('store').innerHTML = " ";
    }else if(value >= 0 && p >= 0){
        p += value;
        // console.log(p);
        document.getElementById('store').innerHTML = " ";
    }
    document.getElementById('allTotal').innerHTML = p;
});

