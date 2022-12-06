//document did mount equivalent
$(document).ready(function () {
      setTimeout(function () {
            $(".animatedTitleS").animate({ left: '200px' }, "slow");
      }, 1000)
});

function each(arr, f) {
      for (var i = 0; arr.length > i; i++) {
            f(arr[i], i)
      }
}
////////////////////////////////TITLES//////////////////////////
var title = "SPARTANS"

each(title, function (e, i) {
      if (title.length - 2 > i) {
            $("#title").append(`<span>${e}</span>`)
      } else {
            $("#title").append(`<span 
            style="color:#b22c33;
            position: absolute";
            class='animatedTitle${e}'>${e}</span>`)
      }
})

////////////////////////////////TITLES///////////////////////////

/////////////////////////////Schedules///////////////////////////
var schedules = [
      [],
      ["Chest", "Back"],
      ["Back"],
      ["Legs"],
      [],
      ["Upper"],
      ["Lower"],
]
//__schedule-display
function todaySchedule(schedules) {
      var schedule = schedules[new Date().getDay()]
      var result = '<span style="transition: transform .2s; cursor: pointer" class="arrows" id= "leftArrow">< </span>'


      if (schedule.length) {
            if (schedule.length > 1) {
                  each(schedule, function (e) {
                        result += ` <span>${e} /</span>`
                  })
                  result = result.slice(0, result.length - 8) + "</span>"
            } else {
                  result += ` <span>${schedule[0]} /</span> <span> Day</span>`
            }
      } else {
            result += ` <span>Rest /</span> <span> Day</span>`
      }
      return result + "<span style='transition: transform .2s; cursor: pointer' class='arrows' id='rightArrow'> ></span>"

}
$("#schedule").html(todaySchedule(schedules))

//__Arrows__on Hover 
function arrowsOnHover() {
      $(".arrows").hover(function () {
            $(".arrows").css({ color: '#b22c33' })
            $(".arrows").animate({
                  fontSize: "45px"
            }, 250);
      }, function () {
            $(".arrows").css({ color: "white" })
            $(".arrows").animate({
                  fontSize: "30px"
            }, 250);
      });
}
arrowsOnHover()
//__Arrow__on Click
function arrowsOnclick() {
      $('#leftArrow').click(function () {
            schedules.push(schedules[0])
            schedules.shift()
            $("#schedule").html(todaySchedule(schedules))
            arrowsOnHover()
            arrowsOnclick()
      })

      $('#rightArrow').click(function () {
            schedules.unshift(schedules[schedules.length - 1])
            schedules.pop()
            console.log(schedules)
            $("#schedule").html(todaySchedule(schedules))
            arrowsOnHover()
            arrowsOnclick()
      })
}

arrowsOnclick()
/////////////////////////////Schedules///////////////////////////

//////////////////////////////SETTINGS//////////////////////////////

$("#settingIcon").hover(function () {
      $("#settingIcon").css({ opacity: '100%' })
      $("#settingIcon").animate({
            width: "45px"
      }, 250);
}, function () {
      $("#settingIcon").css({ width: "30px" })
      $("#settingIcon").animate({
            opacity: "20%"
      }, 250);
});

$("#settingIcon").click(function () {
      $("#schedule").fadeOut()
      $("#title").animate({
            top: "22%"
      },250)
})