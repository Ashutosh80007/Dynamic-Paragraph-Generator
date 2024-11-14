Dynamic Paragraph Generator with JavaScript:

Project Description:
This project is a simple JavaScript-based tool for dynamically generating, deleting, and managing paragraphs on a webpage. The user can:

Create new paragraphs with each button click.
Delete one paragraph at a time.
Delete All paragraphs at once.

This project demonstrates basic DOM manipulation and event handling in JavaScript.

Features:
Create Button: Adds a new paragraph to the page with each click.
Delete Button: Removes the most recently created paragraph.
Delete All Button: Clears all paragraphs from the page.

Technologies Used:
HTML: For structure.
CSS: For basic styling (if any).
JavaScript: For functionality, including DOM manipulation and event handling.

Usage:
Clone the repository: https://github.com/Ashutosh80007/Dynamic-Paragraph-Generator.git
Open the project folder and run index.html in your browser.
Use the buttons to add, delete, and manage paragraphs dynamically.

Example Code Snippet:
Here’s a snippet that showcases the basic JavaScript logic:
// Sample function for creating a paragraph
function createParagraph() {
  const para = document.createElement("p");
  para.innerText = "This is a new paragraph";
  document.body.appendChild(para);
}

Future Enhancements:
Add styling to make the layout more visually appealing.
Implement animations for adding and removing paragraphs.

License:
This project is open-source and available under the MIT License.
