# Rest API for Syllabus
 
# API Endpoints [ Main URL : https://deciduous-functional-bit.glitch.me/]

## 1. Get All Courses
- **Endpoint:** `/courses`
- **Method:** GET
- **Description:** Retrieve a list of all courses.

## 2. Get Course Details by Code
- **Endpoint:** `/courses/code/:code`
- **Method:** GET
- **Description:** Retrieve details for a specific course using its code.

## 3. Get Courses by Type
- **Endpoint:** `/courses/type/:type`
- **Method:** GET
- **Description:** Retrieve a list of courses based on the specified type.

## 4. Get Modules for a Course
- **Endpoint:** `/courses/:code/modules`
- **Method:** GET
- **Description:** Retrieve the modules for a specific course using its code.

## 5. Get Subtopics for a Module
- **Endpoint:** `/courses/:code/modules/:module/subtopics`
- **Method:** GET
- **Description:** Retrieve subtopics for a specific module of a course.

## 6. Get Textbooks for a Course
- **Endpoint:** `/courses/:code/textbooks`
- **Method:** GET
- **Description:** Retrieve textbooks for a specific course using its code.

## 7. Get Reference Books for a Course
- **Endpoint:** `/courses/:code/referencebooks`
- **Method:** GET
- **Description:** Retrieve reference books for a specific course using its code.
