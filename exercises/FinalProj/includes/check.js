

var titlesPic;



function updateReview(event){
    var reviewID = event.target.parentElement.parentElement.className;
    var reviewDesc = document.getElementsByClassName(reviewID)[0].children[0].children[0].value;
    var reviewRate= document.getElementsByClassName(reviewID)[0].children[1].children[0].value;

    var query = "UPDATE tbl_reviews_209 SET Description = '"+reviewDesc+"' , Rating = ' "+reviewRate+"' WHERE ID= "+reviewID+";";
    $.post('query.php', { query: query }, function (res) {//switch to query.php
        if(res == '[]'){
            console.log('error occured1 - username or password are invalid');
        }
        else if (res == "NULL" || res == "null")
            console.log('error occured2 - if there a problem in the query');
        else {
            console.log("success");

        }
    });
}

function deleteReview(event){
    var reviewID = event.target.parentElement.parentElement.className;

    var query = "DELETE FROM tbl_reviews_209 WHERE ID= "+reviewID+";";
    $.post('query.php', { query: query }, function (res) {//switch to query.php
        if(res == '[]'){
            console.log('error occured1 - username or password are invalid');
        }
        else if (res == "NULL" || res == "null")
            console.log('error occured2 - if there a problem in the query');
        else {
            console.log("success");
            document.location.reload(true);        }
    });
}




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

    var url = window.location.href;
    if(url.includes("check")){
    var mainContainer = document.getElementsByClassName("view_main")[0];

    var query= "SELECT Title, pic From tbl_productsAVL_209 WHERE Title IN(SELECT DISTINCT Title FROM tbl_reviews_209 WHERE User = '" + person +"');" ;
    $.post('query.php', { query: query }, function (res) {//switch to query.php
        if(res == '[]'){
            console.log('error occured1 - username or password are invalid');
        }
        if (res == "NULL"){
            console.log('error occured2 - if there a problem in the query');
        }
        else {
            var titlesObj = JSON.parse(res);
            var x = 1000;
            for(var i = 0 ; i< titlesObj.length; ++i){
                var titlePicContainer = document.createElement("div");
                titlePicContainer.className="titlePicContainer";
                mainContainer.append(titlePicContainer);

                

                var titleElem = document.createElement('h3');
                titleElem.innerHTML = titlesObj[i].Title;
                titlePicContainer.append(titleElem);
            
                var link = document.createElement("a");
                link.href = "./edit_review.php?Title="+ titlesObj[i].Title+"";
                titlePicContainer.append(link);

                picElem = document.createElement("img");
                picElem.setAttribute('src',titlesObj[i].pic);
                link.append(picElem);
            }
        }
    });
}
else if (url.includes("edit")){
    
    var queryString = new URLSearchParams(location.search);

    var title = queryString.get('Title');

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
        }
    });

    var query = "SELECT * FROM tbl_reviews_209 WHERE Title='" + title +"'AND User='"+person+"';";
    $.post('query.php', { query: query }, function (res) {//switch to query.php
        if(res == '[]'){
            console.log('error occured1 - username or password are invalid');
        }
        if (res == "NULL")
            console.log('error occured2 - if there a problem in the query');
        else {
            var obj = JSON.parse(res);
            var reviewContainer = document.getElementsByClassName("table")[0];

            for(var i=0; i<obj.length;i++){
                var reviewTR = document.createElement("tr");
                reviewTR.className =obj[i].ID;
                reviewContainer.append(reviewTR);
                
                var descTD = document.createElement("td");
                reviewTR.append(descTD);
                var reviewDecription =  document.createElement("textarea");
                reviewDecription.value = obj[i].Description;
                descTD.append(reviewDecription);
                var ratingTD =document.createElement("td");
                reviewTR.append(ratingTD);
                var reviewRating = document.createElement("input");
                reviewRating.setAttribute("type","number");
                reviewRating.min= 0;
                reviewRating.max= 5;
                reviewRating.value = obj[i].Rating;
                ratingTD.append(reviewRating)

                var buttonsTD = document.createElement("td");
                buttonsTD.className ="text-center";
                reviewTR.append(buttonsTD);

                var firstA = document.createElement("a");
                firstA.classList.add("btn");
                firstA.classList.add("btn-info");
                firstA.classList.add("btn-xs");
                firstA.innerHTML = "Update";
                firstA.addEventListener("click",updateReview);

                buttonsTD.append(firstA);

                var firstSpan =document.createElement("span");
                firstSpan.classList.add("glyphicon");
                firstSpan.classList.add("glyphicon-edit");
                firstA.append(firstSpan);

                var secondA = document.createElement("a");
                secondA.classList.add("btn");
                secondA.classList.add("btn-danger");
                secondA.classList.add("btn-xs");
                secondA.innerHTML = "Del";
                secondA.addEventListener("click",deleteReview);

                buttonsTD.append(secondA);

                var secondSpan =document.createElement("span");
                secondSpan.classList.add("glyphicon");
                secondSpan.classList.add("glyphicon-remove");
                secondA.append(secondSpan);

            }
        }
    });

}
});

 

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
