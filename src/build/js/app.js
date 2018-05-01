$(document).ready(function(){
   setTimeout(function(){

    $("#signup_popup").css("top", "50%");

   },1000);


  $('#nav_button_right').click(function(e) {
    e.preventDefault();
    var error = false;
    if ($("#Email").hasClass("error") || $("#Password").hasClass("error") || $("#ConfirmPassword").hasClass("error") || $("#BirthDate").hasClass("error")) {
      error = true;
    }
    console.log(window.CURRENT_PAGE);
    if (error == false) {
      if (window.CURRENT_PAGE === 1) {
        window.CURRENT_PAGE = 2;

        $("#ember582").css("display", "none");
        $("#ember745").css("display", "block");
        $("#nav_button_left").addClass("active");
        $("#level").text("0");
        $("#xp").text("100");
        $("#menubar2").addClass("active");
      }
      else if (window.CURRENT_PAGE === 2) {

        window.CURRENT_PAGE = 3
        // sendData(2)

        $("#ember745").css("display", "none");
        $("#ember849").css("display", "block");
        $("#nav_button_left").addClass("active");
        $("#level").text("0");
        $("#xp").text("100");
        $("#menubar3").addClass("active");

      }
      else if (window.CURRENT_PAGE === 3) {

        if(window.selectedHero !== "") {
          sendData(3)

          $("#ember849").css("display", "none");
          $("#ember894").css("display", "block");
          $('#bigHero').css('background-image', 'url(/static/images/heroes/characters/' + window.selectedHero + '.png)');
          $("#nav_button_right").removeClass("active");
          $("#level").text("1");
          $("#xp").text("100");
          $("#menubar4").addClass("active");
        } else {
          alert("please choose your hero!");
        }
      }
    }
  });

  $('#nav_button_left').click(function(e) {
    console.log(e);
    e.preventDefault();
    if (window.CURRENT_PAGE === 1) {
      $("#ember582").css("display", "block");
      $("#ember745").css("display", "none");
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

  $("#height").change(function() {
    if ($("#height").val() == "") {
      $("#height").addClass("error");
    } else {
      $("#height").removeClass("error");
    }
  });

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
      var theId = _.find(window.AVAILABLE_GENDERS, ['id', id]);
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


  function sendData(step) {
  var url = "https://users.smartag.us/api/UserPortal";

  jQuery.ajax({
      url: url,
      type:"POST",
      data: JSON.stringify({
       Email: jQuery("#Email").val(),
       Password: jQuery("#Password").val(),
       FirstName: jQuery("#FirstName").val(),
       LastName: jQuery("#LastName").val(),
       BirthDate: jQuery("#ember751").val()+"/"+jQuery("#ember752").val()+"/"+jQuery("#ember753").val(),
       Height: jQuery("#Height").val(),
       EyeColor: window.selectedEyeColor,
       Gender: window.selectedGender,
       Species: window.selectedSpecies,
       IssueLocation: jQuery("#IssueLocation").val(),
       Zipcode: jQuery("#Zipcode").val(),
       FavoriteHero: window.selectedHero,
      }),
      contentType:"application/json; charset=utf-8",
      dataType:"json",
      success: function(){
       if (window.CURRENT_PAGE === 2) {
        window.CURRENT_PAGE = 3;
       }
      },
      error: function (request, error) {
        console.log(arguments);
        alert(" Can't do because: " + error);
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
        console.log(data);
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
      }

      reader.readAsDataURL(input.files[0]);
    }
  };

  $("#upload_photo_holder").on('click',function (e) {
      $("#fileUpload").click();
      e.preventDefault();
  })


});
