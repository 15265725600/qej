(function($) {
  $(function() {
      //首页搜索
      $("#searchUrl").bind("click", searchData);  
  });
})(jQuery);
//首页搜索
function searchData()
{
  var conTop = document.body.clientHeight + "px";
  $(".search_container").css({display: "block",height: conTop,top: "0px"});   
  $("#keyWords").val("");
  if ($("#keyWords").length) {
      $("#keyWords").get(0).focus()
  }
}
//首页取消
function searchCancel()
{
  $(".search_container").css("display", "none");
  $("#keyWords1").val("");
}