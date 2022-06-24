////인원 띄우기
function openCloseToc1() {
  if(document.getElementById('reservation_1_men').style.display === 'block') {
    document.getElementById('reservation_1_men').style.display = 'none';
  } else {
    document.getElementById('reservation_1_men').style.display = 'block';
  }
};


// ////아코디언 하나만////
// var acc = document.getElementsByClassName("reservation_rooms");
// var i;
        
//   for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function() {
//       this.classList.toggle("active");
//       var panel = document.getElementsByClassName("rooms_content");
//       if (panel.style.maxHeight) {
//         panel.style.maxHeight = null;
//       } else {
//         var act = document.querySelectorAll('.reservation_rooms.active');
//         for(j=0; j<act.length; j++){
//             act[j].classList.remove('active');
//             act[j].nextElementSibling.style.maxHeight = null;
//         }
//         this.classList.add('active');
//         panel.style.maxHeight = panel.scrollHeight + "px";
//         } 
//     });
//   }



////////////룸온니 객실/////////////


////객실선택 띄우기(룸온니)

var roomonly = document.getElementById('rooms_content_1').style.display;
function ROOMONLY() {
  if(document.getElementById('rooms_content_1').style.display === 'block') {
    document.getElementById('rooms_content_1').style.display = 'none';
  } else {
    document.getElementById('rooms_content_1').style.display = 'block';
  }
};
//요금 띄우기(룸온니, 게스트룸)
function openCloseToc11() {
  if(document.getElementById('option1-1').style.display === 'block') {
    document.getElementById('option1-1').style.display = 'none';
  } else {
    document.getElementById('option1-1').style.display = 'block';
  }
};
//요금 띄우기(룸온니, 디럭스룸)
function openCloseToc12() {
  if(document.getElementById('option1-2').style.display === 'block') {
    document.getElementById('option1-2').style.display = 'none';
  } else {
    document.getElementById('option1-2').style.display = 'block';
  }
};
//요금 띄우기(룸온니, 이그젝큐티브)
function openCloseToc13() {
  if(document.getElementById('option1-3').style.display === 'block') {
    document.getElementById('option1-3').style.display = 'none';
  } else {
    document.getElementById('option1-3').style.display = 'block';
  }
};
//요금 띄우기(룸온니, 스위트룸)
function openCloseToc14() {
  if(document.getElementById('option1-4').style.display === 'block') {
    document.getElementById('option1-4').style.display = 'none';
  } else {
    document.getElementById('option1-4').style.display = 'block';
  }
};


////////////조식 객실/////////////


////객실선택 띄우기(조식)
function BREAKFAST() {
  if(document.getElementById('rooms_content_2').style.display === 'block') {
    document.getElementById('rooms_content_2').style.display = 'none';
  } else {
    document.getElementById('rooms_content_2').style.display = 'block';
  }
};
//요금 띄우기(조식, 게스트룸)
function openCloseToc21() {
  if(document.getElementById('option2-1').style.display === 'block') {
    document.getElementById('option2-1').style.display = 'none';
  } else {
    document.getElementById('option2-1').style.display = 'block';
  }
};
//요금 띄우기(조식, 디럭스룸)
function openCloseToc22() {
  if(document.getElementById('option2-2').style.display === 'block') {
    document.getElementById('option2-2').style.display = 'none';
  } else {
    document.getElementById('option2-2').style.display = 'block';
  }
};
//요금 띄우기(조식, 이그젝큐티브)
function openCloseToc23() {
  if(document.getElementById('option2-3').style.display === 'block') {
    document.getElementById('option2-3').style.display = 'none';
  } else {
    document.getElementById('option2-3').style.display = 'block';
  }
};
//요금 띄우기(조식, 스위트룸)
function openCloseToc24() {
  if(document.getElementById('option2-4').style.display === 'block') {
    document.getElementById('option2-4').style.display = 'none';
  } else {
    document.getElementById('option2-4').style.display = 'block';
  }
};

////////////포인트 객실/////////////


////객실선택 띄우기(포인트)
function POINT() {
  if(document.getElementById('rooms_content_3').style.display === 'block') {
    document.getElementById('rooms_content_3').style.display = 'none';
  } else {
    document.getElementById('rooms_content_3').style.display = 'block';
  }
};
//요금 띄우기(포인트, 게스트룸)
function openCloseToc31() {
  if(document.getElementById('option3-1').style.display === 'block') {
    document.getElementById('option3-1').style.display = 'none';
  } else {
    document.getElementById('option3-1').style.display = 'block';
  }
};
//요금 띄우기(포인트, 디럭스룸)
function openCloseToc32() {
  if(document.getElementById('option3-2').style.display === 'block') {
    document.getElementById('option3-2').style.display = 'none';
  } else {
    document.getElementById('option3-2').style.display = 'block';
  }
};
//요금 띄우기(포인트, 이그젝큐티브)
function openCloseToc33() {
  if(document.getElementById('option3-3').style.display === 'block') {
    document.getElementById('option3-3').style.display = 'none';
  } else {
    document.getElementById('option3-3').style.display = 'block';
  }
};
//요금 띄우기(포인트, 스위트룸)
function openCloseToc34() {
  if(document.getElementById('option3-4').style.display === 'block') {
    document.getElementById('option3-4').style.display = 'none';
  } else {
    document.getElementById('option3-4').style.display = 'block';
  }
};

