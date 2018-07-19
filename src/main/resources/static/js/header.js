function init(){
    $("#navigator>li").click(function (e) {
        e.preventDefault();
          if($("#navigator>li").hasClass("clicked")){
              $("#navigator>li").removeClass("clicked");
          }
          $(this).addClass("clicked");
          $("#content").text($(this).text());
    });
    $("#submitbtn").click(function (e) {
        var $searchContent = $("#searchinput").val();
       if(null !== $searchContent && "" !== $searchContent){
          $.ajax({
              type:"get",
              data:$searchContent,
              url:"www.baidu.com",
              dataType:"html",
              sucess:function(data){
                  var text = "<p>查询成功</p>";
                $("#content").html(text);
              },
              error:function () {
                 alert("ajax请求异常！");
              }
          });
       }
       else alert("please input something to search!");
    });
}