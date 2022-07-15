/* 메인 */
const mainTabList = document.querySelectorAll(
  "#kkc .main .section-notice .right .titles .btn"
);
const mainContentList = document.querySelectorAll(
  "#kkc .main .section-notice .right .list"
);

for (let i = 0; i < mainTabList.length; i++) {
  mainContentList[i].style.display = "none";
  mainTabList[i].addEventListener("click", function (event) {
    for (let i = 0; i < mainTabList.length; i++) {
      mainTabList[i].classList.remove("active");
      mainContentList[i].style.display = "none";
    }
    mainTabList[i].classList.add("active");
    mainContentList[i].style.display = "block";
  });
  if (i == 0) mainTabList[0].click();
}
/*365 멸균 시스템*/
const sterilTabList = document.querySelectorAll(
  "#kkc .common .sterilization .tab"
);
const sterilContentList = document.querySelectorAll(
  "#kkc .common .sterilization .box"
);

for (let i = 0; i < sterilTabList.length; i++) {
  sterilContentList[i].style.display = "none";
  sterilTabList[i].addEventListener("click", function (event) {
    for (let i = 0; i < sterilTabList.length; i++) {
      sterilTabList[i].classList.remove("active");
      sterilContentList[i].style.display = "none";
    }
    event.target.classList.add("active");
    sterilContentList[i].style.display = "block";
  });
  if (i == 0) sterilTabList[0].click();
}

/* 에스안과 TV */
const tvTabList = document.querySelectorAll("#kkc .common .tv .right .tab");

if (tvTabList.length) {
  var tag = document.createElement("script");

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  let player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
      height: "512",
      width: "928",
      videoId: "1p3UlFUUywg",
    });
  }

  for (let i = 0; i < tvTabList.length; i++) {
    tvTabList[i].addEventListener("click", function (event) {
      for (let i = 0; i < tvTabList.length; i++) {
        tvTabList[i].classList.remove("active");
      }
      switch (i) {
        case 0:
          player.loadVideoById("1p3UlFUUywg");
          break;
        case 1:
          player.loadVideoById("0Sg3wtSyweg");
          break;
        case 2:
          player.loadVideoById("XnFa4wa1cSM");
          break;
        case 3:
          player.loadVideoById("E26sYgm2h6k");
          break;
      }
      tvTabList[i].classList.add("active");
    });
  }
}

/* 노안인공수정체 */
const crystalTabList = document.querySelectorAll(
  "#kkc .crystal .section6 .row .tab "
);

const crystalContentList = document.querySelectorAll(
  "#kkc .crystal .section6  .box"
);

for (let i = 0; i < crystalTabList.length; i++) {
  crystalContentList[i].style.display = "none";
  crystalTabList[i].addEventListener("click", function (event) {
    for (let i = 0; i < crystalTabList.length; i++) {
      crystalTabList[i].classList.remove("active");
      crystalContentList[i].style.display = "none";
    }
    event.target.classList.add("active");
    crystalContentList[i].style.display = "block";
  });
  if (i == 0) crystalTabList[0].click();
}

/* 1day 녹내장 */
const glau1TabList = document.querySelectorAll(
  "#kkc .glaucoma-1day .section9 .title "
);

const glau1ContentList = document.querySelectorAll(
  "#kkc .glaucoma-1day .section9 .content"
);

for (let i = 0; i < glau1TabList.length; i++) {
  glau1ContentList[i].style.display = "none";
  glau1TabList[i].addEventListener("click", function (event) {
    for (let i = 0; i < glau1TabList.length; i++) {
      glau1ContentList[i].toggleClass("d-none");
    }
    glau1ContentList[i].style.display = "block";
  });
}
/*QnA Q&A */
const qnaTabList = document.querySelectorAll("#kkc .common .qna .title ");

const qnaContentList = document.querySelectorAll("#kkc .common .qna .content");

for (let i = 0; i < qnaTabList.length; i++) {
  qnaContentList[i].style.display = "none";
  qnaTabList[i].addEventListener("click", function (e) {
    e.target.expandArray[0].classList.toggle("d-none");
  });
}

/*QnA Q&A2 */
const qna2TabList = $("#kkc .common .vision-qna .tab");
const qna2BtnList = $("#kkc .common .vision-qna .tab .btn");
const qna2ContentList = $("#kkc .common .vision-qna .content");
for (let i = 0; i < qna2TabList.length; i++) {
  $("#kkc .common .vision-qna .content:nth-child(" + (i + 1) * 2 + ")").hide();
  qna2TabList[i].addEventListener("click", function (e) {
    $(
      "#kkc .common .vision-qna .content:nth-child(" + (i + 1) * 2 + ")"
    ).slideToggle();
    qna2TabList[i].classList.toggle("active");
  });
}

$(window).on("scroll", function () {
  if ($(document).scrollTop() > 0) {
    $(".top-banner").addClass("d-none");
    $("#kkc > div:nth-child(2)").addClass("top-none");
  } else {
    $(".top-banner").removeClass("d-none");
    $("#kkc > div:nth-child(2)").removeClass("top-none");
  }
});

/* 당뇨망막병증 */
const diabeticTabList = document.querySelectorAll(
  "#kkc .retina-diabetic .section8 .row .tab "
);

const diabeticContentList = document.querySelectorAll(
  "#kkc .retina-diabetic .section8 .content"
);

for (let i = 0; i < diabeticTabList.length; i++) {
  diabeticContentList[i].style.display = "none";
  diabeticTabList[i].addEventListener("click", function (event) {
    for (let i = 0; i < diabeticTabList.length; i++) {
      diabeticTabList[i].classList.remove("active");
      diabeticContentList[i].style.display = "none";
    }
    event.target.classList.add("active");
    diabeticContentList[i].style.display = "block";
  });
  if (i == 0) diabeticTabList[0].click();
}

/* 그외망막질환 */
const etcTabList1 = document.querySelectorAll(
  "#kkc .etcretina .section3 .tabs .tab"
);

const etcContentList1 = document.querySelectorAll(
  "#kkc .etcretina .section3 .contents .content"
);
const etcTabList2 = document.querySelectorAll(
  "#kkc .etcretina .section4 .tabs .tab"
);

const etcContentList2 = document.querySelectorAll(
  "#kkc .etcretina .section4 .contents .content"
);

for (let i = 0; i < etcTabList1.length; i++) {
  etcContentList1[i].style.display = "none";
  etcTabList1[i].addEventListener("click", function (event) {
    for (let i = 0; i < etcTabList1.length; i++) {
      etcTabList1[i].classList.remove("active");
      etcContentList1[i].style.display = "none";
    }
    event.target.classList.add("active");
    etcContentList1[i].style.display = "block";
  });
  if (i == 0) etcTabList1[0].click();
}

for (let i = 0; i < etcTabList2.length; i++) {
  etcContentList2[i].style.display = "none";
  etcTabList2[i].addEventListener("click", function (event) {
    for (let i = 0; i < etcTabList2.length; i++) {
      etcTabList2[i].classList.remove("active");
      etcContentList2[i].style.display = "none";
    }
    event.target.classList.add("active");
    etcContentList2[i].style.display = "block";
  });
  if (i == 0) etcTabList2[0].click();
}

/*의료진 소개*/

const doctors = $("#kkc .doctors .section1 .row .box");
const doctorInfo = $("#kkc .doctors .section2 .box");
const doctorTable = $("#kkc .doctors .section3 table");
const doctorBackground = $("#kkc .doctors .section2");

for (let i = 0; i < doctors.length; i++) {
  doctorInfo[i].classList.add("d-none");
  doctorTable[i].classList.add("d-none");
  doctors[i].addEventListener("click", function (e) {
    for (let i = 0; i < doctorInfo.length; i++) {
      doctorInfo[i].classList.add("d-none");
      doctorTable[i].classList.add("d-none");
    }
    doctorInfo[i].classList.remove("d-none");
    doctorTable[i].classList.remove("d-none");
    doctorBackground.css({
      background: "url(./img/doctors/doctor" + (i + 1) + "_bg.png)",
    });
  });
}
if (doctors.length) {
  doctorInfo[0].classList.remove("d-none");
  doctorTable[0].classList.remove("d-none");
}

$(function () {
  $(".footer .langbox").click(function () {
    $(this).siblings(".langlist").slideToggle(300);
  });
  $(".footer .langlist").hide();
});
