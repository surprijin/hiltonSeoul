//게시물 리스트 열기 및 갈색바 움직이기.
$(document).ready(function(){
    $("#ALL").click(function(){
      $(".noti_graybar").css({ left: '0%'});
      $(".grayfont").css("color", "#B0AFAF");
      $(".fontAll").css("color", "#494949");
    });
    $("#AMENITIES").click(function(){
      $(".noti_graybar").css({ left: '12.3%'});
      $(".grayfont").css("color", "#B0AFAF");
      $(".fontAmenities").css("color", "#494949");
    });
    $("#SERVICE").click(function(){
      $(".noti_graybar").css({ left: '26%'});
      $(".grayfont").css("color", "#B0AFAF");
      $(".fontService").css("color", "#494949");
    });
    $("#MEETING").click(function(){
      $(".noti_graybar").css({ left: '38.7%'});
      $(".grayfont").css("color", "#B0AFAF");
      $(".fontMeeting").css("color", "#494949");
    });
    $("#ROOMS").click(function(){
      $(".noti_graybar").css({ left: '51.2%'});
      $(".grayfont").css("color", "#B0AFAF");
      $(".fontRooms").css("color", "#494949");
    });
    $("#DINING").click(function(){
      $(".noti_graybar").css({ left: '63.5%'});
      $(".grayfont").css("color", "#B0AFAF");
      $(".fontDining").css("color", "#494949");
    });
    $("#EVENT").click(function(){
      $(".noti_graybar").css({ left: '75%'});
      $(".grayfont").css("color", "#B0AFAF");
      $(".fontEvent").css("color", "#494949");
    });
    $("#PARKIING").click(function(){
      $(".noti_graybar").css({ left: '88%'});
      $(".grayfont").css("color", "#B0AFAF");
      $(".fontParking").css("color", "#494949");
    });
  });
  /// for문이랑 if else를 사용한 자바스크립트 구문 만들기!
  
  