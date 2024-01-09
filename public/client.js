async function fetchData(url, targetElementId, requestOptions = {}) {
  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();

    // Use json-formatter to format the JSON response
    const formatter = new JSONFormatter(data, 2, { theme: 'light' });
    document.getElementById(targetElementId).innerHTML = '';
    document.getElementById(targetElementId).appendChild(formatter.render());
  } catch (error) {
    console.error('Error fetching data:', error);
    document.getElementById(targetElementId).textContent = 'Error fetching data. Check console for details.';
  }
}

function getCourseType() {
  const coursetype = document.getElementById('course-type').value;
  const baseUrl = "https://deciduous-functional-bit.glitch.me/";
  const finalUrl = `${baseUrl}courses/type/${coursetype}`;

  const finalUrlElement = document.getElementById("final-url-coursetype");
  finalUrlElement.innerText = `Final URL: ${finalUrl}`;
  
  if (finalUrl.trim() !== "") {
        finalUrlElement.style.display = "block";
      }
  fetchData(`https://deciduous-functional-bit.glitch.me/courses/type/${coursetype}`, 'course-type-response');
}

function getCourses() {
  const baseUrl = "https://deciduous-functional-bit.glitch.me/";
  const finalUrl = `${baseUrl}courses/`;

  const finalUrlElement = document.getElementById("final-url-courses");
  finalUrlElement.innerText = `Final URL: ${finalUrl}`;
  
  if (finalUrl.trim() !== "") {
        finalUrlElement.style.display = "block";
      }
  
  fetchData('https://deciduous-functional-bit.glitch.me/courses', 'courses-response');
}

function getCourseDetails() {
  const courseCode = document.getElementById('course-code').value;
  const baseUrl = "https://deciduous-functional-bit.glitch.me/";
  const finalUrl = `${baseUrl}courses/code/${courseCode}`;

  const finalUrlElement = document.getElementById("final-url-coursecode");
  finalUrlElement.innerText = `Final URL: ${finalUrl}`;
  
  if (finalUrl.trim() !== "") {
        finalUrlElement.style.display = "block";
      }
  fetchData(`https://deciduous-functional-bit.glitch.me/courses/code/${courseCode}`, 'course-details-response');
}

function getModules() {
  const courseCode = document.getElementById('course-code-modules').value;
  const baseUrl = "https://deciduous-functional-bit.glitch.me/";
  const finalUrl = `${baseUrl}courses/${courseCode}/modules`;

  const finalUrlElement = document.getElementById("final-url-coursemodule");
  finalUrlElement.innerText = `Final URL: ${finalUrl}`;
  
  if (finalUrl.trim() !== "") {
        finalUrlElement.style.display = "block";
      }
  fetchData(`https://deciduous-functional-bit.glitch.me/courses/${courseCode}/modules`, 'modules-response');
}

function getSubtopics() {
  const courseCode = document.getElementById('course-code-subtopics').value;
  const moduleCode = document.getElementById('module-code-subtopics').value;
  
  const baseUrl = "https://deciduous-functional-bit.glitch.me/";
  const finalUrl = `${baseUrl}courses/${courseCode}/modules/${moduleCode}/subtopics`;

  const finalUrlElement = document.getElementById("final-url-subtopics");
  finalUrlElement.innerText = `Final URL: ${finalUrl}`;
  
  if (finalUrl.trim() !== "") {
        finalUrlElement.style.display = "block";
      }
  
  fetchData(`https://deciduous-functional-bit.glitch.me/courses/${courseCode}/modules/${moduleCode}/subtopics`, 'subtopics-response');
}

function getTextbooks() {
  const courseCode = document.getElementById('course-code-textbooks').value;
  
  const baseUrl = "https://deciduous-functional-bit.glitch.me/";
  const finalUrl = `${baseUrl}courses/${courseCode}/textbooks`;

  const finalUrlElement = document.getElementById("final-url-textbooks");
  finalUrlElement.innerText = `Final URL: ${finalUrl}`;
  
  if (finalUrl.trim() !== "") {
        finalUrlElement.style.display = "block";
      }
  
  
  fetchData(`https://deciduous-functional-bit.glitch.me/courses/${courseCode}/textbooks`, 'textbooks-response');
}

function getReferenceBooks() {
  const courseCode = document.getElementById('course-code-referencebooks').value;
  
  const baseUrl = "https://deciduous-functional-bit.glitch.me/";
  const finalUrl = `${baseUrl}courses/${courseCode}/referencebooks`;

  const finalUrlElement = document.getElementById("final-url-reference");
  finalUrlElement.innerText = `Final URL: ${finalUrl}`;
  
  if (finalUrl.trim() !== "") {
        finalUrlElement.style.display = "block";
      }
  
  fetchData(`https://deciduous-functional-bit.glitch.me/courses/${courseCode}/referencebooks`, 'referencebooks-response');
}
