
// 체크박스 전체선택 및 전체해제
$("#chk_all").click(function() {
 if ($("#chk_all").is(":checked")) {
  $(".chk").prop('checked', true);
} else {
  $(".chk").prop('checked', false);
}
});

// 한개의 체크박스 선택 해제시 전체선택 체크박스도 해제
$(".chk").click(function() {
 if ($("input[name='chk']:checked").length == 2) {
  $("#chk_all").prop('checked', true);
} else {
  $("#chk_all").prop('checked', false);
}
});

/*tab*/

$(".show_hide_btn.off").click(function(){
  $(".show_hide").css("display","none");
  $(".show_hide_btn.on").css("display","block");
  $(".show_hide_btn.off").css("display","none");
});
$(".show_hide_btn.on").click(function(){
  $(".show_hide").css("display","block");
  $(".show_hide_btn.on").css("display","none");
  $(".show_hide_btn.off").css("display","block");
});

/*tab*/
$(".tab1_bt").click(function(){
  $(".tab_view1").css("display","block");
  $(".tab_view2").css("display","none");
  $(".tab_view3").css("display","none");
  $(".tab_view4").css("display","none");
  $(".tab_view5").css("display","none");
  $(".tab_view6").css("display","none");
  $(".tab_view7").css("display","none");
  $(".tab_view8").css("display","none");
});
$(".tab2_bt").click(function(){
  $(".tab_view1").css("display","none");
  $(".tab_view2").css("display","block");
  $(".tab_view3").css("display","none");
  $(".tab_view4").css("display","none");
  $(".tab_view5").css("display","none");
  $(".tab_view6").css("display","none");
  $(".tab_view7").css("display","none");
  $(".tab_view8").css("display","none");
});
$(".tab3_bt").click(function(){
  $(".tab_view1").css("display","none");
  $(".tab_view2").css("display","none");
  $(".tab_view3").css("display","block");
  $(".tab_view4").css("display","none");
  $(".tab_view5").css("display","none");
  $(".tab_view6").css("display","none");
  $(".tab_view7").css("display","none");
  $(".tab_view8").css("display","none");
});
$(".tab4_bt").click(function(){
  $(".tab_view1").css("display","none");
  $(".tab_view2").css("display","none");
  $(".tab_view3").css("display","none");
  $(".tab_view4").css("display","block");
  $(".tab_view5").css("display","none");
  $(".tab_view6").css("display","none");
  $(".tab_view7").css("display","none");
  $(".tab_view8").css("display","none");
});
$(".tab5_bt").click(function(){
  $(".tab_view1").css("display","none");
  $(".tab_view2").css("display","none");
  $(".tab_view3").css("display","none");
  $(".tab_view4").css("display","none");
  $(".tab_view5").css("display","block");
  $(".tab_view6").css("display","none");
  $(".tab_view7").css("display","none");
  $(".tab_view8").css("display","none");
});
$(".tab6_bt").click(function(){
  $(".tab_view1").css("display","none");
  $(".tab_view2").css("display","none");
  $(".tab_view3").css("display","none");
  $(".tab_view4").css("display","none");
  $(".tab_view5").css("display","none");
  $(".tab_view6").css("display","block");
  $(".tab_view7").css("display","none");
  $(".tab_view8").css("display","none");
});
$(".tab7_bt").click(function(){
  $(".tab_view1").css("display","none");
  $(".tab_view2").css("display","none");
  $(".tab_view3").css("display","none");
  $(".tab_view4").css("display","none");
  $(".tab_view5").css("display","none");
  $(".tab_view6").css("display","none");
  $(".tab_view7").css("display","block");
  $(".tab_view8").css("display","none");
});
$(".tab8_bt").click(function(){
  $(".tab_view1").css("display","none");
  $(".tab_view2").css("display","none");
  $(".tab_view3").css("display","none");
  $(".tab_view4").css("display","none");
  $(".tab_view5").css("display","none");
  $(".tab_view6").css("display","none");
  $(".tab_view7").css("display","none");
  $(".tab_view8").css("display","block");
});

/*tabbig*/
$(".tabbig1_bt").click(function(){
  $(".tabbig_view1").css("display","block");
  $(".tabbig_view2").css("display","none");
  $(".tabbig_view3").css("display","none");
  $(".tabbig_view4").css("display","none");
});
$(".tabbig2_bt").click(function(){
  $(".tabbig_view2").css("display","block");
  $(".tabbig_view1").css("display","none");
  $(".tabbig_view3").css("display","none");
  $(".tabbig_view4").css("display","none");
});
$(".tabbig3_bt").click(function(){
  $(".tabbig_view3").css("display","block");
  $(".tabbig_view1").css("display","none");
  $(".tabbig_view2").css("display","none");
  $(".tabbig_view4").css("display","none");
});
$(".tabbig4_bt").click(function(){
  $(".tabbig_view4").css("display","block");
  $(".tabbig_view1").css("display","none");
  $(".tabbig_view2").css("display","none");
  $(".tabbig_view3").css("display","none");
});

/*tabsmall*/
$(".tabsmall1_bt").click(function(){
  $(".tabsmall_view1").css("display","block");
  $(".tabsmall_view2").css("display","none");
  $(".tabsmall_view3").css("display","none");
  $(".tabsmall_view4").css("display","none");
});
$(".tabsmall2_bt").click(function(){
  $(".tabsmall_view2").css("display","block");
  $(".tabsmall_view1").css("display","none");
  $(".tabsmall_view3").css("display","none");
  $(".tabsmall_view4").css("display","none");
});
$(".tabsmall3_bt").click(function(){
  $(".tabsmall_view3").css("display","block");
  $(".tabsmall_view1").css("display","none");
  $(".tabsmall_view2").css("display","none");
  $(".tabsmall_view4").css("display","none");
});
$(".tabsmall4_bt").click(function(){
  $(".tabsmall_view4").css("display","block");
  $(".tabsmall_view1").css("display","none");
  $(".tabsmall_view2").css("display","none");
  $(".tabsmall_view3").css("display","none");
});



/*인풋 달력창*/
$.datepicker.setDefaults({
    dateFormat: 'yy-mm-dd',
    prevText: '이전 달',
    nextText: '다음 달',
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
    showMonthAfterYear: true,
    yearSuffix: '년',
    changeMonth : true,
    changeYear : true,
    yearRange : 'c-70:c+10'

});

$(".datepicker1_img").click(function(){
    $(".datepicker1").focus();
});
$(".datepicker2_img").click(function(){
    $(".datepicker2").focus();
});
$(".datepicker3_img").click(function(){
    $(".datepicker3").focus();
});
$(".datepicker4_img").click(function(){
    $(".datepicker4").focus();
});
$(".datepicker5_img").click(function(){
    $(".datepicker5").focus();
});
$(".datepicker6_img").click(function(){
    $(".datepicker6").focus();
});

$(".datepicker1").datepicker();
$(".datepicker2").datepicker();
$(".datepicker3").datepicker();
$(".datepicker4").datepicker();
$(".datepicker5").datepicker();
$(".datepicker6").datepicker();



$(function() {
    page.init();
})

var page = {
    init: function() {
        page.style();
    },
    style: function() {
        $(".select_box .btn_value").off("click").on("click", function() {
            $(this).parent().toggleClass("active").find(".select_list").stop(true,true).fadeToggle(200);
            return false;
        });
        $(".select").off("change").on("change", function() {
            $(this).parent().parent().find(".btn_value").html($(this).find("option:selected").text());
            if($(this).hasClass("select_url") && this.value != "") {
                location.href = this.value;
            }
        }).each(function() {
            $(this).parent().parent().find(".btn_value").html($(this).find("option:selected").text());
        });
    }
}

function layer_open1() {    
    $("#layer_popup1").bPopup({
        modalClose: false,
        opacity: 0.6,
            positionStyle: 'fixed' //'fixed' or 'absolute'
        });
}

function layer_open2() {    
    $("#layer_popup2").bPopup({
        modalClose: false,
        opacity: 0.6,
            positionStyle: 'fixed' //'fixed' or 'absolute'
        });
}

function layer_open3() {  
  $("#layer_popup3").bPopup({
    modalClose: false,
    opacity: 0.6,
            positionStyle: 'fixed' //'fixed' or 'absolute'
        });
}

function layer_open4() {  
  $("#layer_popup4").bPopup({
    modalClose: false,
    opacity: 0.6,
            positionStyle: 'fixed' //'fixed' or 'absolute'
        });
}

function layer_open5() {  
  $("#layer_popup5").bPopup({
    modalClose: false,
    opacity: 0.6,
            positionStyle: 'fixed' //'fixed' or 'absolute'
        });
}

function layer_open6() {  
  $("#layer_popup6").bPopup({
    modalClose: false,
    opacity: 0.6,
            positionStyle: 'fixed' //'fixed' or 'absolute'
        });
}

function layer_open7() {  
  $("#layer_popup7").bPopup({
    modalClose: false,
    opacity: 0.6,
            positionStyle: 'fixed' //'fixed' or 'absolute'
        });
}

function layer_open8() {  
  $("#layer_popup8").bPopup({
    modalClose: false,
    opacity: 0.6,
            positionStyle: 'fixed' //'fixed' or 'absolute'
        });
}

//* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
  } else {
      dropdownContent.style.display = "block";
  }
});
}
