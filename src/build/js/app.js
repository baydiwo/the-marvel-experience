$(document).ready(function(){
   setTimeout(function(){

    $("#signup_popup").css("top", "50%");

   },1000);


  $('#nav_button_right').click(function(e) {
    e.preventDefault();
    $("#ember936 , #ember916").hide();

    var error = false;
    var errorsStep2 = false;

    // if ($("#Email").hasClass("error") || $("#Password").hasClass("error") || $("#ConfirmPassword").hasClass("error") || $("#BirthDate").hasClass("error")) {
    //   error = true;
    // }

    if (jQuery("#Email").val() == "" || !isValidEmailAddress(jQuery("#Email").val()))
    {
       error = true;
       jQuery("#Email").addClass("error");
    }
    if (jQuery("#Password").val() == "" || (jQuery("#Password").val() != jQuery("#ConfirmPassword").val()))
    {
       error = true;
       jQuery("#Password").addClass("error");
    }

    var dateString = jQuery("#BirthDate").val();
    var myDate = new Date(dateString);
    var today = new Date();
    if ( myDate > today ) {
        $('#BirthDate').addClass("error");
        alert("You cannot enter a date in the future!.");
        error = true;
    }
    else {
      window.birthDay = myDate;
    }

    if (error == false) {
      if (window.CURRENT_PAGE === 1) {
        window.CURRENT_PAGE = 2;

        var now = new Date(window.birthDay);

        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);

        var today = now.getFullYear()+"-"+(month)+"-"+(day) ;

        $("#BirthDateUser").val(today);

        $("#ember582").css("display", "none");
        $("#ember745").css("display", "block");
        $("#nav_button_left").addClass("active");
        $("#level").text("0");
        $("#xp").text("100");
        $("#menubar2").addClass("active");
      }
      else if (window.CURRENT_PAGE === 2) {

        if ($("#FirstName").val() === ""){
          $("#FirstName").addClass("error");
          errorsStep2 = true;
        } else if ($("#LastName").val() === ""){
          $("#LastName").addClass("error");
          errorsStep2 = true;
        } else if ($("#Height").val() === ""){
          $("#Height").addClass("error");
          errorsStep2 = true;
        } else if ($("#ember751").val() === ""){
          $("#ember751").addClass("error");
          errorsStep2 = true;
        } else if ($("#ember752").val() === ""){
          $("#ember752").addClass("error");
          errorsStep2 = true;
        } else if (window.selectedEyeColor === ""){
          $("#ember762").addClass("error");
          errorsStep2 = true;
        } else if (window.selectedGender === ""){
          $("#ember763").addClass("error");
          errorsStep2 = true;
        } else if (window.selectedSpecies === ""){
          $("#ember764").addClass("error");
          errorsStep2 = true;
        } else if ($("#IssueLocation").val() === ""){
          $("#IssueLocation").addClass("error");
          errorsStep2 = true;
        } else {
         errorsStep2 = false;
        }

        if (errorsStep2 === false) {
          window.CURRENT_PAGE = 3;
          $("#ember745").css("display", "none");
          $("#ember849").css("display", "block");
          $("#nav_button_left").addClass("active");
          $("#level").text("0");
          $("#xp").text("100");
          $("#menubar3").addClass("active");
        }

      }
      else if (window.CURRENT_PAGE === 3) {

        if(window.selectedHero !== "") {
          sendData()
        } else {
          alert("please choose your hero!");
        }
      }
    }
  });

  $('#nav_button_left').click(function(e) {
    e.preventDefault();
    $("#ember936 , #ember916").hide();

    if (window.CURRENT_PAGE === 1) {
      $("#ember582").css("display", "block");
      $("#ember745").css("display", "none");
      $("#nav_button_left").removeClass("active");
      $("#nav_button_right").addClass("active");
    } else if (window.CURRENT_PAGE === 2) {
      $("#ember745").css("display", "block");
      $("#ember849").css("display", "none");
      window.CURRENT_PAGE = 1;
    } else if (window.CURRENT_PAGE === 3) {
      $("#ember849").css("display", "block");
      $("#ember894").css("display", "none");
      window.CURRENT_PAGE = 2;
    }
  });

  $("#toc").click(function(e) {
    e.preventDefault();
    $("#ember936").show();
    $("#ember745 , #ember849, #ember894, #ember916 , #ember582").hide();
  });
  $("#policy").click(function(e) {
    e.preventDefault();
    $("#ember916").show();
    $("#ember745 , #ember849, #ember894, #ember936 , #ember582").hide();
  })

  function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
  }

  $("#Email").change(function() {
    if ($("#Email").val() != "" && isValidEmailAddress($("#Email").val())) {
      $("#Email").removeClass("error");
    } else {
      $("#Email").addClass("error");
    }
  });

  $("#Password").change(function() {
    if ($("#Password").val().length < 5) {
      $("#Password").addClass("error");
    } else {
      $("#Password").removeClass("error");
    }
  });

  $("#ConfirmPassword").change(function() {
    if ($("#ConfirmPassword").val() != $("#Password").val()) {
      $("#ConfirmPassword").addClass("error");
    } else {
      $("#ConfirmPassword").removeClass("error");
    }
  });

  $("#BirthDate").change(function() {
    if (Date.parse($("#BirthDate").val())) {
      $("#BirthDate").removeClass("error");
    } else {
      $("#BirthDate").addClass("error");
    }
  });

  // $("#height").change(function() {
  //   if ($("#height").val() == "") {
  //     $("#height").addClass("error");
  //   } else {
  //     $("#height").removeClass("error");
  //   }
  // });



  // show eye option
  $("#ember762").on('click', function(e) {
    e.preventDefault();
    var eyeDiv = $("#ember762 .graphic_select_items");
    if (eyeDiv.css('display') == 'block'){
      eyeDiv.hide();
    } else {
      eyeDiv.show();
      getSelectedItem("ember762", "eye");
    }
  });

  $("#ember763").on('click', function(e) {
    e.preventDefault();
    var genderDiv = $("#ember763 .graphic_select_items");
    if (genderDiv.css('display') == 'block'){
      genderDiv.hide();
    } else {
      genderDiv.show();
      getSelectedItem("ember763", "gender");
    }
  });

  $("#ember764").on('click', function(e) {
    e.preventDefault();
    var genderDiv = $("#ember764 .graphic_select_items");
    if (genderDiv.css('display') == 'block'){
      genderDiv.hide();
    } else {
      genderDiv.show();
      getSelectedItem("ember764", "species");
    }
  });

  $("#Password").change(function() {
    if ($("#Password").val().length < 5) {
      $("#Password").addClass("error");
    } else {
      $("#Password").removeClass("error");
    }
  });

  // function to get data from selected eye
  function getSelectedItem(emberId, type) {
    $("#"+emberId+" .graphic_select_items .item").on('click',function(e) {
      e.preventDefault();
      var id = $(this).data('ember-action');
      setSelected(id , type);
    });
  }

  function setSelected(id , type) {
    if (type === "eye") {
      var theId = _.find(window.AVAILABLE_EYE_COLORS, ['id', id]);
      window.selectedEyeColor = theId.label;
      $("#selectedEyeColor").attr("src", "/static/images/eye_colors/" + theId.id + ".jpg");
    }
    if (type === "gender") {
      var theId = _.find(window.AVAILABLE_GENDERS, ['id', id]);
      window.selectedGender = theId.label;
      $("#selectedGender").attr("src", "/static/images/gender/" + theId.id + ".jpg");
    }
    if (type === "species") {
      var theId = _.find(window.AVAILABLE_SPECIES, ['id', id]);
      window.selectedSpecies = theId.label;
      $("#selectedSpecies").attr("src", "/static/images/species/" + theId.id + ".jpg");
    }
  }


  $(".select_hero a").on('click',function(e) {
    e.preventDefault();
    var find = $(".select_hero").find(".selected");
    if(find.length > 0) {
      $(".select_hero a").removeClass("selected");
    }
    else {
      $(this).addClass("selected");
    }

    var id = $(this).data('ember-action');
    window.selectedHero = id;
  });


  function sendData() {
  $('#overlay').css("display", "block");
  var url = "https://users.smartag.us/api/UserPortal";

  var userDateString = jQuery("#BirthDateUser").val();
  var userBirthday = new Date(userDateString);

  jQuery.ajax({
      url: url,
      type:"POST",
      data: JSON.stringify({
       Email: jQuery("#Email").val(),
       Password: jQuery("#Password").val(),
       FirstName: jQuery("#FirstName").val(),
       LastName: jQuery("#LastName").val(),
       BirthDate: userBirthday,
       Height: jQuery("#Height").val(),
       EyeColor: window.selectedEyeColor,
       Gender: window.selectedGender,
       Species: window.selectedSpecies,
       IssueLocation: jQuery("#IssueLocation").val(),
       Zipcode: jQuery("#Zipcode").val(),
       FavoriteHero: window.selectedHero,
       photoKey: window.photoKey,
      }),
      contentType:"application/json; charset=utf-8",
      dataType:"json",
      success: function(){

        $("#ember849").css("display", "none");
        $("#ember894").css("display", "block");
        $('#bigHero').css('background-image', 'url(/static/images/heroes/characters/' + window.selectedHero + '.png)');
        $("#nav_button_right").removeClass("active");
        $("#level").text("1");
        $("#xp").text("100");
        $("#menubar4").addClass("active");
        $('#overlay').css("display", "none");

        // append input data to DOM
        if (window.localPicture !== "") {
          $('#userPictureLocal').attr('src', window.localPicture);
        }
        $("#userFirstName").append(jQuery("#FirstName").val());
        $("#userLastName").append(jQuery("#LastName").val());
        $("#userHeight").append(jQuery("#Height").val()+"cm");
        $("#userEyeColor").append(window.selectedEyeColor);
        $("#userGender").append(window.selectedGender);
        $("#userSpecies").append(window.selectedSpecies);
        $("#userLocation").append(jQuery("#IssueLocation").val());
        $("#userZip").append(jQuery("#Zipcode").val());

      },
      error: function (request, error) {
        alert(" Can't do because: " + request.responseJSON[0]);
        $('#overlay').css("display", "none");
      },
    });
  }

  // upload image using simpleupload

  $('input[type=file]').change(function(){

    readURL(this);

    $(this).simpleUpload("https://tickets.smartag.us/api/TicketPhoto", {

      start: function(file){
        //upload started
        console.log("upload started");
        $('#overlay').css("display", "block");
      },

      progress: function(progress){
        //received progress
        console.log("upload progress: " + Math.round(progress) + "%");
      },

      success: function(data){
        //upload successful
        console.log("upload successful!");
        window.photoKey = data.photoKey;
        $(".unknown").hide();
        $('#overlay').css("display", "none");
      },

      error: function(error){
        //upload failed
        console.log("upload error: " + error.name + ": " + error.message);
        $('#overlay').css("display", "none");
      }

    });

  });

  function readURL(input) {

    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function(e) {
        $('#userPicture').attr('src', e.target.result);
        window.localPicture = e.target.result;

        $('#userPicture').css("display", "block");
        var hWide = ($("#userPicture").width())/2; //half the image's width
        var hTall = ($("#userPicture").height())/2; //half the image's height, etc.

        // attach negative and pixel for CSS rule
        hWide = '-' + hWide + 'px';
        hTall = '-' + hTall + 'px';

        $("#userPicture").css({
          "margin-left" : hWide,
          "margin-top" : hTall
        });
        // var picWidth = $("#userPicture").width();
        // var margin = picWidth / 2;
        // $("#userPicture").css("margin-left", "-"+margin+"px");
      }

      reader.readAsDataURL(input.files[0]);
    }
  };

  $("#upload_photo_holder").on('click',function (e) {
      $("#fileUpload").click();
      e.preventDefault();
  })


});


/*
 * simpleUpload.js v.1.1
 *
 * Copyright 2018, Michael Brook, All rights reserved.
 * http://simpleupload.michaelcbrook.com/
 *
 * simpleUpload.js is an extremely simple yet powerful jQuery file upload plugin.
 * It is free to use under the MIT License (http://opensource.org/licenses/MIT)
 *
 * https://github.com/michaelcbrook/simpleUpload.js
 * @michaelcbrook
 */
function simpleUpload(e,l,n){var t=!1,a=null,o=0,r=0,i=[],s=[],p="auto",u=null,f=null,d="file",c={},m={},h=function(e){},v=function(e){},y=function(e){},U=function(e){},g=function(e){},b=function(){},w=function(e){},x=function(){},j=function(e,l){},k=[],E=[],S={files:k},z=0,F=null,T=function(e,l){M(e,l),0==--z&&D(),simpleUpload.activeUploads--,simpleUpload.uploadNext()},C=function(e){return h.call(S,e)},I=function(e,l){return!(R(e)>0)&&(!1===v.call(k[e],l)?(O(e,4),!1):!(R(e)>0)&&void O(e,1))},L=function(e,l){1==R(e)&&y.call(k[e],l)},q=function(e,l){1==R(e)&&(O(e,2),U.call(k[e],l),T(e,"success"))},W=function(e,l){1==R(e)&&(O(e,3),g.call(k[e],l),T(e,"error"))},_=function(e){b.call(k[e]),T(e,"cancel")},M=function(e,l){w.call(k[e],l)},D=function(){x.call(S),null!=F&&F.remove()},N=function(e,l,n){j.call(k[e],l,n)};function A(n){if(1==R(n)){if(null!=a){if(null==a[n]||null==a[n])return void W(n,{name:"InternalError",message:"There was an error uploading the file"});if(window.FormData){var t=$.ajaxSettings.xhr();if(t.upload){var o=a[n],r=new FormData;!function e(l,n,t){null!=t&&""!==t||(t=null);for(var a in n)void 0===n[a]||null===n[a]?l.append(null==t?a+"":t+"["+a+"]",""):"object"==typeof n[a]?e(l,n[a],null==t?a+"":t+"["+a+"]"):"boolean"==typeof n[a]?l.append(null==t?a+"":t+"["+a+"]",n[a]?"true":"false"):"number"==typeof n[a]?l.append(null==t?a+"":t+"["+a+"]",n[a]+""):"string"==typeof n[a]&&l.append(null==t?a+"":t+"["+a+"]",n[a])}(r,c),r.append(d,o);var i={url:e,data:r,type:"post",cache:!1,xhrFields:m,beforeSend:function(e,l){N(n,e,l),E[n].xhr=e},xhr:function(){return t.upload.addEventListener("progress",function(e){e.lengthComputable&&L(n,e.loaded/e.total*100)},!1),t},error:function(e){E[n].xhr=null,W(n,{name:"RequestError",message:"Upload failed",xhr:e})},success:function(e){E[n].xhr=null,L(n,100),q(n,e)},contentType:!1,processData:!1};return"auto"!=p&&(i.dataType=p),void $.ajax(i)}}}"object"==typeof l&&null!==l?function(l){if(0==l){var n=simpleUpload.queueIframe({origin:function(e){var l=document.createElement("a");l.href=e;var n=l.host,t=l.protocol;""==n&&(n=window.location.host);""!=t&&":"!=t||(t=window.location.protocol);return t.replace(/\:$/,"")+"://"+n}(e),expect:p,complete:function(e){1==R(l)&&(E[l].iframe=null,simpleUpload.dequeueIframe(n),L(l,100),q(l,e))},error:function(e){1==R(l)&&(E[l].iframe=null,simpleUpload.dequeueIframe(n),W(l,{name:"RequestError",message:e}))}});E[l].iframe=n;var t=function e(l,n){null!=n&&""!==n||(n=null);var t="";for(var a in l)void 0===l[a]||null===l[a]?t+=$("<div>").append($('<input type="hidden">').attr("name",null==n?a+"":n+"["+a+"]").val("")).html():"object"==typeof l[a]?t+=e(l[a],null==n?a+"":n+"["+a+"]"):"boolean"==typeof l[a]?t+=$("<div>").append($('<input type="hidden">').attr("name",null==n?a+"":n+"["+a+"]").val(l[a]?"true":"false")).html():"number"==typeof l[a]?t+=$("<div>").append($('<input type="hidden">').attr("name",null==n?a+"":n+"["+a+"]").val(l[a]+"")).html():"string"==typeof l[a]&&(t+=$("<div>").append($('<input type="hidden">').attr("name",null==n?a+"":n+"["+a+"]").val(l[a])).html());return t}(c);F.attr("action",e+(-1==e.lastIndexOf("?")?"?":"&")+"_iframeUpload="+n+"&_="+(new Date).getTime()).attr("target","simpleUpload_iframe_"+n).prepend(t).submit()}else W(l,{name:"UnsupportedError",message:"Multiple file uploads not supported"})}(n):W(n,{name:"UnsupportedError",message:"Your browser does not support this upload method"})}}function R(e){return E[e].state}function O(e,l){var n="";if(0==l)n="init";else if(1==l)n="uploading";else if(2==l)n="success";else if(3==l)n="error";else{if(4!=l)return!1;n="cancel"}E[e].state=l,k[e].upload.state=n}function B(e){var l=e.lastIndexOf(".");return-1!=l?e.substr(l+1):""}function J(e){return!isNaN(e)&&parseInt(e)+""==e}!function(){if("object"==typeof n&&null!==n){if("boolean"==typeof n.forceIframe&&(t=n.forceIframe),"function"==typeof n.init&&(h=n.init),"function"==typeof n.start&&(v=n.start),"function"==typeof n.progress&&(y=n.progress),"function"==typeof n.success&&(U=n.success),"function"==typeof n.error&&(g=n.error),"function"==typeof n.cancel&&(b=n.cancel),"function"==typeof n.complete&&(w=n.complete),"function"==typeof n.finish&&(x=n.finish),"function"==typeof n.beforeSend&&(j=n.beforeSend),"string"==typeof n.hashWorker&&""!=n.hashWorker&&(u=n.hashWorker),"function"==typeof n.hashComplete&&(f=n.hashComplete),"object"==typeof n.data&&null!==n.data)for(var e in n.data)c[e]=n.data[e];if("number"==typeof n.limit&&J(n.limit)&&n.limit>0&&(o=n.limit),"number"==typeof n.maxFileSize&&J(n.maxFileSize)&&n.maxFileSize>0&&(r=n.maxFileSize),"object"==typeof n.allowedExts&&null!==n.allowedExts)for(var e in n.allowedExts)i.push(n.allowedExts[e]);if("object"==typeof n.allowedTypes&&null!==n.allowedTypes)for(var e in n.allowedTypes)s.push(n.allowedTypes[e]);if("string"==typeof n.expect&&""!=n.expect){var S=n.expect.toLowerCase(),T=["auto","json","xml","html","script","text"];for(var e in T)if(T[e]==S){p=S;break}}if("object"==typeof n.xhrFields&&null!==n.xhrFields)for(var e in n.xhrFields)m[e]=n.xhrFields[e]}if("object"==typeof l&&null!==l&&l instanceof jQuery){if(!(l.length>0))return!1;l=l.get(0)}if(!t&&window.File&&window.FileReader&&window.FileList&&window.Blob&&("object"==typeof n&&null!==n&&"object"==typeof n.files&&null!==n.files?a=n.files:"object"==typeof l&&null!==l&&"object"==typeof l.files&&null!==l.files&&(a=l.files)),("object"!=typeof l||null===l)&&null==a)return!1;"object"==typeof n&&null!==n&&"string"==typeof n.name&&""!=n.name?d=n.name.replace(/\[\s*\]/g,"[0]"):"object"==typeof l&&null!==l&&"string"==typeof l.name&&""!=l.name&&(d=l.name.replace(/\[\s*\]/g,"[0]"));var M=0;if(null!=a?a.length>0&&(M=a.length>1&&window.FormData&&$.ajaxSettings.xhr().upload?o>0&&a.length>o?o:a.length:1):""!=l.value&&(M=1),M>0){if("object"==typeof l&&null!==l){var N=$(l);F=$("<form>").hide().attr("enctype","multipart/form-data").attr("method","post").appendTo("body"),N.after(N.clone(!0).val("")).removeAttr("onchange").off().removeAttr("id").attr("name",d).appendTo(F)}for(var Q=0;Q<M;Q++)!function(e){E[e]={state:0,hashWorker:null,xhr:null,iframe:null},k[e]={upload:{index:e,state:"init",file:null!=a?a[e]:{name:l.value.split(/(\\|\/)/g).pop()},cancel:function(){if(0==R(e))O(e,4);else{if(1!=R(e))return!1;O(e,4),null!=E[e].hashWorker&&(E[e].hashWorker.terminate(),E[e].hashWorker=null),null!=E[e].xhr&&(E[e].xhr.abort(),E[e].xhr=null),null!=E[e].iframe&&($("iframe[name=simpleUpload_iframe_"+E[e].iframe+"]").attr("src","javascript:false;"),simpleUpload.dequeueIframe(E[e].iframe),E[e].iframe=null),_(e)}return!0}}}}(Q);var H=C(M);if(!1!==H){var X=M;if("number"==typeof H&&J(H)&&H>=0&&H<M)for(var Y=X=H;Y<M;Y++)O(Y,4);for(var G=[],K=0;K<X;K++)!1!==I(K,k[K].upload.file)&&(G[G.length]=K);G.length>0?(z=G.length,simpleUpload.queueUpload(G,function(e){!function(e){if(1==R(e)){var n=null;if(null!=a){if(null==a[e]||null==a[e])return void W(e,{name:"InternalError",message:"There was an error uploading the file"});n=a[e]}else if(""==l.value)return void W(e,{name:"InternalError",message:"There was an error uploading the file"});i.length>0&&!function(e,n){if(null!=n&&null!=n){var t=n.name;if(null!=t&&null!=t&&""!=t){var a=B(t).toLowerCase();if(""!=a){var o=!1;for(var r in e)if(e[r].toLowerCase()==a){o=!0;break}return!!o}return!1}}if("object"!=typeof l||null===l)return!0;var i=l.value;if(""!=i){var a=B(i).toLowerCase();if(""!=a){var o=!1;for(var r in e)if(e[r].toLowerCase()==a){o=!0;break}if(o)return!0}}return!1}(i,n)?W(e,{name:"InvalidFileExtensionError",message:"That file format is not allowed"}):s.length>0&&!function(e,l){if(null!=l&&null!=l){var n=l.type;if(null!=n&&null!=n&&""!=n){n=n.toLowerCase();var t=!1;for(var a in e)if(e[a].toLowerCase()==n){t=!0;break}return!!t}}return!0}(s,n)?W(e,{name:"InvalidFileTypeError",message:"That file format is not allowed"}):r>0&&!function(e,l){if(null!=l&&null!=l){var n=l.size;if(null!=n&&null!=n&&""!=n&&J(n))return n<=e}return!0}(r,n)?W(e,{name:"MaxFileSizeError",message:"That file is too big"}):null!=u&&null!=f?function(e){if(null!=a&&null!=a[e]&&null!=a[e]&&window.Worker){var l=a[e];if(null!=l.size&&null!=l.size&&""!=l.size&&J(l.size)&&(l.slice||l.webkitSlice||l.mozSlice))try{var n,t,o,r,i,s,p=new Worker(u);return p.addEventListener("error",function(l){p.terminate(),E[e].hashWorker=null,A(e)},!1),p.addEventListener("message",function(l){if(l.data.result){var n=l.data.result;p.terminate(),E[e].hashWorker=null,function(e,l){if(1==R(e)){var n=!1;f.call(k[e],l,{success:function(l){return 1==R(e)&&!n&&(n=!0,L(e,100),q(e,l),!0)},proceed:function(){return 1==R(e)&&!n&&(n=!0,A(e),!0)},error:function(l){return 1==R(e)&&!n&&(n=!0,W(e,{name:"HashError",message:l}),!0)}})}}(e,n)}},!1),s=function(e){p.postMessage({message:e.target.result,block:t})},i=function(e){t.end!==l.size&&(t.start+=n,t.end+=n,t.end>l.size&&(t.end=l.size),(o=new FileReader).onload=s,l.slice?r=l.slice(t.start,t.end):l.webkitSlice?r=l.webkitSlice(t.start,t.end):l.mozSlice&&(r=l.mozSlice(t.start,t.end)),o.readAsArrayBuffer(r))},n=1048576,(t={file_size:l.size,start:0}).end=n>l.size?l.size:n,p.addEventListener("message",i,!1),(o=new FileReader).onload=s,l.slice?r=l.slice(t.start,t.end):l.webkitSlice?r=l.webkitSlice(t.start,t.end):l.mozSlice&&(r=l.mozSlice(t.start,t.end)),o.readAsArrayBuffer(r),void(E[e].hashWorker=p)}catch(e){}}A(e)}(e):A(e)}}(e)}),simpleUpload.uploadNext()):D()}else{for(var Y in k)O(Y,4);D()}}}()}simpleUpload.maxUploads=10,simpleUpload.activeUploads=0,simpleUpload.uploads=[],simpleUpload.iframes={},simpleUpload.iframeCount=0,simpleUpload.queueUpload=function(e,l){simpleUpload.uploads[simpleUpload.uploads.length]={uploads:e,callback:l}},simpleUpload.uploadNext=function(){if(simpleUpload.uploads.length>0&&simpleUpload.activeUploads<simpleUpload.maxUploads){var e=simpleUpload.uploads[0],l=e.callback,n=e.uploads.splice(0,1)[0];0==e.uploads.length&&simpleUpload.uploads.splice(0,1),simpleUpload.activeUploads++,l(n),simpleUpload.uploadNext()}},simpleUpload.queueIframe=function(e){for(var l=0;0==l||l in simpleUpload.iframes;)l=Math.floor(999999999*Math.random()+1);return simpleUpload.iframes[l]=e,simpleUpload.iframeCount++,$("body").append('<iframe name="simpleUpload_iframe_'+l+'" style="display: none;"></iframe>'),l},simpleUpload.dequeueIframe=function(e){e in simpleUpload.iframes&&($("iframe[name=simpleUpload_iframe_"+e+"]").remove(),delete simpleUpload.iframes[e],simpleUpload.iframeCount--)},simpleUpload.convertDataType=function(e,l,n){var t="auto";if("auto"==e){if("string"==typeof l&&""!=l){var a=l.toLowerCase(),o=["json","xml","html","script","text"];for(var r in o)if(o[r]==a){t=a;break}}}else t=e;if("auto"==t)return void 0===n?"":"object"==typeof n?n:String(n);if("json"==t){if(null==n)return null;if("object"==typeof n)return n;if("string"==typeof n)try{return $.parseJSON(n)}catch(e){return!1}return!1}if("xml"==t){if(null==n)return null;if("string"==typeof n)try{return $.parseXML(n)}catch(e){return!1}return!1}if("script"==t){if(void 0===n)return"";if("string"==typeof n)try{return $.globalEval(n),n}catch(e){return!1}return!1}return void 0===n?"":String(n)},simpleUpload.iframeCallback=function(e){if("object"==typeof e&&null!==e){var l=e.id;if(l in simpleUpload.iframes){var n=simpleUpload.convertDataType(simpleUpload.iframes[l].expect,e.type,e.data);!1!==n?simpleUpload.iframes[l].complete(n):simpleUpload.iframes[l].error("Upload failed")}}},simpleUpload.postMessageCallback=function(e){try{var l=e[e.message?"message":"data"];if("string"==typeof l&&""!=l&&"object"==typeof(l=$.parseJSON(l))&&null!==l&&"string"==typeof l.namespace&&"simpleUpload"==l.namespace){var n=l.id;if(n in simpleUpload.iframes&&e.origin===simpleUpload.iframes[n].origin){var t=simpleUpload.convertDataType(simpleUpload.iframes[n].expect,l.type,l.data);!1!==t?simpleUpload.iframes[n].complete(t):simpleUpload.iframes[n].error("Upload failed")}}}catch(e){}},window.addEventListener?window.addEventListener("message",simpleUpload.postMessageCallback,!1):window.attachEvent("onmessage",simpleUpload.postMessageCallback),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){e.fn.simpleUpload=function(l,n){return 0==e(this).length&&"object"==typeof n&&null!==n&&"object"==typeof n.files&&null!==n.files?(new simpleUpload(l,null,n),this):this.each(function(){new simpleUpload(l,this,n)})},e.fn.simpleUpload.maxSimultaneousUploads=function(e){return void 0===e?simpleUpload.maxUploads:"number"==typeof e&&e>0?(simpleUpload.maxUploads=e,this):void 0}});
