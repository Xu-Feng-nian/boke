// 轮播图   
var mySwiper = new Swiper('.swiper-container', {
  effect: 'coverflow',//设置切换效果
  loop: true,//循环播放
  autoplay: {//自动轮播
    delay: 2000,//设置定时时长，单位毫秒
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // 如果需要滚动条
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
})

// 悬停栏
$(function () {
  $(".list>li").click(function () {
    //1.获取鼠标点击的对象并让当前对象显示
    $(this).addClass("showlist");
    //2.获取当前对象的所有同级的其余元素集合，并隐藏
    $(this).siblings().removeClass("showlist");
    //3.获取当前li元素的索引
    var $index = $(this).index();
    //4.获取对应的ul中的li元素对象
    var $eq = $(".content>li").eq($index);
    //5.设置当前li元素可见
    $eq.addClass("showcontent");
    //6.获取当前对象的所有同级元素的集合，并隐藏
    $eq.siblings().removeClass("showcontent");
  });
});
$(function () {
  var top = $(".list").offset().top;
  $(window).scroll(function () {
    if ($(this).scrollTop() > top) {
      $(".list").css({ "position": "fixed", "top": "0" });
    } else {
      $(".list").css({ "position": "relative" });
    }
  })
})
$(".list li").click(function () {
  $("html,body").animate({
    scrollTop: 1800
  }, 500);
});

// 更多下拉框
var $li = $("#gengzuo");
$li.mouseenter(function () {
  $("ul[id = 'more']").show();
});

$li.mouseleave(function () {
  $("ul[id = 'more']").hide();
});
var $li = $("#more");
$li.mouseenter(function () {
  $("ul[id = 'more']").show();
});

$li.mouseleave(function () {
  $("ul[id = 'more']").hide();
});

// 移动客户端下拉框
var $li = $(".top-move");
$li.mouseenter(function () {
  $("#mobileclient").show();  
});

$li.mouseleave(function () {
  $("#mobileclient").hide();
});

// 排行榜下拉框
var $li = $("#phb");
$li.mouseenter(function () {
  $("#ranking").show();
});

$li.mouseleave(function () {
  $("#ranking").hide();
});
var $li = $("#ranking");
$li.mouseenter(function () {
  $("#ranking").show();
});

$li.mouseleave(function () {
  $("#ranking").hide();
});

// 登录下拉框
var $a = $(".top-login");
$a.mouseenter(function () {
  $("#loginbox").show();
});

$a.mouseleave(function () {
  $("#loginbox").hide();
});
$a = $("#loginbox");
$a.mouseenter(function () {
  $("#loginbox").show();
});

$a.mouseleave(function () {
  $("#loginbox").hide();
});


// 点击回到顶部
var top = 0;
$(window).scroll(function () {
  if ($(window).scrollTop() >= 300) {
    top = $("#gotop").offset().top;
    $("#gotop").slideDown(600);
  } else {
    $("#gotop").fadeOut(0);
  }
});
$("#gotop").click(function () {
  $("html,body").animate({
    scrollTop: 0
  }, 1000);
});
$("#gotop").click(function () {
  $(this).animate({ "top": "0px"},800).animate({"top":"680px"},-1)
})