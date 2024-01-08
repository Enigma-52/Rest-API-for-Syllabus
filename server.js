// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

const courses = require('./data.js');

app.get("/", (req, res) => {
  res.sendFile('public/index.html' , { root : __dirname});
});

app.get("/courses", (req, res) => {
  res.json(courses);
});

// Course details endpoint
app.get("/courses/code/:code", (req, res) => {
  const courseCode = req.params["code"];
  let course;

  for (let i = 0; i < courses.length; i++) {
    if (courses[i].coursecode === courseCode) {
      course = courses[i];
      break;
    }
  }

  if (!course) {
    return res.status(404).json({ error: "Course not found" });
  }

  res.json(course);
});

app.get("/courses/type/:type", (req, res) => {
  const courseType = req.params["type"];
  const matchingCourses = [];

  for (let i = 0; i < courses.length; i++) {
    if (courses[i].coursetype === courseType) {
      matchingCourses.push(courses[i]);
    }
  }

  if (matchingCourses.length === 0) {
    return res.status(404).json({ error: "Courses not found for the specified type" });
  }

  res.json(matchingCourses);
});


// Modules endpoint
app.get("/courses/:code/modules", (req, res) => {
  const courseCode = req.params.code;
  let modules;

  for (let i = 0; i < courses.length; i++) {
    if (courses[i].coursecode === courseCode) {
      modules = courses[i].modules;
      break;
    }
  }

  if (!modules) {
    return res.status(404).json({ error: "Course not found" });
  }

  res.json(modules);
});

// Subtopics endpoint
app.get("/courses/:code/modules/:module/subtopics", (req, res) => {
  const courseCode = req.params.code;
  const moduleCode = parseInt(req.params.module); // Convert to integer

  // Find the course with the given code
  const course = courses.find((c) => c.coursecode === courseCode);

  if (!course) {
    return res.status(404).json({ error: "Course not found" });
  }

  // Find the module within the course
  const moduleData = course.modules.find((mod) => mod.hasOwnProperty(`module${moduleCode}`));

  if (!moduleData) {
    return res.status(404).json({ error: "Module not found" });
  }

  // Extract and return the subtopics
  const subtopics = moduleData[`module${moduleCode}`].subtopics;
  res.json(subtopics);
});


// Textbooks endpoint
app.get("/courses/:code/textbooks", (req, res) => {
  const courseCode = req.params.code;
  let textbooks;

  for (let i = 0; i < courses.length; i++) {
    if (courses[i].coursecode === courseCode) {
      textbooks = courses[i].textbooks;
      break;
    }
  }

  if (!textbooks) {
    return res.status(404).json({ error: "Course not found" });
  }

  res.json(textbooks);
});

// Reference books endpoint
app.get("/courses/:code/referencebooks", (req, res) => {
  const courseCode = req.params.code;
  let referencebooks;

  for (let i = 0; i < courses.length; i++) {
    if (courses[i].coursecode === courseCode) {
      referencebooks = courses[i].referencebooks;
      break;
    }
  }

  if (!referencebooks) {
    return res.status(404).json({ error: "Course not found" });
  }

  res.json(referencebooks);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
