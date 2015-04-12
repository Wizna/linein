//标签页
//http://v3.bootcss.com/javascript/#tabs
$('#myTab a').click(function(e) {
    e.preventDefault();
    $(this).tab('show');
});