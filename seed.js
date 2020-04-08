const { green, red } = require("chalk");
const { db } = require("./server/db");
const Campus = require("./server/db/campus")
const Student = require("./server/db/student")

const studentData=[
  {
    firstName:"Michael",
    lastName:"Scott",
    email:"mscott@dundermifflin.com",
    imageUrl:"https://www.lifeandstylemag.com/wp-content/uploads/2016/08/michael-scott-quote-the-office-2.jpg?fit=1049%2C600",
    gpa:"2.4"
  },
  {
    firstName:"Pam",
    lastName:"Beesley",
    email:"phalpert@dundermifflin.com",
    imageUrl:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/02/08/15/the-dundies.jpeg",
    gpa:"3.3"
  },
  {
    firstName:"Jim",
    lastName:"Halpert",
    email:"jhalpert@dundermifflin.com",
    imageUrl:"https://i.pinimg.com/originals/fc/a7/3b/fca73be82239f623bf006ad4601cb156.jpg",
    gpa:"3.2"
  },
  {
    firstName:"Karen",
    lastName:"Filippelli",
    email:"kfilippelli@dundermifflin.com",
    imageUrl:"https://i.pinimg.com/564x/f1/c6/a6/f1c6a6371a4d209a62d1a6bd14c86c11.jpg",
    gpa:"3.1"
  },
  {
    firstName:"David",
    lastName:"Wallace",
    email:"ceo@dundermifflin.com",
    imageUrl:"https://vignette.wikia.nocookie.net/theoffice/images/a/a4/Suckdezznutz.jpg/revision/latest/scale-to-width-down/340?cb=20180826180928",
    gpa:"2.8"
  },
  {
    firstName:"Dwight",
    lastName:"Schrute",
    email:"dschrute@dundermifflin.com",
    imageUrl:"https://www.lifeandstylemag.com/wp-content/uploads/2015/11/the-office-prank-11.jpg?fit=640%2C360",
    gpa:"3.9"
  },
  {
    firstName:"Holly",
    lastName:"Flax",
    email:"hflax@dundermifflin.com",
    imageUrl:"https://pbs.twimg.com/media/D13ga49WsAIKeP8.jpg",
    gpa:"2.9"
  },
  {
    firstName:"Jan",
    lastName:"Levinson",
    email:"jlevinson@dundermifflin.com",
    imageUrl:"https://lh3.googleusercontent.com/proxy/B2IeUPF6-yF3uh4kix41NNuV725yT4l6HwRTEjVu5ObMzAIgPgRSg_EpbZuLX44ReeBQ0o608iCRWwEfKOv6ioeF7H-oV3U7VkXO6EZzz6FtewnE53zxRpCx6XwfWd7OZPKo4INGePQQTsaxw8vbp_J7hyxE0WxhjCdG",
    gpa:"3.3"
  },
  {
    firstName:"Ryan",
    lastName:"Howard",
    email:"temp@dundermifflin.com",
    imageUrl:"https://vignette.wikia.nocookie.net/theoffice/images/d/d9/Blondryan.jpg/revision/latest?cb=20181107223529",
    gpa:"2.2"
  },
  {
    firstName:"Creed",
    lastName:"Bratton",
    email:"www.creedthoughts.gov.www/creedthoughts",
    imageUrl:"//i.ytimg.com/vi/kNdgPeEeJxw/maxresdefault.jpg",
    gpa:"1.2"
  }
]

const campusData=[
  {
    name:"Scranton",
    address:"1725 Slough Ave",
    description:"The People Persons Papaer People",
    imageUrl:"https://lokagraph.com/wp-content/uploads/2018/05/dunder-Mifflin-building-the-office-where-location.jpg"
  },
  {
    name:"Buffalo",
    address:"1 Bills Dr.",
    description:"",
    imageUrl:"https://www.wanderlustingk.com/wp-content/uploads/2018/07/bigstock-Buffalo-City-Hall-New-York-133868795-copy.jpg"
  },
  {
    name:"Nashua",
    address:"",
    description:"",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_et__sEx4MXC57AluJN3ueRHkOcnCuDczZv6J1zEzAfEx37Jm&usqp=CAU"
  },
  {
    name:"Utica",
    address:"",
    description:"",
    imageUrl:"https://vignette.wikia.nocookie.net/theoffice/images/1/16/Uticabranch.jpg/revision/latest/scale-to-width-down/340?cb=20071102155924"
  },
  {
    name:"Corporate-New York",
    address:"",
    description:"",
    imageUrl:"https://vignette.wikia.nocookie.net/theoffice/images/d/dd/DunderMifflinCorporateOffice.jpg/revision/latest/scale-to-width-down/340?cb=20070823184351"
  }

]

const seed = async () => {
  try {
    await db.sync({ force: true });
    return Campus.bulkCreate(campusData)
    .then(()=> Student.bulkCreate(studentData))
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch(err => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
