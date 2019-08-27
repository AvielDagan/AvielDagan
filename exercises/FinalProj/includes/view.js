
let options = {
	'speed': 3000,
	'pause': true,
}

function slider_function (){
	let slider = document.querySelector('.rbd-review-slider');
	let slides = slider.querySelectorAll('.rbd-review');
	let total  = slides.length;
	let pause  = false;
	
	function pauseSlide(){
		slider.onmouseleave = function(){ pause = false; };
		slider.onmouseenter = function(){ pause = true; };
		return pause;
	}
	
	function slide(){
		if( options.pause && pauseSlide() ) return;
		
		let activeSlide = document.querySelector('.rbd-review-slider .rbd-review.rbd-curr');
		let prev, curr, next, soon;		
		
		curr = activeSlide;
		prev = activeSlide.previousElementSibling;
		next = activeSlide.nextElementSibling;
        
		if( next != null ){
			soon = next.nextElementSibling == null ? slides[0] : next.nextElementSibling;
		} else {
			next = slides[0];
			soon = slides[1];
		}
        if( prev != null ) prev.classList.remove('rbd-prev', 'rbd-curr', 'rbd-next');
		if( curr != null ) curr.classList.remove('rbd-prev', 'rbd-curr', 'rbd-next'); curr.classList.add('rbd-prev');
        if( next != null ) next.classList.remove('rbd-prev', 'rbd-curr', 'rbd-next'); next.classList.add('rbd-curr');
        if( soon != null ) soon.classList.remove('rbd-prev', 'rbd-curr', 'rbd-next'); soon.classList.add('rbd-next');
	}
	
	let slideTimer = setInterval(function(){
		slide();
	}, options.speed);
}


(function(e){var t,o={className:"autosizejs",append:"",callback:!1,resizeDelay:10},i='<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',n=["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent"],s=e(i).data("autosize",!0)[0];s.style.lineHeight="99px","99px"===e(s).css("lineHeight")&&n.push("lineHeight"),s.style.lineHeight="",e.fn.autosize=function(i){return this.length?(i=e.extend({},o,i||{}),s.parentNode!==document.body&&e(document.body).append(s),this.each(function(){function o(){var t,o;"getComputedStyle"in window?(t=window.getComputedStyle(u,null),o=u.getBoundingClientRect().width,e.each(["paddingLeft","paddingRight","borderLeftWidth","borderRightWidth"],function(e,i){o-=parseInt(t[i],10)}),s.style.width=o+"px"):s.style.width=Math.max(p.width(),0)+"px"}function a(){var a={};if(t=u,s.className=i.className,d=parseInt(p.css("maxHeight"),10),e.each(n,function(e,t){a[t]=p.css(t)}),e(s).css(a),o(),window.chrome){var r=u.style.width;u.style.width="0px",u.offsetWidth,u.style.width=r}}function r(){var e,n;t!==u?a():o(),s.value=u.value+i.append,s.style.overflowY=u.style.overflowY,n=parseInt(u.style.height,10),s.scrollTop=0,s.scrollTop=9e4,e=s.scrollTop,d&&e>d?(u.style.overflowY="scroll",e=d):(u.style.overflowY="hidden",c>e&&(e=c)),e+=w,n!==e&&(u.style.height=e+"px",f&&i.callback.call(u,u))}function l(){clearTimeout(h),h=setTimeout(function(){var e=p.width();e!==g&&(g=e,r())},parseInt(i.resizeDelay,10))}var d,c,h,u=this,p=e(u),w=0,f=e.isFunction(i.callback),z={height:u.style.height,overflow:u.style.overflow,overflowY:u.style.overflowY,wordWrap:u.style.wordWrap,resize:u.style.resize},g=p.width();p.data("autosize")||(p.data("autosize",!0),("border-box"===p.css("box-sizing")||"border-box"===p.css("-moz-box-sizing")||"border-box"===p.css("-webkit-box-sizing"))&&(w=p.outerHeight()-p.height()),c=Math.max(parseInt(p.css("minHeight"),10)-w||0,p.height()),p.css({overflow:"hidden",overflowY:"hidden",wordWrap:"break-word",resize:"none"===p.css("resize")||"vertical"===p.css("resize")?"none":"horizontal"}),"onpropertychange"in u?"oninput"in u?p.on("input.autosize keyup.autosize",r):p.on("propertychange.autosize",function(){"value"===event.propertyName&&r()}):p.on("input.autosize",r),i.resizeDelay!==!1&&e(window).on("resize.autosize",l),p.on("autosize.resize",r),p.on("autosize.resizeIncludeStyle",function(){t=null,r()}),p.on("autosize.destroy",function(){t=null,clearTimeout(h),e(window).off("resize",l),p.off("autosize").off(".autosize").css(z).removeData("autosize")}),r())})):this}})(window.jQuery||window.$);

var __slice=[].slice;(function(e,t){var n;n=function(){function t(t,n){var r,i,s,o=this;this.options=e.extend({},this.defaults,n);this.$el=t;s=this.defaults;for(r in s){i=s[r];if(this.$el.data(r)!=null){this.options[r]=this.$el.data(r)}}this.createStars();this.syncRating();this.$el.on("mouseover.starrr","span",function(e){return o.syncRating(o.$el.find("span").index(e.currentTarget)+1)});this.$el.on("mouseout.starrr",function(){return o.syncRating()});this.$el.on("click.starrr","span",function(e){return o.setRating(o.$el.find("span").index(e.currentTarget)+1)});this.$el.on("starrr:change",this.options.change)}t.prototype.defaults={rating:void 0,numStars:5,change:function(e,t){}};t.prototype.createStars=function(){var e,t,n;n=[];for(e=1,t=this.options.numStars;1<=t?e<=t:e>=t;1<=t?e++:e--){n.push(this.$el.append("<span class='glyphicon .glyphicon-star-empty'></span>"))}return n};t.prototype.setRating=function(e){if(this.options.rating===e){e=void 0}this.options.rating=e;this.syncRating();return this.$el.trigger("starrr:change",e)};t.prototype.syncRating=function(e){var t,n,r,i;e||(e=this.options.rating);if(e){for(t=n=0,i=e-1;0<=i?n<=i:n>=i;t=0<=i?++n:--n){this.$el.find("span").eq(t).removeClass("glyphicon-star-empty").addClass("glyphicon-star")}}if(e&&e<5){for(t=r=e;e<=4?r<=4:r>=4;t=e<=4?++r:--r){this.$el.find("span").eq(t).removeClass("glyphicon-star").addClass("glyphicon-star-empty")}}if(!e){return this.$el.find("span").removeClass("glyphicon-star").addClass("glyphicon-star-empty")}};return t}();return e.fn.extend({starrr:function(){var t,r;r=arguments[0],t=2<=arguments.length?__slice.call(arguments,1):[];return this.each(function(){var i;i=e(this).data("star-rating");if(!i){e(this).data("star-rating",i=new n(e(this),r))}if(typeof r==="string"){return i[r].apply(i,t)}})}})})(window.jQuery,window);$(function(){return $(".starrr").starrr()})

var title;
var person;
$(function(){

  $('#new-review').autosize({append: "\n"});

  var reviewBox = $('#post-review-box');
  var newReview = $('#new-review');
  var openReviewBtn = $('#open-review-box');
  var closeReviewBtn = $('#close-review-box');
  var ratingsField = $('#ratings-hidden');

  openReviewBtn.click(function(e)
  {
    reviewBox.slideDown(400, function()
      {
        $('#new-review').trigger('autosize.resize');
        newReview.focus();
      });
    openReviewBtn.fadeOut(100);
    closeReviewBtn.show();
  });

  closeReviewBtn.click(function(e)
  {
    e.preventDefault();
    reviewBox.slideUp(300, function()
      {
        newReview.focus();
        openReviewBtn.fadeIn(200);
      });
    closeReviewBtn.hide();
    
  });

  $('.starrr').on('starrr:change', function(e, value){
    ratingsField.val(value);
  });
});



$("#submitRate").on("click", function(event){
    var query= "INSERT INTO tbl_reviews_209(Title,User,Description,Rating) VALUES('"+title+"','"+person+"','"+document.getElementById("new-review").value+"',"+(document.getElementById("ratings-hidden").value).toString()+");";
    $.post('query.php', { query: query }, function (res) {//switch to query.php
        if(res == '[]'){
            console.log('error occured1 - username or password are invalid');
        }
        else if (res == "NULL" || res == "null")
            console.log('error occured2 - if there a problem in the query');
        else {
            console.log("success");
            var reviewBox = $('#post-review-box');
            var openReviewBtn = $('#open-review-box');
            var closeReviewBtn = $('#close-review-box');
            reviewBox.slideUp(300, function()
            {
              newReview.focus();
              openReviewBtn.fadeIn(200);
            });
            closeReviewBtn.hide();
        }
    });
   
});


$(document).ready(function(){

    var pl = 1;
    var imagePerson = document.getElementById("personLink" +pl);
     person = imagePerson.innerText.substring(1, imagePerson.innerText.length);
    var query = "SELECT Image FROM tb_users_209_1 WHERE username='"+person+"';";
    getImage(query,pl);
    pl++;

    var imagePerson = document.getElementById("personLink" +pl);
     person = imagePerson.innerText.substring(1, imagePerson.innerText.length);
    var query = "SELECT Image FROM tb_users_209_1 WHERE username='"+person+"';";
    getImage(query,pl);
    pl++;

    var queryString = new URLSearchParams(location.search);

    title = queryString.get('Title');
    var query = "SELECT * FROM tbl_productsAVL_209 WHERE Title='" + title +"';";
    $.post('query.php', { query: query }, function (res) {//switch to query.php
        if(res == '[]'){
            console.log('error occured1 - username or password are invalid');
        }
        if (res == "NULL")
            console.log('error occured2 - if there a problem in the query');
        else {
            var obj = JSON.parse(res)[0];
            $(".imgName").attr('src', obj.pic);
            $(".titleName").text(obj.Title);
            $(".mealDesc").text(obj.Description);

        }
    });

    query = "SELECT * FROM tbl_reviews_209 WHERE Title='" + title +"';";
    $.post('query.php', { query: query }, function (res) {//switch to query.php
        if(res == '[]'){
            console.log('error occured1 - username or password are invalid');
        }
        if (res == "NULL")
            console.log('error occured2 - if there a problem in the query');
        else {
            var obj = JSON.parse(res);
            var container = document.getElementsByClassName("rbd-review-container")[0];
            for( var i = 0; i<obj.length; ++i){
                var reviewNum = document.createElement("div");
                reviewNum.classList.add('rbd-review');
                reviewNum.classList.add('review1.'+(i+1).toString());
                if( i == 0 ){
                    reviewNum.classList.add('rbd-curr');
                } else if(i == 1){
                    reviewNum.classList.add('rbd-next');
                }
                container.append(reviewNum);
                var iconStar = document.createElement("i");
                iconStar.className = "renderSVG";
                reviewNum.append(iconStar);
                for(var j = 0; j<obj[i].Rating; ++j){
                    var _iconStar = document.createElement("i");
                    _iconStar.classList.add("fa");
                    _iconStar.classList.add("fa-star");
                    iconStar.append(_iconStar);
                }
                var contentReview = document.createElement("div");
                contentReview.className = "rbd-content";
                contentReview.innerHTML = obj[i].Description;


                reviewNum.append(contentReview);
                var userReview = document.createElement("div");
                userReview.className= "rbd-review-meta";
                userReview.innerHTML = " Written By: " +obj[i].User;
                reviewNum.append(userReview);

            }
                slider_function();
        }

    });



});

var updateMeal = function() {
    var title = $('#inputMeal').val();
    var des = $('#inputIngredients').val();
    var pic = $('#imageURL').val();
    var type1;
    var type2;
    var type3;
    var type;
    if(document.getElementById('inputType1').checked){
        type1 = $('#inputType1').val();
        type = $('#inputType1').next()[0].innerText;
    }
    if(document.getElementById('inputType2').checked){
        type2 = $('#inputType2').val();
        type = $('#inputType2').next()[0].innerText;
    }
    if(document.getElementById('inputType3').checked){
        type3 = $('#inputType3').val();
        type = $('#inputType3').next()[0].innerText;
    }
    

    var query = "UPDATE tbl_products_209 SET Description = '"+des+"',Type = '"+type+"',pic = '"+pic+"' WHERE Title = '" +title+"';";
    $.post('query.php', { query: query }, function (res) {//switch to query.php
        if (res == "NULL"){
            console.log('error occured');
        }
        else {
            console.log("Product succesfuly inserted into the Data Base");
            window.location = "./myMenu.php";
        }
    });
};

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


  var getImage = function(query,pl){
    $.post('query.php', { query: query }, function (res) {//switch to query.php
        if(res == '[]'){
            console.log('error occured1 - username or password are invalid');
        }
        else if (res == "NULL"){
            console.log('error occured2 - if there a problem in the query');
        }
        else {
            obj = JSON.parse(res)[0];//make res an JSON object

            document.getElementById("personImage" + pl).className = "circle";
            $("#personImage" + pl).attr("width","25px");
            $("#personImage" + pl).attr("height","25px");
            $("#personImage" + pl).attr("src", obj.Image);
        }
    });
} 
