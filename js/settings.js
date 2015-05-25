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
      $("section#nickname").text(data.username);
     // $("span#emailaddress").text(data.email);
      //console.log(xhr.getResponseHeader("Danmu-Number"));
      // console.log(data[0].content);
      // $("#emailaddress").text(JSON.stringify(data));
  });
  getPromise.error(function(args) {
      console.error(args);
  });

};

function initialSettings(){
    var channels = "";
    
    chrome.storage.local.get('danmuLimit', function (result) {
        channels = result.danmuLimit;
        $('input#maxnInput').val(channels);
    });
    chrome.storage.local.get('danmuView', function (result) {
        channels = result.danmuView.toString();
      //  alert(channels);
        var ob="hot";
        if(channels.localeCompare("hot") ==0){
          $('input#radio_hot').iCheck('check');
        }else if (channels.localeCompare("new")==0 ){
          $('input#radio_new').iCheck('check');
        }else{
          $('input#radio_rnd').iCheck('check');
        }
    });
    chrome.storage.local.get('danmuEnabled', function (result) {
        channels = result.danmuEnabled+"";
     //   alert(channels);
        if(result.danmuEnabled)
        $('input#useDanmu').iCheck('check');
      else
         $('input#useDanmu').iCheck('uncheck');
    });
}


//标签页
//http://v3.bootcss.com/javascript/#tabs
$('#myTab a').click(function(e) {
    e.preventDefault();
    $(this).tab('show');
});

//iCheck
//http://www.bootcss.com/p/icheck/#skin-square
$(document).ready(function() {
	

    $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
//        increaseArea: '20%'
    });
    initialSettings();
});



$('input#useDanmu').on('ifUnchecked', function(event){
  chrome.storage.local.set({'danmuEnabled': false});
});

$('input#useDanmu').on('ifChecked', function(event){
	//alert($('input[name=viewType]:checked', '#type_group').val()); 
  chrome.storage.local.set({'danmuEnabled': true});
});

$('div#type_group').on('ifChecked', function(event){
 // alert($('input[name=viewType]:checked', '#type_group').val()); 

  chrome.storage.local.set({'danmuView': $('input[name=viewType]:checked', '#type_group').val()+""});
  // var channels = "";
    
  //   chrome.storage.local.get('danmuLimit', function (result) {
  //       channels = result.danmuLimit;
  //       alert(channels);
  //   });
});

$('input#maxnInput').change(function(){
  chrome.storage.local.set({'danmuLimit': $('input#maxnInput').val()});
  // var channels = "";
    
  //   chrome.storage.local.get('danmuLimit', function (result) {
  //       channels = result.danmuLimit;
  //       alert(channels);
  //   });
});
// $('input#maxnInput').on('ifChanged', function(event){
//   //alert($('input[name=viewType]:checked', '#type_group').val()); 
//   chrome.storage.local.set({'danmuLimit': $('input#maxnInput').val()});
//   var channels = "";
    
//     chrome.storage.local.get('danmuLimit', function (result) {
//         channels = result.danmuLimit;
//         alert(channels);
//     });
// });