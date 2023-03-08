const videoJSON = {
  "videos": [
    {
      "id": 1,
      "title": "Introduction to JavaScript",
      "description": "Learn the basics of JavaScript programming",
      "length": "2:30",
      "category": "Programming",
      "views": 1000,
      "likes": 200,
      "dislikes": 10,
      "comments": [
        {
          "user": "John",
          "comment": "Great tutorial!"
        },
        {
          "user": "Sarah",
          "comment": "Thanks for the help!"
        }
      ]
    },
    {
      "id": 2,
      "title": "Introduction to HTML",
      "description": "Learn the basics of HTML programming",
      "length": "3:00",
      "category": "Web Development",
      "views": 1500,
      "likes": 300,
      "dislikes": 20,
      "comments": [
        {
          "user": "David",
          "comment": "Awesome tutorial!"
        },
        {
          "user": "Emily",
          "comment": "Really helpful, thanks!"
        }
      ]
    },
    {
      "id": 3,
      "title": "Introduction to CSS",
      "description": "Learn the basics of CSS programming",
      "length": "4:00",
      "category": "Web Development",
      "views": 2000,
      "likes": 400,
      "dislikes": 30,
      "comments": [
        {
          "user": "Mike",
          "comment": "Great job, keep it up!"
        },
        {
          "user": "Jennifer",
          "comment": "Excellent tutorial, thank you!"
        }
      ]
    }
  ]
}
// SAMPLE OUTPUT
// [{ "1" : ["Great tutorial!", "Thanks for the help!"] }, ...] 

// create an array of objects where the key is the id of the video and the value are an 
// array of comment text to that video

const objectComment = ({videos}) => videos.reduce((arr, video) => {
        const obj = {};
        const {id, comments} = video;
        obj[id] = comments.map(({comment}) => comment)
        arr.push(obj)
        return arr;
}, [])

console.log(objectComment(videoJSON))