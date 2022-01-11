const today = new Date();
let showDate = new Date(today.getFullYear(), today.getMonth(), 1);
const year = showDate.getFullYear();
let month = showDate.getMonth() + 1;

let selectedYear = new Date().getFullYear();
let selectedMonth = new Date().getMonth()  + 1;


let yearStandard = selectedYear;

document.getElementsByClassName("container")[0].style.visibility="hidden";

function datepicker_on(){
    const container = document.getElementsByClassName("container")[0];
    // const monthWindow = document.getElementsByClassName("container")[0];
    // const yearWindow = document.getElementsByClassName("container")[0];

    if (container.style.visibility === "visible") {
        // hiddenで非表示
        container.style.visibility = "hidden";
    } else {
        // visibleで表示
        container.style.visibility = "visible";
    }

    // monthWindow.style.visibility = "hidden";
    // yearWindow.style.visibility = "hidden";
}

function date_input(date){
    const container = document.getElementsByClassName("container")[0];

    document.getElementById( "input_date" ).value = `${selectedYear}-${selectedMonth}-${date}`;
    container.style.visibility = 'hidden';
}


// カレンダー  start---------------------------------------------
document.querySelector('header').innerHTML =
    "<div class='year' onclick='yearWindow_Activate()'>" + selectedYear + "年" + "</div>"  +
    "<div class='month' onclick='monthWindow_Activate()'>" + selectedMonth + "月" + "</div>";

const firstDate = new Date(selectedYear, selectedMonth - 1, 1);
const lastDate = new Date(selectedYear, selectedMonth, 0);

let trTag = "<tr>";

const firstWeek = firstDate.getDay();

for (let i = firstWeek; i > 0; i--) {
    const lastDate = new Date(selectedYear, selectedMonth - 1, 0);
    let n = lastDate.getDate() + 1 - i;
    trTag += "<td id='lastDays'>" + n + "</td>";
}

for (let i = 1; i <= lastDate.getDate(); i++) {
    const date = new Date(selectedYear, selectedMonth - 1, i);
    const week = date.getDay();
    const day = date.getDate();
    if (week === 0) trTag += "<tr>";
    if (week === 0) {
        trTag += "<td id='sun'  onclick='date_input(" + i + ")'>";
    } else if (week === 6) {
        trTag += "<td id='sat'  onclick='date_input(" + i + ")'>";
    } else {
        trTag += "<td  onclick='date_input(" + i + ")'>";
    }

    trTag += day + "</td>";
    if (week === 6) trTag += "</tr>";
}

let lastDayWeek = lastDate.getDay();
if (lastDayWeek !== 6) {
    for (let i = 1; i <= 6 - lastDayWeek; i++) {
        trTag += "<td id='firstDays'>" + i + "</td>";
    }
    trTag += "</tr>";
}

document.getElementById("calendar")
    .innerHTML = "<table>" + trTag + "</table>";

// function back() {
//     showDate.setMonth(showDate.getMonth() - 1);
//     showProcess(showDate);
// }
//
// function next() {
//     showDate.setMonth(showDate.getMonth() + 1);
//     showProcess(showDate);
// }

function back() {
    // const date = new Date(year, selectedMonth, 1);
    // date.setMonth(selectedMonth - 1);
    // // const date = selectedMonth - 1;
    // console.log(date.setMonth)

    // selectedMonth = selectedMonth - 1;
    // console.log(selectedMonth)
    // monthSelected(selectedMonth);

    if(selectedMonth === 1){
        selectedMonth = 12;
        selectedYear -= 1;
    }else{
        selectedMonth -= 1;
    }

    monthSelected(selectedMonth)
    updateMonth_year()
}

function next() {
    // const date = selectedMonth + 1;
    // console.log(date)
    // monthSelected(date)

    // const date = new Date(year, selectedMonth, 1);
    // date.setMonth(selectedMonth + 1);
    // // const date = selectedMonth - 1;
    // console.log(date.getMonth())
    // monthSelected(date.getMonth())

    // selectedMonth = selectedMonth + 1;
    // console.log(selectedMonth)
    // monthSelected(selectedMonth);

    if(selectedMonth === 12){
        selectedMonth = 1;
        selectedYear += 1;
    }else{
        selectedMonth += 1;
    }

    monthSelected(selectedMonth)
    updateMonth_year()
}
// カレンダーEND---------------------------------------------


// monthWindow  start--------------------------------------
document.getElementsByClassName("monthWindow")[0].style.visibility = "hidden";

// function monthWindow_Activate() {
//     const monthWindow = document.getElementsByClassName("monthWindow")[0];
//     const container = document.getElementsByClassName("container")[0];
//
//     if (monthWindow.style.visibility === "visible") {
//         // hiddenで非表示
//         monthWindow.style.visibility = "hidden";
//     } else {
//         // visibleで表示
//         monthWindow.style.visibility = "visible";
//     }
//
//     if (container.style.visibility === "hidden") {
//         // hiddenで非表示
//         container.style.visibility = "visible";
//     } else {
//         // visibleで表示
//         container.style.visibility = "hidden";
//     }
// }

// function monthWindow_Activate_another(yearChange) {
//
//     const monthWindow = document.getElementsByClassName("monthWindow")[0];
//     const container = document.getElementsByClassName("container")[0];
//
//     if (monthWindow.style.visibility === "hidden") {
//         // hiddenで非表示
//         monthWindow.style.visibility = "visible";
//     }
//     // else {
//     //     // visibleで表示
//     //     monthWindow.style.visibility = "visible";
//     // }
//
//     if (container.style.visibility === "hidden") {
//         // hiddenで非表示
//         container.style.visibility = "hidden";
//     }
//     // else {
//     //     // visibleで表示
//     //     container.style.visibility = "hidden";
//     // }
// }

//     const monthList = showDate.getFullYear();
//

// const monthListDate = new Date(today.getFullYear(), today.getMonth(), 1);
// function monthWindow_year_back() {
//     monthListDate.setFullYear(monthListDate.getFullYear() - 1);
//     monthWindow(monthListDate);
// }
//
// function monthWindow_year_next() {
//     monthListDate.setFullYear(monthListDate.getFullYear() + 1);
//     monthWindow(monthListDate);
// }

// const monthListDate = new Date(today.getFullYear(), today.getMonth(), 1);

function monthWindow_year_back() {
    selectedYear = selectedYear - 1;
    console.log(selectedYear)
    yearSelected(selectedYear);
}

function monthWindow_year_next() {
    selectedYear = selectedYear + 1;
    console.log(selectedYear)
    yearSelected(selectedYear);
}

let monthList_Tag = "<tr>";

for(let for_month = 1 ; for_month <= 12 ; for_month++){
    if(for_month === 1){
        monthList_Tag += "<tr><td onclick='mainWindow_Activate();monthSelected(" + for_month + ");'>";
    }else if(for_month === 4){
        monthList_Tag += "<tr><td onclick='mainWindow_Activate();monthSelected(" + for_month + ");'> ";
    }else if (for_month === 7){
        monthList_Tag += "<tr><td onclick='mainWindow_Activate();monthSelected(" + for_month + ");'> ";
    } else if (for_month === 10){
        monthList_Tag += "<tr><td onclick='mainWindow_Activate();monthSelected(" + for_month + ");'> ";
    }else{
        monthList_Tag += "<td onclick='mainWindow_Activate();monthSelected(" + for_month + ");'> ";
    }

    monthList_Tag +=  for_month + "</td>";

    if(for_month === 3){
        monthList_Tag += "</tr>";
    }else if(for_month === 6){
        monthList_Tag += "</tr>";
    }else if(for_month === 9){
        monthList_Tag += "</tr>";
    }
}

document.getElementById("monthList")
    .innerHTML = "<table>" + monthList_Tag +　"</table>";

// function  month_calendar(month_number){
//
//     const container = document.getElementsByClassName("container")[0];
//     const monthWindow = document.getElementsByClassName("monthWindow")[0];
//     if(container.style.visibility === "hidden"){
//         // hiddenで非表示
//         container.style.visibility = "visible";
//     }else{
//         // visibleで表示
//         container.style.visibility = "hidden";
//     }
//
//     if(monthWindow.style.visibility === "visible"){
//         // hiddenで非表示
//         monthWindow.style.visibility = "hidden";
//     }else{
//         // visibleで表示
//         monthWindow.style.visibility = "visible";
//     }
//
//         document.querySelector('header').innerHTML =
//             "<div class='year' onclick='yearWindow_Activate()'>" + year + "年" + "</div>"  +
//             "<div class='month' onclick='monthWindow_Activate()'>" + month_number + "月" + "</div>";
//
//         const firstDate = new Date(year, month_number -1, 1);
//         const lastDate = new Date(year, month_number , 0);
//
//         const firstWeek = firstDate.getDay();
//
//         for (let i = firstWeek; i > 0; i--) {
//             const lastDate = new Date(year, month_number - 1, 0);
//             let n = lastDate.getDate() + 1 - i;
//             trTag += "<td id='lastDays'>" + n + "</td>";
//         }
//
//         for (let i = 1; i <= lastDate.getDate(); i++) {
//             const date = new Date(year, month_number - 1, i);
//             const week = date.getDay();
//             const day = date.getDate();
//             if (week === 0) trTag += "<tr>";
//             if (week === 0) {
//                 trTag += "<td id='sun'>";
//             } else if (week === 6) {
//                 trTag += "<td id='sat'>";
//             } else {
//                 trTag += "<td>";
//             }
//             trTag += day + "</td>";
//             if (week === 6) trTag += "</tr>";
//         }
//
//         let lastDayWeek = lastDate.getDay();
//         if (lastDayWeek !== 6) {
//             for (let i = 1; i <= 6 - lastDayWeek; i++) {
//                 trTag += "<td id='firstDays'>" + i + "</td>";
//             }
//             trTag += "</tr>";
//         }
//
//         document.getElementById("calendar")
//             .innerHTML = "<table>" + trTag + "</table>";
// }

function updateMonth_year() {
    document.getElementById('monthHeader').innerHTML =
        "<div class='month_year' onclick='monthWindow_Activate()'>" + selectedYear + "年" + "</div>";
}

updateMonth_year()

function yearSelected(year) {
    selectedYear = year;
    updateMonth_year()
}

function monthSelected(month) {
    selectedMonth = month;
    month_calendar();
}

function  month_calendar() {

    document.querySelector('header').innerHTML =
        "<div class='year' onclick='yearWindow_Activate()'>" + selectedYear + "年" + "</div>"  +
        "<div class='month' onclick='monthWindow_Activate()'>" + selectedMonth + "月" + "</div>";

    showDate.setFullYear(selectedYear);
    showDate.setMonth(selectedMonth - 1);

    const firstDate = new Date(selectedYear, selectedMonth -1, 1);
    const lastDate = new Date(selectedYear, selectedMonth , 0);

    let trTag = "<tr>";

    const firstWeek = firstDate.getDay();

    for (let i = firstWeek; i > 0; i--) {
        const lastDate = new Date(selectedYear, selectedMonth - 1, 0);
        let n = lastDate.getDate() + 1 - i;
        trTag += "<td id='lastDays'>" + n + "</td>";
    }

    for (let i = 1; i <= lastDate.getDate(); i++) {
        const date = new Date(selectedYear, selectedMonth - 1, i);
        const week = date.getDay();
        const day = date.getDate();
        if (week === 0) trTag += "<tr>";
        if (week === 0) {
            trTag += "<td id='sun'  onclick='date_input(" + i + ")'>";
        } else if (week === 6) {
            trTag += "<td id='sat'  onclick='date_input(" + i + ")'>";
        } else {
            trTag += "<td  onclick='date_input(" + i + ")'>";
        }
        trTag += day + "</td>";
        if (week === 6) trTag += "</tr>";
    }

    let lastDayWeek = lastDate.getDay();
    if (lastDayWeek !== 6) {
        for (let i = 1; i <= 6 - lastDayWeek; i++) {
            trTag += "<td id='firstDays'>" + i + "</td>";
        }
        trTag += "</tr>";
    }

    document.getElementById("calendar")
        .innerHTML = "<table>" + trTag + "</table>";
}
// monthWindow  END----------------------------------------




// yearWindow  start--------------------------------------
document.getElementsByClassName("yearWindow")[0].style.visibility="hidden";

function mainWindow_Activate(){

    const yearWindow = document.getElementsByClassName("yearWindow")[0];
    const monthWindow = document.getElementsByClassName("monthWindow")[0];
    const container = document.getElementsByClassName("container")[0];

    yearWindow.style.visibility = 'hidden';
    monthWindow.style.visibility = 'hidden';
    container.style.visibility = 'visible';
}

function yearWindow_Activate(){

    const yearWindow = document.getElementsByClassName("yearWindow")[0];
    const monthWindow = document.getElementsByClassName("monthWindow")[0];
    const container = document.getElementsByClassName("container")[0];

    yearWindow.style.visibility = 'visible';
    monthWindow.style.visibility = 'hidden';
    container.style.visibility = 'hidden';

    // const yearWindow = document.getElementsByClassName("yearWindow")[0];
    // const container = document.getElementsByClassName("container")[0];
    //
    // if(yearWindow.style.visibility === "visible"){
    //     // hiddenで非表示
    //     yearWindow.style.visibility = "hidden";
    // }else{
    //     // visibleで表示
    //     yearWindow.style.visibility = "visible";
    // }
    //
    // if(container.style.visibility === "visible"){
    //     // hiddenで非表示
    //     container.style.visibility = "hidden";
    // }else{
    //     // visibleで表示
    //     container.style.visibility = "hidden";
    // }
}


function monthWindow_Activate(){
    console.log()
    const yearWindow = document.getElementsByClassName("yearWindow")[0];
    const monthWindow = document.getElementsByClassName("monthWindow")[0];
    const container = document.getElementsByClassName("container")[0];

    yearWindow.style.visibility = 'hidden';
    monthWindow.style.visibility = 'visible';
    container.style.visibility = 'hidden';
}



// function monthWindow_yearWindow(){
//     const yearWindow = document.getElementsByClassName("yearWindow")[0];
//     const monthWindow = document.getElementsByClassName("monthWindow")[0];
//
//     if(yearWindow.style.visibility === "visible"){
//         // hiddenで非表示
//         yearWindow.style.visibility = "hidden";
//     }else{
//         // visibleで表示
//         yearWindow.style.visibility = "visible";
//     }
//
//     if(monthWindow.style.visibility === "visible"){
//         // hiddenで非表示
//         monthWindow.style.visibility = "hidden";
//     }else{
//         // visibleで表示
//         monthWindow.style.visibility = "visible";
//     }
// }


function renderYear(baseDate) {

    const yearListDate = new Date(baseDate.getFullYear(), baseDate.getMonth(), 1);
    const yearList = yearListDate.getFullYear() ;

    let base_plus = yearList + 8;
    let base_minus = yearList - 7;

    document.querySelector('#yearHeader').innerHTML =
        "<div class='yearList_year'>" + base_minus + - + base_plus + "</div>";

    let yearList_Tag = "<tr>";

    for(let yearChange = base_minus  ; yearChange <= base_plus  ; yearChange++){
        if(yearChange === base_minus){
            yearList_Tag += "<tr class='year_row'><td id='yearList' " +
                "onclick='yearSelected(" + yearChange + ");monthWindow_Activate()'> ";
        }else if(yearChange === base_minus + 4){
            yearList_Tag += "<tr class='year_row'><td id='yearList' " +
                "onclick='yearSelected(" + yearChange + ");monthWindow_Activate()'> ";
        }else if (yearChange === base_minus + 8){
            yearList_Tag += "<tr class='year_row'><td id='yearList' " +
                "onclick='yearSelected(" + yearChange + ");monthWindow_Activate()'> ";
        } else if (yearChange === base_minus + 12){
            yearList_Tag += "<tr class='year_row'><td id='yearList' " +
                "onclick='yearSelected(" + yearChange + ");monthWindow_Activate()'> ";
        }else{
            yearList_Tag += "<td id='yearList' " +
                "onclick='yearSelected(" + yearChange + ");monthWindow_Activate()'> ";
        }

        yearList_Tag += yearChange + "</td>";

        if(yearChange === base_minus + 3){
            yearList_Tag += "</tr>";
        }else if(yearChange === base_minus + 7){
            yearList_Tag += "</tr>";
        }else if(yearChange === base_minus + 11){
            yearList_Tag += "</tr>";
        }else if(yearChange === base_minus + 16){
            yearList_Tag += "</tr>";
        }
    }

    document.getElementById("yearWindow_yearList").innerHTML = "<table>" + yearList_Tag + "</table>";
    // yearWindow  END--------------------------------------

}

renderYear(new Date());

function yearWindow_year_back() {
    const date = new Date(yearStandard, 0, 1);
    date.setFullYear(date.getFullYear() - 16);
    renderYear(date);
    yearStandard -= 16;
}

function yearWindow_year_next() {
    const date = new Date(yearStandard, 0, 1);
    date.setFullYear(date.getFullYear() + 16);
    renderYear(date);
    yearStandard += 16;
}





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// カレンダーonclick画面　　start--------------------------------
// function showProcess(showDate) {
//
//     const year = showDate.getFullYear();
//     const month = showDate.getMonth() + 1;
//
//     document.querySelector('header').innerHTML =
//         "<div class='year' onclick='yearWindow_Activate()'>" + selectedYear + "年" + "</div>"  +
//         "<div class='month' onclick='monthWindow_Activate()'>" + selectedMonth + "月" + "</div>";
//
//     const firstDate = new Date(selectedYear, selectedMonth - 1, 1);
//     const lastDate = new Date(selectedYear, selectedMonth, 0);
//
//     let trTag = "<tr>";
//
//     const firstWeek = firstDate.getDay();
//
//     for (let i = firstWeek; i > 0; i--) {
//         const lastDate = new Date(selectedYear, selectedMonth - 1, 0);
//         let n = lastDate.getDate() + 1 - i;
//         trTag += "<td id='lastDays'>" + n + "</td>";
//     }
//
//     for (let i = 1; i <= lastDate.getDate(); i++) {
//         const date = new Date(selectedYear , selectedMonth - 1, i);
//         const week = date.getDay();
//         const day = date.getDate();
//         if (week === 0) trTag += "<tr>";
//         if (week === 0) {
//             trTag += "<td id='sun' onclick='date_input(" + i + ")'>";
//         } else if (week === 6) {
//             trTag += "<td id='sat' onclick='date_input(" + i + ")'>";
//         } else {
//             trTag += "<td onclick='date_input(" + i + ")'>";
//         }
//
//         trTag += day + "</td>";
//         if (week === 6) trTag += "</tr>";
//     }
//
//     let lastDayWeek = lastDate.getDay();
//     if (lastDayWeek !== 6) {
//         for (let i = 1; i <= 6 - lastDayWeek; i++) {
//             trTag += "<td id='firstDays'>" + i + "</td>";
//         }
//         trTag += "</tr>";
//     }
//
//     document.getElementById("calendar")
//         .innerHTML = "<table>" + trTag + "</table>";
// }
// カレンダーonclick画面　　END--------------------------------




// monthWindow onclick画面  start--------------------------------------
function monthWindow(monthListDate) {
    const monthList = monthListDate.getFullYear();
    selectedYear = monthList;
    document.querySelector('#monthHeader').innerHTML =
        "<div class='month_year'>" + monthList + "年" + "</div>";
    // const monthWindow = document.getElementsByClassName("monthWindow")[0];
    // const container = document.getElementsByClassName("container")[0];
    //
    // if(monthWindow.style.visibility === "visible"){
    //     // hiddenで非表示
    //     monthWindow.style.visibility = "hidden";
    // }else{
    //     // visibleで表示
    //     monthWindow.style.visibility = "visible";
    // }
    //
    // if(container.style.visibility === "hidden"){
    //     // hiddenで非表示
    //     container.style.visibility = "visible";
    // }else{
    //     // visibleで表示
    //     container.style.visibility = "hidden";
    // }
}
// monthWindow onclick画面  END--------------------------------------






// yearWindow onclick画面  start--------------------------------------
// function yearWindow(yearListDate) {
//     const yearList = yearListDate.getFullYear();
//     let base_plus = yearList + 8;
//     let base_minus = yearList - 7;
//
//     const yearWindow = document.getElementsByClassName("yearWindow")[0];
//
//     if(yearWindow.style.visibility === "visible"){
//         // hiddenで非表示
//         yearWindow.style.visibility = "hidden";
//     }else{
//         // visibleで表示
//         yearWindow.style.visibility = "visible";
//     }
//
//     document.querySelector('#yearHeader').innerHTML =
//         "<div class='yearList_year'>" + base_minus + - + base_plus + "</div>";
//
//     let yearList_Tag = "<tr>";
//
//     for(let i = base_minus  ; i <= base_plus  ; i++){
//
//         if(i === base_minus){
//             yearList_Tag += "<tr class='year_row'><td id='yearList' onclick='monthWindow_Activate()'> ";
//         }else if(i === base_minus + 4){
//             yearList_Tag += "<tr  class='year_row'><td id='yearList' onclick='monthWindow_Activate()'> ";
//         }else if (i === base_minus + 8){
//             yearList_Tag += "<tr  class='year_row'><td id='yearList' onclick='monthWindow_Activate()'> ";
//         } else if (i === base_minus + 12){
//             yearList_Tag += "<tr  class='year_row'><td id='yearList' onclick='monthWindow_Activate()'> ";
//         }else{
//             yearList_Tag += "<td id='yearList' onclick='monthWindow_Activate()'>";
//         }
//
//         yearList_Tag += i + "</td>";
//
//         if(i === base_minus + 3){
//             yearList_Tag += "</tr>";
//         }else if(i === base_minus + 7){
//             yearList_Tag += "</tr>";
//         }else if(i === base_minus + 11){
//             yearList_Tag += "</tr>";
//         }else if(i === base_minus + 16){
//             yearList_Tag += "</tr>";
//         }
//     }
//
//     document.getElementById("yearWindow_yearList")
//         .innerHTML = "<table>" + yearList_Tag + "</table>";
// }
// yearWindow onclick画面  END--------------------------------------
