
let topics = ["HTML", "CSS", "GIT", "Javascript"];
let randomTopic = topics[Math.floor(Math.random() * topics.length)];


function listTopics() {
    for (let x = 0; topics.length; x++) {

        console.log(topics[x]);

    }
}


function selectTopic() {

    if (randomTopic === 'HTML') {
        console.log('Lets study HTML');
    }
    else if (randomTopic === 'CSS') {
        console.log('Lets learn CSS');
    }
    else if (randomTopic === 'Git') {
        console.log('Lets study Git');
    }
    else if (randomTopic === 'Javascript') {
        console.log('Lets study Javascript');
    } else {
        console.log('Please try again!');
    }

}

console.log("Here are the topics we learned through Prework");
listTopics();

console.log("Which Topic should we study first?");
selectTopic();