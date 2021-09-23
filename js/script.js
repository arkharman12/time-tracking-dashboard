const dailyBtn = document.querySelector(".daily-btn");
const weeklyBtn = document.querySelector(".weekly-btn");
const monthlyBtn = document.querySelector(".monthly-btn");
const currentHours = document.querySelectorAll(".current-hours");
const lastHours = document.querySelectorAll(".last-hours");

fetch("data.json").then(function (res) {
    return res.json();
}).then(function (obj) {
    dailyBtn.addEventListener("click", function() {
        dailyBtn.classList.add("active");
        weeklyBtn.classList.remove("active");
        monthlyBtn.classList.remove("active");

        currentHours[0].innerHTML = obj[0].timeframes.daily.current + "hrs";
        currentHours[1].innerHTML = obj[1].timeframes.daily.current + "hrs";
        currentHours[2].innerHTML = obj[2].timeframes.daily.current + "hrs";
        currentHours[3].innerHTML = obj[3].timeframes.daily.current + "hrs";
        currentHours[4].innerHTML = obj[4].timeframes.daily.current + "hrs";
        currentHours[5].innerHTML = obj[5].timeframes.daily.current + "hrs";

        lastHours[0].innerHTML = "Last Week - " + obj[0].timeframes.daily.previous + "hrs";
        lastHours[1].innerHTML = "Last Week - " + obj[1].timeframes.daily.previous + "hrs";
        lastHours[2].innerHTML = "Last Week - " + obj[2].timeframes.daily.previous + "hrs";
        lastHours[3].innerHTML = "Last Week - " + obj[3].timeframes.daily.previous + "hrs";
        lastHours[4].innerHTML = "Last Week - " + obj[4].timeframes.daily.previous + "hrs";
        lastHours[5].innerHTML = "Last Week - " + obj[5].timeframes.daily.previous + "hrs";

    })

    weeklyBtn.addEventListener("click", function() {
        dailyBtn.classList.remove("active");
        weeklyBtn.classList.add("active");
        monthlyBtn.classList.remove("active");

        currentHours[0].innerHTML = obj[0].timeframes.weekly.current + "hrs";
        currentHours[1].innerHTML = obj[1].timeframes.weekly.current + "hrs";
        currentHours[2].innerHTML = obj[2].timeframes.weekly.current + "hrs";
        currentHours[3].innerHTML = obj[3].timeframes.weekly.current + "hrs";
        currentHours[4].innerHTML = obj[4].timeframes.weekly.current + "hrs";
        currentHours[5].innerHTML = obj[5].timeframes.weekly.current + "hrs";

        lastHours[0].innerHTML = "Last Week - " + obj[0].timeframes.weekly.previous + "hrs";
        lastHours[1].innerHTML = "Last Week - " + obj[1].timeframes.weekly.previous + "hrs";
        lastHours[2].innerHTML = "Last Week - " + obj[2].timeframes.weekly.previous + "hrs";
        lastHours[3].innerHTML = "Last Week - " + obj[3].timeframes.weekly.previous + "hrs";
        lastHours[4].innerHTML = "Last Week - " + obj[4].timeframes.weekly.previous + "hrs";
        lastHours[5].innerHTML = "Last Week - " + obj[5].timeframes.weekly.previous + "hrs";

    })

    monthlyBtn.addEventListener("click", function() {
        dailyBtn.classList.remove("active");
        weeklyBtn.classList.remove("active");
        monthlyBtn.classList.add("active");

        currentHours[0].innerHTML = obj[0].timeframes.monthly.current + "hrs";
        currentHours[1].innerHTML = obj[1].timeframes.monthly.current + "hrs";
        currentHours[2].innerHTML = obj[2].timeframes.monthly.current + "hrs";
        currentHours[3].innerHTML = obj[3].timeframes.monthly.current + "hrs";
        currentHours[4].innerHTML = obj[4].timeframes.monthly.current + "hrs";
        currentHours[5].innerHTML = obj[5].timeframes.monthly.current + "hrs";

        lastHours[0].innerHTML = "Last Week - " + obj[0].timeframes.monthly.previous + "hrs";
        lastHours[1].innerHTML = "Last Week - " + obj[1].timeframes.monthly.previous + "hrs";
        lastHours[2].innerHTML = "Last Week - " + obj[2].timeframes.monthly.previous + "hrs";
        lastHours[3].innerHTML = "Last Week - " + obj[3].timeframes.monthly.previous + "hrs";
        lastHours[4].innerHTML = "Last Week - " + obj[4].timeframes.monthly.previous + "hrs";
        lastHours[5].innerHTML = "Last Week - " + obj[5].timeframes.monthly.previous + "hrs";

    })
}).catch(function (err) {
    console.error("Cannot get the json data file");
    console.error(err);
})


