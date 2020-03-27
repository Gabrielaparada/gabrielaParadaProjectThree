
$(document).ready(function () {
   $("form").on("submit", function (e) {
      //prevent default
      e.preventDefault()

      //grabbing value
      const adjective = $('#adjective').val()
      const noun = $('#noun').val()
      const noun2 = $('#anotherNoun').val()
      const noun3 = $('#yetAnotherNoun').val()
      const verb = $('#verb').val()

      const stories = [
         `<h2 class="sub-heading">JavaScript</h2>
         JavaScript (JS) is a <span>${adjective}</span>, interpreted, or just-in-time compiled <span>${verb}</span> language with <span>${noun3}</span> functions. While it is most well-known as the scripting <span>${noun}</span> for Web pages. JavaScript is a <span>${adjective}</span>, multi-paradigm, single-threaded, dynamic ${noun}, supporting <span>${noun2}</span> , imperative, and declarative (e.g. functional <span>${verb}</span>) styles.`,

         `<h2 class="sub-heading">Input</h2>
         < input > elements of type <span>${noun}</span> are rendered as simple push <span>${noun}</span>, which can be <span>${verb}</span>  programmed to control ${noun3} functionality anywhere on a webpage as required when assigned an event handler function (typically for the <span>${noun2}</span> event)`,

         `<h2 class="sub-heading">CSS</h2>
         Cascading Style Sheets (CSS) is a <span>${adjective}</span> language used to <span>${verb}</span> the presentation of a <span>${noun3}</span> written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how <span>${noun}</span> should be rendered on screen, on <span>${noun2}</span>, in speech, or on other media.`,

         `<h2 class="sub-heading">Arrays</h2>
         Arrays are list-like <span>${adjective}</span> objects whose prototype has methods to <span>${verb}</span> traversal and mutation operations. Neither the length of a JavaScript array nor the types of its <span>${noun}</span> are fixed. Since an array's <span>${noun3}</span> can change at any time, and data can be stored at non-contiguous locations in the array, JavaScript arrays are not <span>${noun2}</span> to be dense; this depends on how the programmer chooses to use them`,

         `<h2 class="sub-heading">Styling text</h2>
         With the basics of the CSS <span>${noun}</span> covered, the next CSS topic for you to concentrate on is styling <span>${noun}</span> — one of the most <span>${adjective}</span> things you'll do with CSS. Here we look at <span>${noun}</span> styling fundamentals including setting font, boldness, italics, <span>${noun2}</span>, line and letter spacing, drop shadows, and other text features. We round off the module by looking at <span>${verb}</span> fonts to your page, and styling <span>${noun3}</span> and links.`,

         `<h2 class="sub-heading">The THIS keyword</h2>
         A function's this keyword <span>${verb}</span> a little differently in JavaScript compared to other <span>${noun}.</span> It also has some differences between strict mode and non-strict mode.
         In most cases, the <span>${noun2}</span> of this is <span>${adjective}</span> by how a function is called (runtime binding). It can't be set by assignment during <span>${noun3}</span>, and it may be different each time the function is called`
      ]

      const randomStory = stories[Math.floor(Math.random() * stories.length)]

      //hide form
      $('form, h2').css("display", "none")

      //display story
      $('.story').append(randomStory)
      $('.story').append(`<div class="buttonContainer"><a href="./index.html"><br><button class="back">Take me to the beginning!</button></a></div>`).addClass("display")
      $('input').val('')
   })
})




