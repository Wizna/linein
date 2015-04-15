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
});