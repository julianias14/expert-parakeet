export const questions = [
    // organized into 5 big topics with mini otpics in between
    // topic 1: file set-up

  {
    type: "mc",
    question: "What does <!DOCTYPE html> do?",
    choices: [
                "Declares this file is an HTML file",
                "Starts the HTML code block",
                "Ends an HTML file",
                "Marks a new webpage element"
             ],
    correct: 0,
    topic: "file set-up",
    difficulty: "beginner"
  },
  {
    type: "tf",
    question: "<!DOCTYPE html> needs a closing tag.",
    choices: ["True", "False"],
    correct: 1,
    topic: "file set-up",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "What does the <html> tag do?",
    choices: [
      "It links the CSS stylesheet to the page",
      "It defines the page title shown in the browser tab",
      "It is the root element that wraps all other HTML content",
      "It contains only the visible content of the page"
    ],
    correct: 2,
    topic: "file set-up",
    difficulty: "beginner"
  },
  {
    type: "fill",
    question: "Fill in the blank:\n... <head> <title> Title page </title> _____ ...",
    answer: "</head>",
    topic: "file set-up",
    difficulty: "beginner"
  },
  {
    type: "tf",
    question: "The <head> element is where visible page content like text and images goes.",
    choices: ["True", "False"],
    correct: 1,
    topic: "file set-up",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "What does the <body> tag do?",
    choices: [
        "Contains webpage metadata",
        "Marks the beginning of an HTML code block",
        "Defines the formatting of a text block",
        "Defines all visible page elements"
    ],
    correct: 3,
    topic: "file set-up",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "Which tag sets the title shown in the browser tab?",
    choices: [
      "<meta name='title' content='My Page'>",
      "<title>My Page</title>",
      "<header>My Page</header>",
      "<h1>My Page</h1>"
    ],
    correct: 1,
    topic: "file set-up",
    difficulty: "intermediate"
  },
  {
    type: "fill",
    question: "Complete the HTML snippet:\n<!DOCTYPE html>\n<html lang='en'>\n  <head> ... </head>\n  _____\n    <p>Hello World!</p>\n  </body>\n</html>",
    answer: "<body>",
    topic: "file set-up",
    difficulty: "intermediate"
  },
  {
    type: "fill",
    question: "Complete the meta tag:\n<meta _____ ='UTF-8'>",
    answer: "charset",
    topic: "file set-up",
    difficulty: "advanced"
  },

  // topic 2: basic elements
  {
    type: "mc",
    question: "Which tag is used to define a paragraph in HTML?",
    choices: ["<para>", "<p>", "<pg>", "<text>"],
    correct: 1,
    topic: "basic elements",
    difficulty: "beginner"
  },
  {
    type: "tf",
    question: "There are six levels of heading tags in HTML, from <h1> to <h6>.",
    choices: ["True", "False"],
    correct: 0,
    topic: "basic elements",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "Which heading tag produces the largest text by default?",
    choices: ["<h6>", "<h3>", "<h1>", "<heading>"],
    correct: 2,
    topic: "basic elements",
    difficulty: "beginner"
  },
  {
    type: "fill",
    question: "Fill in the blank to insert a line break inside a paragraph:\n<p>Line one<_____>Line two</p>",
    answer: "br>",
    topic: "basic elements",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "What does the <hr> element do on a webpage?",
    choices: [
      "Highlights a row",
      "Inserts a horizontal dividing line",
      "Inserts a line break",
      "Makes the enclosed text a superscript"
    ],
    correct: 1,
    topic: "basic elements",
    difficulty: "intermediate"
  },
  {
    type: "tf",
    question: "<br> and <hr> are both void elements and do not have a closing tag.",
    choices: ["True", "False"],
    correct: 0,
    topic: "basic elements",
    difficulty: "intermediate"
  },
  {
    type: "mc",
    question: "What is the key difference between <div> and <span>?",
    choices: [
      "<span> is a block element; <div> is an inline element",
      "<div> is a block element; <span> is an inline element",
      "Both are block elements, but <span> is used for layout",
      "They are interchangeable"
    ],
    correct: 1,
    topic: "basic elements",
    difficulty: "advanced"
  },

  // topic 3: advanced elements (href, img, etc)

  {
    type: "mc",
    question: "How do you give the id \"waga\" to an element?",
    choices: [
        "<h1> ... </h1> <id=\"waga\">",
        "<p class=\"waga\"> ...",
        "<p #waga> ...",
        "<h1 id=\"waga\">"
    ],
    correct: 3,
    topic: "ids",
    difficulty: "beginner"
  },
  {
    type: "tf",
    question: "Two different elements on the same page can share the same ID.",
    choices: ["True", "False"],
    correct: 1,
    topic: "ids",
    difficulty: "beginner"
  },
  {
    type: "fill",
    question: "Fill in the blank to give this button a unique ID:\n<button _____=\"submit-btn\">Submit</button>",
    answer: "id",
    topic: "ids",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "How do you select an element with the ID 'toolbar' in CSS?",
    choices: [".toolbar { }", "#toolbar { }", "toolbar { }", "*toolbar { }"],
    correct: 1,
    topic: "ids",
    difficulty: "intermediate"
  },
  {
    type: "mc",
    question: "Which of the following is a practical use case for IDs in HTML?",
    choices: [
      "Applying shared styles to groups of elements",
      "Targeting a specific element for JavaScript or anchor links",
      "Replacing class names when there are too many elements",
      "Defining global CSS variables"
    ],
    correct: 1,
    topic: "ids",
    difficulty: "intermediate"
  },
  {
    type: "tf",
    question: "An element can have both an ID and one or more classes at the same time.",
    choices: ["True", "False"],
    correct: 0,
    topic: "ids",
    difficulty: "intermediate"
  },
  {
    type: "fill",
    question: "Fill in the blank to create an anchor link that jumps to the element with id='contact':\n<a href='_____'>Contact Us</a>",
    answer: "#contact",
    topic: "ids",
    difficulty: "advanced"
  },

  //  - classes - 
  {
    type: "mc",
    question: "How do you add a class called 'box' to a div?",
    choices: [
      "<div class='box'>",
      "<div .box>",
      "<div id='box'>",
      "<div style='box'>"
    ],
    correct: 0,
    topic: "classes",
    difficulty: "beginner"
  },
  {
    type: "tf",
    question: "Multiple HTML elements can share the same class name.",
    choices: ["True", "False"],
    correct: 0,
    topic: "classes",
    difficulty: "beginner"
  },
  {
    type: "fill",
    question: "Fill in the blank to give this paragraph the class 'highlight':\n<p _____='highlight'>Important!</p>",
    answer: "class",
    topic: "classes",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "How do you select elements with the class 'card' in CSS?",
    choices: ["#card { }", ".card { }", "card { }", "@card { }"],
    correct: 1,
    topic: "classes",
    difficulty: "intermediate"
  },
  {
    type: "tf",
    question: "An HTML element can have more than one class applied to it at the same time.",
    choices: ["True", "False"],
    correct: 0,
    topic: "classes",
    difficulty: "intermediate"
  },
  {
    type: "mc",
    question: "Which of the following correctly applies two classes to a single element?",
    choices: [
      "<p class='bold' class='red'>",
      "<p class='bold, red'>",
      "<p class='bold red'>",
      "<p classes='bold red'>"
    ],
    correct: 2,
    topic: "classes",
    difficulty: "intermediate"
  },
  {
    type: "fill",
    question: "Fill in the blank so this div has both the 'flex-container' and 'dark-theme' classes:\n<div class='_____ dark-theme'>",
    answer: "flex-container",
    topic: "classes",
    difficulty: "advanced"
  },

  // — Links —
  {
    type: "mc",
    question: "Which tag is used to create a hyperlink in HTML?",
    choices: ["<link>", "<a>", "<href>", "<url>"],
    correct: 1,
    topic: "links",
    difficulty: "beginner"
  },
  {
    type: "fill",
    question: "Fill in the blank to complete this link to Google:\n<a _____='https://www.google.com'>Go to Google</a>",
    answer: "href",
    topic: "links",
    difficulty: "beginner"
  },
  {
    type: "tf",
    question: "The text placed between <a> and </a> tags is what the user clicks on.",
    choices: ["True", "False"],
    correct: 0,
    topic: "links",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "Which attribute makes a link open in a new browser tab?",
    choices: ["rel='noopener'", "target='_blank'", "open='new'", "tab='true'"],
    correct: 1,
    topic: "links",
    difficulty: "intermediate"
  },
  {
    type: "mc",
    question: "What is the difference between an absolute and a relative URL?",
    choices: [
      "Absolute URLs only work on the same website; relative URLs work everywhere",
      "Absolute URLs include the full domain; relative URLs are relative to the current file's location",
      "They are the same thing",
      "Relative URLs must start with https://"
    ],
    correct: 1,
    topic: "links",
    difficulty: "intermediate"
  },
  {
    type: "tf",
    question: "Setting href='#' on an anchor tag makes it link to the top of the current page.",
    choices: ["True", "False"],
    correct: 0,
    topic: "links",
    difficulty: "intermediate"
  },
 
  // — Images —
  {
    type: "mc",
    question: "Which tag is used to embed an image in HTML?",
    choices: ["<image>", "<img>", "<pic>", "<src>"],
    correct: 1,
    topic: "images",
    difficulty: "beginner"
  },
  {
    type: "fill",
    question: "Fill in the blank to set the image source:\n<img _____='photo.jpg' alt='A photo'>",
    answer: "src",
    topic: "images",
    difficulty: "beginner"
  },
  {
    type: "tf",
    question: "The <img> tag requires a closing tag like </img>.",
    choices: ["True", "False"],
    correct: 1,
    topic: "images",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "What is the purpose of the alt attribute on an <img> tag?",
    choices: [
      "Sets the image dimensions",
      "Provides alternative text if the image fails to load or for screen readers",
      "Links the image to another page",
      "Defines the image file format"
    ],
    correct: 1,
    topic: "images",
    difficulty: "intermediate"
  },
  {
    type: "fill",
    question: "Fill in the blank to set a fixed width of 300 pixels on an image:\n<img src='banner.jpg' alt='Banner' _____='300'>",
    answer: "width",
    topic: "images",
    difficulty: "advanced"
  },

  // Topic 4: Formatting and Style
    // — Commenting —
  {
    type: "mc",
    question: "Which of the following is the correct HTML comment syntax?",
    choices: [
      "// This is a comment",
      "/* This is a comment */",
      "<!-- This is a comment -->",
      "** This is a comment **"
    ],
    correct: 2,
    topic: "comments",
    difficulty: "beginner"
  },
  {
    type: "fill",
    question: "Fill in the blank to make this a valid comment:\n<!___ This is a note -->",
    answer: "--",
    topic: "comments",
    difficulty: "beginner"
  },
  {
    type: "tf",
    question: "HTML comments are visible to users when they view the webpage in a browser.",
    choices: ["True", "False"],
    correct: 1,
    topic: "comments",
    difficulty: "beginner"
  },
  {
    type: "tf",
    question: "HTML comments can span multiple lines.",
    choices: ["True", "False"],
    correct: 0,
    topic: "comments",
    difficulty: "intermediate"
  },
  {
    type: "mc",
    question: "What happens to HTML elements placed inside a comment?",
    choices: [
      "They are rendered but invisible to the user",
      "They throw a syntax error",
      "They are not rendered by the browser",
      "They are executed as JavaScript"
    ],
    correct: 2,
    topic: "comments",
    difficulty: "intermediate"
  },
  {
    type: "tf",
    question: "HTML comments can span multiple lines.",
    choices: ["True", "False"],
    correct: 0,
    topic: "comments",
    difficulty: "intermediate"
  },
 
    // --divs
    {
    type: "mc",
    question: "What type of element is a <div>?",
    choices: ["Inline element", "Block element", "Void element", "Semantic element"],
    correct: 1,
    topic: "divs",
    difficulty: "beginner"
  },
  {
    type: "tf",
    question: "A <div> has built-in visual styling applied by the browser by default.",
    choices: ["True", "False"],
    correct: 1,
    topic: "divs",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "What is the primary purpose of a <div>?",
    choices: [
      "To display images",
      "To create hyperlinks",
      "To group and structure content",
      "To define a paragraph"
    ],
    correct: 2,
    topic: "divs",
    difficulty: "beginner"
  },
  {
    type: "fill",
    question: "Fill in the blank to wrap two paragraphs in a div:\n_____\n  <p>First</p>\n  <p>Second</p>\n</div>",
    answer: "<div>",
    topic: "divs",
    difficulty: "beginner"
  },
    {
    type: "tf",
    question: "Inline styles written in the style attribute take priority over styles defined in an external CSS file.",
    choices: ["True", "False"],
    correct: 0,
    topic: "styles",
    difficulty: "intermediate"
  },
  {
    type: "mc",
    question: "What is the key difference between <div> and <span>?",
    choices: [
      "<div> is block-level; <span> is inline",
      "<div> is inline; <span> is block-level",
      "They are interchangeable",
      "<span> can only wrap text nodes"
    ],
    correct: 0,
    topic: "divs",
    difficulty: "intermediate"
  },
  {
    type: "tf",
    question: "It is valid HTML to nest a <div> inside another <div>.",
    choices: ["True", "False"],
    correct: 0,
    topic: "divs",
    difficulty: "intermediate"
  },
  {
    type: "mc",
    question: "Which of the following is the best reason to prefer a semantic element like <section> over a plain <div>?",
    choices: [
      "<div> cannot contain other block elements",
      "Semantic elements render faster",
      "<div> is deprecated in HTML5",
      "Semantic elements improve accessibility and Search Engine Optimization"
    ],
    correct: 3,
    topic: "divs",
    difficulty: "advanced"
  },

  // — Layout —
  {
    type: "tf",
    question: "The <header> element can only appear once per HTML page.",
    choices: ["True", "False"],
    correct: 1,
    topic: "layout",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "Which semantic element is best for wrapping the primary content of a page — content not repeated across pages like sidebars or footers?",
    choices: ["<section>", "<article>", "<main>", "<div>"],
    correct: 2,
    topic: "layout",
    difficulty: "beginner"
  },
  {
    type: "fill",
    question: "Fill in the blank with the element for site-wide bottom content like copyright info:\n<_____>\n  <p>&copy; 2024 My Site</p>\n</_____>",
    answer: "footer",
    topic: "layout",
    difficulty: "beginner"
  },
  {
    type: "tf",
    question: "Using semantic layout tags like <main> and <footer> instead of plain <div>s helps screen readers understand page structure.",
    choices: ["True", "False"],
    correct: 0,
    topic: "layout",
    difficulty: "intermediate"
  },
  {
    type: "mc",
    question: "Which layout best describes an <aside> element?",
    choices: [
      "The primary content area of the page",
      "A grouped set of navigation links",
      "Content tangentially related to the main content, like a sidebar",
      "A reusable, self-contained piece of content"
    ],
    correct: 2,
    topic: "layout",
    difficulty: "advanced"
  },
 
  // — CSS —
  {
    type: "mc",
    question: "Which of the following correctly links an external CSS file in HTML?",
    choices: [
      "<style src='styles.css'>",
      "<link rel='stylesheet' href='styles.css'>",
      "<css href='styles.css'>",
      "<script src='styles.css'>"
    ],
    correct: 1,
    topic: "styles",
    difficulty: "beginner"
  },
  {
    type: "fill",
    question: "Fill in the blank to set a paragraph's text color to red using inline CSS:\n<p style='color: _____'>Hello</p>",
    answer: "red",
    topic: "styles",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "Which CSS comment syntax is correct?",
    choices: [
      "<!-- This is a comment -->",
      "// This is a comment",
      "/* This is a comment */",
      "** This is a comment **"
    ],
    correct: 2,
    topic: "styles",
    difficulty: "intermediate"
  },
  {
    type: "fill",
    question: "Fill in the blank to complete this CSS rule that centers text in a paragraph:\np {\n  text-align: _____;\n}",
    answer: "center",
    topic: "styles",
    difficulty: "intermediate"
  },

  // topic 5: interactables
  // — Buttons & Inputs —
  {
    type: "mc",
    question: "Which tag creates a clickable button in HTML?",
    choices: ["<click>", "<input type='click'>", "<button>", "<press>"],
    correct: 2,
    topic: "buttons",
    difficulty: "beginner"
  },
  {
    type: "tf",
    question: "A <button> element must be placed inside a <form> to work.",
    choices: ["True", "False"],
    correct: 1,
    topic: "buttons",
    difficulty: "beginner"
  },
  {
    type: "fill",
    question: "Fill in the blank to create a text input field:\n<input _____='text' placeholder='Enter name'>",
    answer: "type",
    topic: "buttons",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "What is the default type of a <button> element inside a <form>?",
    choices: ["button", "reset", "submit", "input"],
    correct: 2,
    topic: "buttons",
    difficulty: "intermediate"
  },
  {
    type: "mc",
    question: "Which input type renders as a checkbox?",
    choices: [
      "<input type='check'>",
      "<input type='checkbox'>",
      "<input type='tick'>",
      "<input type='boolean'>"
    ],
    correct: 1,
    topic: "buttons",
    difficulty: "intermediate"
  },
  {
    type: "tf",
    question: "The disabled attribute on a <button> prevents it from being clicked.",
    choices: ["True", "False"],
    correct: 0,
    topic: "buttons",
    difficulty: "intermediate"
  },
  {
    type: "fill",
    question: "Fill in the blank to associate this label with the input (so clicking the label focuses the input):\n<label for='email'>Email</label>\n<input type='email' _____='email'>",
    answer: "id",
    topic: "buttons",
    difficulty: "advanced"
  },
 
  // — iFrames —
  {
    type: "mc",
    question: "What does an <iframe> element do?",
    choices: [
      "Creates an interactive form",
      "Embeds another webpage inside the current page",
      "Displays a full-screen image",
      "Links to an external stylesheet"
    ],
    correct: 1,
    topic: "iframes",
    difficulty: "beginner"
  },
  {
    type: "fill",
    question: "Fill in the blank to embed a webpage in an iframe:\n<iframe _____='https://example.com'></iframe>",
    answer: "src",
    topic: "iframes",
    difficulty: "beginner"
  },
  {
    type: "tf",
    question: "You can control the width and height of an <iframe> using the width and height attributes.",
    choices: ["True", "False"],
    correct: 0,
    topic: "iframes",
    difficulty: "beginner"
  },
  {
    type: "mc",
    question: "Which attribute removes the border around an <iframe>?",
    choices: [
      "border='0'",
      "frameborder='0'",
      "style='no-border'",
      "outline='none'"
    ],
    correct: 1,
    topic: "iframes",
    difficulty: "intermediate"
  },
  {
    type: "fill",
    question: "Fill in the blank to restrict what an embedded iframe is allowed to do:\n<iframe src='https://example.com' _____=''>",
    answer: "sandbox",
    topic: "iframes",
    difficulty: "advanced"
  },
 
  // — Tables —
  {
    type: "mc",
    question: "Which tag is used to create a table in HTML?",
    choices: ["<tab>", "<grid>", "<table>", "<tbl>"],
    correct: 2,
    topic: "tables",
    difficulty: "beginner"
  },
  {
    type: "fill",
    question: "Fill in the blank to complete this table row with one cell:\n<tr>\n  <_____>Data</_____>\n</tr>",
    answer: "td",
    topic: "tables",
    difficulty: "beginner"
  },
  {
    type: "tf",
    question: "The <th> element creates a header cell that is bold and centered by default.",
    choices: ["True", "False"],
    correct: 0,
    topic: "tables",
    difficulty: "intermediate"
  },
  {
    type: "mc",
    question: "What is the correct nesting order for a basic HTML table?",
    choices: [
      "<table> → <td> → <tr>",
      "<table> → <tr> → <td>",
      "<table> → <th> → <tr>",
      "<tr> → <table> → <td>"
    ],
    correct: 1,
    topic: "tables",
    difficulty: "intermediate"
  },
  {
    type: "fill",
    question: "Fill in the blank to make a table cell span two columns:\n<td _____='2'>Merged</td>",
    answer: "colspan",
    topic: "tables",
    difficulty: "advanced"
  },
];