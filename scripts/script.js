//Developer Site 
$(document).ready(function () {
   $("form").on("submit", function (e) {
      //prevent default
      e.preventDefault()

      //grabbing value from user and putting it on a variable
      const adjective = $('#adjective').val()
      const noun = $('#noun').val()
      const noun2 = $('#anotherNoun').val()
      const noun3 = $('#yetAnotherNoun').val()
      const verb = $('#verb').val()

      //data for app
      const stories = [
         `<h2 class="subHeading fontFamilyDev">JavaScript</h2>
         JavaScript (JS) is a <span>${adjective}</span>, interpreted, or just-in-time compiled <span>${verb}</span> language with <span>${noun3}</span> functions. While it is most well-known as the scripting <span>${noun}</span> for Web pages. JavaScript is a <span>${adjective}</span>, multi-paradigm, single-threaded, dynamic ${noun}, supporting <span>${noun2}</span> , imperative, and declarative (e.g. functional <span>${verb}</span>) styles.`,

         `<h2 class="subHeading fontFamilyDev">Input</h2>
         < input > elements of type <span>${noun}</span> are rendered as simple push <span>${noun}</span>, which can be <span>${verb}</span>  programmed to control ${noun3} functionality anywhere on a webpage as required when assigned an event handler function (typically for the <span>${noun2}</span> event)`,

         `<h2 class="subHeading fontFamilyDev">CSS</h2>
         Cascading Style Sheets (CSS) is a <span>${adjective}</span> language used to <span>${verb}</span> the presentation of a <span>${noun3}</span> written in HTML or XML. CSS describes how <span>${noun}</span> should be rendered on screen, on <span>${noun2}</span>, in speech, or on other media.`,

         `<h2 class="subHeading  fontFamilyDev">Arrays</h2>
         Arrays are list-like <span>${adjective}</span> objects whose prototype has methods to <span>${verb}</span> traversal and mutation operations. Neither the length of a JavaScript array nor the types of its <span>${noun}</span> are fixed. Since an array's <span>${noun3}</span> can change at any time, and data can be stored at non-contiguous locations in the array, JavaScript arrays are not <span>${noun2}</span> to be dense; this depends on how the programmer chooses to use them`,

         `<h2 class="subHeading fontFamilyDev">Styling text</h2>
         With the basics of the CSS <span>${noun}</span> covered, the next CSS topic for you to concentrate on is styling <span>${noun}</span> — one of the most <span>${adjective}</span> things you'll do with CSS. Here we look at <span>${noun}</span> styling fundamentals including setting font, boldness, italics, <span>${noun2}</span>, line and letter spacing, drop shadows, and other text features. We round off the module by looking at <span>${verb}</span> fonts to your page, and styling <span>${noun3}</span> and links.`,

         `<h2 class="subHeading fontFamilyDev">The THIS keyword</h2>
         A function's this keyword <span>${verb}</span> a little differently in JavaScript compared to other <span>${noun}.</span> It also has some differences between strict mode and non-strict mode.
         In most cases, the <span>${noun2}</span> of this is <span>${adjective}</span> by how a function is called (runtime binding). It can't be set by assignment during <span>${noun3}</span>, and it may be different each time the function is called`,

         `<h2 class="subHeading fontFamilyDev">Modules</h2>
         JavaScript code modules let multiple <span>${adjective}</span> JavaScript <span>${noun}</span> share <span>${noun2}</span>. For example, a module could be used by Firefox itself as well as by <span>${noun3}</span>, in order to <span>${verb}</span> code duplication.
         `,

         `<h2 class="subHeading fontFamilyDev">Import</h2>
         The <span>${adjective}</span> import statement is used to <span>${verb}</span> bindings which are exported by another <span>${noun}</span>. Imported modules are in strict mode whether you declare them as <span>${noun2}</span> or not. The import statement cannot be used in embedded <span>${noun3}</span> unless such script has a type="module".
         `
      ]


      const randomStory = stories[Math.floor(Math.random() * stories.length)]

      //hide form
      $('form, h2').css("display", "none")

      //choosing a random story
      $('.story').append(randomStory)

      //display story
      $('.story').append(`
         <div class="buttonContainer"><br>
            <button class="back fontFamilyText" onclick="window.location.href='./index.html'">Take me to the beginning!</button>
         </div>`).addClass("display")
      $('input').val('')
   })
})




