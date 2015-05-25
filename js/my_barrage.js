$.ajaxSetup({
  async: false
  });


var barrage_num=0;

function getPersonalInfo(){
  var getPromise = $.ajax({
      url:"http://192.168.1.111:3000/user/israfel",
  //               data:"password=31415926",
      type:"GET",
      // dataType:"application/json",
      beforeSend: function(xhr) {
          xhr.setRequestHeader("Authorization", "Basic aXNyYWZlbDoxMjM0NTY=");
      }
  });
  getPromise.done(function(data) {
   // alert(xhr.getResponseHeader("Danmu-Number"))
      $("span#username").text(data.username);
      $("span#emailaddress").text(data.email);
      //console.log(xhr.getResponseHeader("Danmu-Number"));
      // console.log(data[0].content);
      // $("#emailaddress").text(JSON.stringify(data));
  });
  getPromise.error(function(args) {
      console.error(args);
  });

}

function getBarrageNumber(){
  var getPromise = $.ajax({
      url:"http://192.168.1.111:3000/user/israfel/danmu",
  //               data:"password=31415926",
      type:"HEAD",
      // dataType:"application/json",
      beforeSend: function(xhr) {
          xhr.setRequestHeader("Authorization", "Basic aXNyYWZlbDoxMjM0NTY=");
      }
  });
  getPromise.done(function(data,_,xhr) {
   // alert(xhr.getResponseHeader("Danmu-Number"))
      barrage_num=xhr.getResponseHeader("Danmu-Number");
      console.log(xhr.getResponseHeader("Danmu-Number"));
      // console.log(data[0].content);
      // $("#emailaddress").text(JSON.stringify(data));
  });
  getPromise.error(function(args) {
      console.error(args);
  });

}


function getMyBarrage(){
  var getPromise = $.ajax({
      url:"http://192.168.1.111:3000/user/israfel/danmu",
  //               data:"password=31415926",
      type:"GET",
      // dataType:"application/json",
      beforeSend: function(xhr) {
          xhr.setRequestHeader("Authorization", "Basic aXNyYWZlbDoxMjM0NTY=");
      }
  });
  getPromise.done(function(data) {
      console.log(data[0]);
      console.log(data[4].sendTime);
     // var date=new Date();
      //console.log(date.getMonth());
      var num=getBarrageNumber();
     // alert(barrage_num);
      var ulMyBarrage=document.getElementById("ul-my-barrage");
      for(var i=0;i<barrage_num;i++){
        var addLi = document.createElement("li");
        addLi.className="entry";
        var addCheckbox = document.createElement("input");
        addCheckbox.className="checkbox";
        addCheckbox.type="checkbox";
        var addTime = document.createElement("span");
       // addTime.innerHTML=data[i].sendTime;
       var date1=new Date(data[i].sendTime);
        var date=date1+"";
        
        var date_modi=date.substring(0,date.indexOf(":")+3);
        addTime.innerHTML=date_modi;
        addTime.className="time";
        var addUsername = document.createElement("span");
        addUsername.innerHTML=data[i].username+":";
        addUsername.className="username";
        var addBarContent = document.createElement("div");
        addBarContent.className="bar_content";
        
        var addContent = document.createElement("a");
        addContent.innerHTML=data[i].content;
        var addDomain = document.createElement("div");
        addDomain.className="domain";
        addLi.appendChild(addCheckbox);
        addLi.appendChild(addTime);
        addLi.appendChild(addUsername);
        addLi.appendChild(addBarContent);
        addLi.appendChild(addDomain);
        addBarContent.appendChild(addContent);
        ulMyBarrage.appendChild(addLi);
      }
      // $("#emailaddress").text(JSON.stringify(data));
  });
  getPromise.error(function(args) {
      console.error(args);
  });
}



function request(){ 
        
  var url = location.href;  
  var paraString = url.substring(url.indexOf("#")+1,url.length);  
  return paraString;
}
//如你给出的地址可以这样

var tabNo = request();
        // alert("haode："+tabNo);
        // $("li#tab1").removeClass("active");
        // $("li#tab2").removeClass("active");
        // $("li#tab3").removeClass("active");
        // $("div#content-my-barrage").removeClass("in active");
        // $("div#content-praise-barrage").removeClass("in active");
        // $("div#content-selfinfo").removeClass("in active");
if(tabNo=="content-selfinfo"){

  $("li#tab1").addClass("active");

}else if(tabNo=="content-my-barrage"){
  
$("li#tab2").addClass("active");
}else{
$("li#tab3").addClass("active");
}

$("div#"+tabNo).addClass("in active");
     
getMyBarrage();
getPersonalInfo();
//标签页
//http://v3.bootcss.com/javascript/#tabs
$('#myTab a').click(function(e) {
    e.preventDefault();
    $(this).tab('show');
});

// //iCheck
// //http://www.bootcss.com/p/icheck/#skin-square
// $(document).ready(function() {
//     $('input').iCheck({
//         checkboxClass: 'icheckbox_square-blue',
//         radioClass: 'iradio_square-blue',
// //        increaseArea: '20%'
//     });
// });





