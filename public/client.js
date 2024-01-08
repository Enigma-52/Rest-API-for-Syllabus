async function fetchData(url, targetElementId, requestOptions = {}) {
    try {
      const response = await fetch(url, requestOptions);
      const data = await response.json();
  
      // Use json-formatter to format the JSON response
      const formatter = new JSONFormatter(data, 2, { theme: 'dark' });
      document.getElementById(targetElementId).innerHTML = '';
      document.getElementById(targetElementId).appendChild(formatter.render());
    } catch (error) {
      console.error('Error fetching data:', error);
      document.getElementById(targetElementId).textContent = 'Error fetching data. Check console for details.';
    }
  }
  
  function getCourseType() {
    const coursetype = document.getElementById('course-type').value;
    fetchData(`https://deciduous-functional-bit.glitch.me/courses/type/${coursetype}`, 'course-type-response');
  }
  
  function getCourses() {
    fetchData('https://deciduous-functional-bit.glitch.me/courses', 'courses-response');
  }
  
  function getCourseDetails() {
    const courseCode = document.getElementById('course-code').value;
    fetchData(`https://deciduous-functional-bit.glitch.me/courses/code/${courseCode}`, 'course-details-response');
  }
  
  function getModules() {
    const courseCode = document.getElementById('course-code-modules').value;
    fetchData(`https://deciduous-functional-bit.glitch.me/courses/${courseCode}/modules`, 'modules-response');
  }
  
  function getSubtopics() {
    const courseCode = document.getElementById('course-code-subtopics').value;
    const moduleCode = document.getElementById('module-code-subtopics').value;
    fetchData(`https://deciduous-functional-bit.glitch.me/courses/${courseCode}/modules/${moduleCode}/subtopics`, 'subtopics-response');
  }
  
  function getTextbooks() {
    const courseCode = document.getElementById('course-code-textbooks').value;
    fetchData(`https://deciduous-functional-bit.glitch.me/courses/${courseCode}/textbooks`, 'textbooks-response');
  }
  
  function getReferenceBooks() {
    const courseCode = document.getElementById('course-code-referencebooks').value;
    fetchData(`https://deciduous-functional-bit.glitch.me/courses/${courseCode}/referencebooks`, 'referencebooks-response');
  }
  