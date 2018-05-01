$('#nav_button_right').click(function(e) {
  e.preventDefault();
  var error = false;
  if ($("#Email").hasClass("error") || $("#Password").hasClass("error") || $("#ConfirmPassword").hasClass("error") || $("#BirthDate").hasClass("error")) {
    error = true;
  }
  if (error == true) {
    if (window.CURRENT_PAGE === 1) {
      window.CURRENT_PAGE = 2;
      $("#ember582").css("display", "none");
      $("#ember745").css("display", "block");
      $("#nav_button_left").addClass("active");
      $("#level").text("2");
      $("#xp").text("100");
      $("#menubar2").addClass("active");
    }
    else if (window.CURRENT_PAGE === 2) {

      sendData()

      // var dataUser = {BirthDate : "2017/02/02",
      //   Height: 17,
      //   EyeColor: "black",
      //   Gender : "Male",
      //   Species: "Android",
      //   IssueLocation : "Indonesia",
      //   Zipcode : 18888};

      //   console.log(dataUser);
      // $.ajax({
      //   type: "POST",
      //   url: "https://users.smartag.us/api/UserAdmin",
      //   // The key needs to match your method's input parameter (case-sensitive).
      //   data: {
      //     BirthDate : "2017/02/02",
      //     Height: 17,
      //     EyeColor: "black",
      //     Gender : "Male",
      //     Species: "Android",
      //     IssueLocation : "Indonesia",
      //     Zipcode : 18888
      //   },
      //   // contentType: "application/json; charset=utf-8",
      //   // dataType: "json",
      //     success: function(data){alert(data);},
      //     failure: function(errMsg) {
      //       alert(errMsg);
      //     }
      //   });


      window.CURRENT_PAGE = 3;
      $("#ember745").css("display", "none");
      $("#ember849").css("display", "block");
      $("#nav_button_left").addClass("active");
      $("#level").text("3");
      $("#xp").text("100");
      $("#menubar2").addClass("active");
    }
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
    $("#selectedEyeColor").attr("src", "/static/images/eye_colors/" + theId.id + ".jpg");
  }
  if (type === "gender") {
    var theId = _.find(window.AVAILABLE_GENDERS, ['id', id]);
    $("#selectedGender").attr("src", "/static/images/gender/" + theId.id + ".jpg");
  }
  if (type === "species") {
    var theId = _.find(window.AVAILABLE_GENDERS, ['id', id]);
    $("#selectedSpecies").attr("src", "/static/images/species/" + theId.id + ".jpg");
  }

}

function sendData()
{
var url = "https://users.smartag.us/api/UserPortal";
jQuery.ajax({
    url: url,
    type:"POST",
    data: JSON.stringify({
     // Email: jQuery("#Email").val(),
     // Password: jQuery("#Password").val(),
     // FirstName: jQuery("#FirstName").val(),
     // LastName: jQuery("#LastName").val(),
     // BirthDate: jQuery("#BirthDate").val(),
     // Height: jQuery("#Height").val(),
     // EyeColor: jQuery("#EyeColor").val(),
     // Gender: jQuery("#Gender").val(),
     // Species: jQuery("#Species").val(),
     // IssueLocation: jQuery("#IssueLocation").val(),
     // Zipcode: jQuery("#Zipcode").val()

     Email : "test@test.com",
      Password : "123123123",
      FirstName : "my first",
      LastName : "my last",
      BirthDate : "2017/02/02",
      Height: 17,
      EyeColor: "black",
      Gender : "Male",
      Species: "Android",
      IssueLocation : "Indonesia",
      Zipcode : 18888,
    }),
    contentType:"application/json; charset=utf-8",
    dataType:"json",
    success: function(){
     jQuery("#success").css("display", "inline");
    },
    error: function (request, error) {
      console.log(arguments);
      alert(" Can't do because: " + error);
    },
  });
}

// ajax upload
$(document).ready(function(){

  var thumb = $('img#thumb');

  new AjaxUpload('imageUpload', {
    action: $('form#newHotnessForm').attr('action'),
    name: 'image',
    onSubmit: function(file, extension) {
      $('div.preview').addClass('loading');
    },
    onComplete: function(file, response) {
      thumb.load(function(){
        $('div.preview').removeClass('loading');
        thumb.unbind();
      });
      thumb.attr('src', response);
    }
  });

});
