//add arguments when calling function

let submissions = [
    {
        name: 'Jane',
        score: 95,
        date: '2020-01-24',
        pass: true
    },
    {
        name: 'Joe',
        score: 77,
        date: '2018-05-14',
        pass: true
    },
    {
        name: 'Jack',
        score: 59,
        date: '2019-07-05',
        pass: false
    },
    {
        name: 'Jill',
        score: 88,
        date: '2020-04-22',
        pass: true
    }
];
console.log(submissions);


function addSubmission(array, newName, newScore, newDate) {
       let newSubmission = {
        name: newName,
        score: newScore,
        date: newDate,
        pass: newScore > 60 
       };
       array.push(newSubmission);
}
addSubmission(submissions, 'Link', 86, '2020-01-08');


function deleteSubmissionByIndex(array, index) {
    let byeIndex = array.findIndex(object => object.name === index); {
        array.splice(index, 1)
    }
}


function deleteSubmissionByName(array, name) {
    const index = array.findIndex(object => object.name === name); 
        array.splice(name, 1) 
}



function editSubmission(array, index, newScore) {
   array[index].score = newScore;
} 


function findSubmissionByName(array, name) {  
    array.indexOf(name);
} 


function findLowestScore(array) {
    let lowScore = array[0].score;
    array.forEach(num => {
        if (num.score < lowScore) {
        lowScore = num.score;
    }
}); return lowScore;
} 

function findAverageScore(array) {
    let total = 0;
for(let i = 0; i < grades.length; i++) {
    total += grades[i];
}
return total / grades.length;
}

function filterPassing (array) {
    const passingScore = array.filter(function(submission){
        return submission.score >= 60;
    }) 
}


function filter90AndAbove(array) {
    const topScores = array.filter(function(submission){
        return submission.score >= 90;
    )}
 }
