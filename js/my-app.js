var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 7500); 
}

var app = new Framework7();
                    
var $$ = Dom7;

// Set the date we're counting down to
var countDownDate = new Date("Dec 27, 2019 08:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000); 




$$('.alert-text').on('click', function () {
    app.alert('Read the content carefully.', 'Notice');
});

$('.text').html(function(i, html) {
  var chars = $.trim(html).split("");

  return '<span>' + chars.join('</span><span>') + '</span>';
});

var mySwiper = new Swiper('.swiper-container', {
    preloadImages: false,
    lazyLoading: true,
    pagination: '.swiper-pagination'
})
// 为便于使用，自定义DOM库名字为$$ - For ease of use, the custom DOM library name is $$
var $$ = Dom7;
var mySwiper = new Swiper('.swiper-container', {
    preloadImages: true,
    lazyLoading: true,
    pagination: '.swiper-pagination'
})
// 添加视图 - Add view
var view1 = app.addView('#view-1', {
    // 让这个视图支持动态导航栏
    dynamicNavbar: true
});
var view2 = app.addView('#view-2', {
    // 让这个视图支持动态导航栏 - Let this view support dynamic navigation bar
    dynamicNavbar: true
});
var view3 = app.addView('#view-3', {
    // 让这个视图支持动态导航栏
    dynamicNavbar: true
});
var view4 = app.addView('#view-4', {
    // 让这个视图支持动态导航栏
    dynamicNavbar: true
});
var view4 = app.addView('#view-5', {
    // 让这个视图支持动态导航栏
    dynamicNavbar: true
});
// 下面代码是给“关于”页面使用的（关于页面加载完毕后触发）- The following code is for the "About" page (triggered after the page is loaded)

// 方式1：通过页面回调 (推荐): - Method 1: Pass the page callback (recommended):
/*
// 方式2：通过pageInit事件处理所有页面
$$(document).on('pageInit', function (e) {
    // 获取页面数据
    var page = e.detail.page;

    //判断是否是“关于”页面
    if (page.name === 'type') {
        myApp.alert('"关于"页面加载完毕2!');
    }
})

*/
$$(document).on('pageInit', '.page[data-page="index-1"]', function (e) {
    init(appData);
})
$$(document).on('pageInit', '.page[data-page="index-2"]', function (e) {
    init(appData);
})
$$(document).on('pageInit', '.page[data-page="index-3"]', function (e) {
    init(appData);
})
$$(document).on('pageInit', '.page[data-page="index-4"]', function (e) {
    init(appData);
})
function appCategory(data) {
    for (var x = 0;x <data.category.length;x++){
        $("#Category").append(getCategory(data.category[x].categoryId)+"<br/>");
    }
}
app.onPageInit('index-4', function (page) {
    alert("search")
})