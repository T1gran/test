let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

courses.forEach((elem) => {
    if(elem.prices[0] === null)             // по сути от 0
    {
        elem.prices[0] = 0;
    }
    if(elem.prices[1] === null)           // по сути очень большое число
    {
        elem.prices[1] = 10000;
    }
})

let sortCoursesByMin = () => {      //insertion sort
    let n = courses.length;
    for(let i = 1; i < n; i++){
        let current = courses[i];
        let j = i-1;
        while ((j > -1) && (current.prices[0] < courses[j].prices[0])) {
            courses[j+1]= courses[j];
            j--;
        }
        courses[j+1] = current;

    }
    console.log(courses);
}


let filterCourses = (range) => {
    if (range[0] === null) {
        courses.forEach((elem) =>{
            if (elem.prices[0]<range[1]||elem.prices[1]<range[1]){
                console.log(elem);
            }
        })
    }
    else if (range[1] === null) {
        courses.forEach((elem) =>{
            if (elem.prices[0]>range[0]||elem.prices[1]>range[0]){
                console.log(elem);
            }
        })
    }
    else {
        courses.forEach((elem) =>{
            if ((elem.prices[0]>range[0]&&elem.prices[0]<range[1])||(elem.prices[1]>range[0]&&elem.prices[1]<range[1])||
                (elem.prices[0]<range[0]&&elem.prices[1]>range[1])){
                console.log(elem);
            }
        })
    }
}

sortCoursesByMin();
filterCourses(requiredRange1);
filterCourses(requiredRange2);
filterCourses(requiredRange3);
//asdkjhaskjd