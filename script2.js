console.log("works")
$(document).ready(function () {
   const stories = [
      {
         id: "unicorn",
         title: "What happens when unicorns poop?",
         completeStory: (pNoun, adjective, pAnimal, pNoun2, adjective2, color, noun, pNoun3, adjective3, verb, pNoun4, verbEd, verb2, noun5, adjective4, adjective5 ) => `Unicorns aren't like other ${pNoun}; they're ${adjective}. They Look like ${pAnimal}, with ${pNoun2} for feet and a ${adjective2} mane of hair. But unicorns are ${color} and have a ${adjective3} ${noun} on their heads. Some ${pNoun3} don't believe unicorns are ${adjective4} but I believe in them. I would love to ${verb} a unicorn to faraway ${pNoun4} One thins i've always ${verbEd} about is wether unicorns ${verb2} rainbows or is their ${noun5} ${adjective5} like any other animal's`,
         inputs: [
            'pNoun', 'adjective', 'pAnimal', 'pNoun2', 'adjective2', 'color', 'adjective3', 'noun', 'pNoun3', 'adjective3', 'verb', 'pNoun4', 'verbEd', 'verb2', 'noun5', 'adjective4', 'adjective5'
         ],
         placeholders: [
         'Plural Noun', 'Adjective', 'Animal Plural', 'Plural Noun ', 'Adjective', 'Color', 'Adjective', 'Noun', 'Plural Noun', 'Verb-ed'
         ]
      },
      {
         id: "winter",
         title: "Fun Facts about Winter",
         completeStory: (number, adjective, noun, noun2, noun3, adjective2, noun4, verbIng, verbIng2, verbIng3, beverage, food) =>
         `Winter is one of ${number} seasons of the year. The other seasons are ${adjective} ${noun} and ${noun2} Winter is the time of the year when the ${noun3} is furthest from the earth. The weather tends to be ${adjective2} in winter, with ${noun4} fall and cold temperatures. Some winter sports include ${verbIng}, ${verbIng2}, and ${verbIng3}. Hot ${beverage} with ${food} on top is a popular drink.`,
         inputs: [
            'number', 'adjective', 'noun', 'noun2', 'noun3', 'adjective2', 'noun3', 'verbIng', 'verbIng2', 'verbIng3', 'beverage', 'food'
         ]
      }
   ]
   console.log(stories)


//dynamically add radio buttons   
   $('.arrow').on('click', function(){
      $('.notADeveloper').css('display', 'none')
      $('.section2').append(`<h2>Choose your poison</h2>
      <form class="poisonForm"><label for="unicorn">🦄💩</label>
      <input type="radio" id="unicorn" name="answer" value="unicorn">
      <label for="winter">❄️</label>
      <input type="radio" id="winter" name="answer" value="winter">
      <button class="buttonSection2" type="submit">Submit</button></form>`)

      //get values from radio buttons
      $(".poisonForm").on('submit',function (e) {
         e.preventDefault()
         const value = $('input[name="answer"]:checked').val()
         
         
         //match values with array
         const findStory = stories.filter(function (story) {
            return story['id'] === value;
         })
         

         //get from story inputs
         const storyInputs = findStory[0].inputs;
         
         
         
            //display input options    
            $('.section2').css('display','none')
            storyInputs.forEach(function (input){
               $('.fillWords').append(`
               <input class="wordsFromUser" type="text" name="input" id="${input}" placeholder="${input}" required=""><label class="visuallyHidden" for="${input}">${input}</label>`)
            })
            $('.fillWords').append(`<button class="buttonSection3" type="submit">click me</button>`)

            $('.fillWords').on('submit', function(e){
               e.preventDefault();
               $('.section3').css('display', 'none')
               //grab values from user 
               const arrayOfInputs = Array.from($("input[name='input']"))
               const results = arrayOfInputs.map(function (res){
                  return $(res).val()
               })

               console.log(findStory[0].completeStory(...results))
            })
      });

      
   })


   // select story

   const { completeStory, inputs } = stories[0]

   inputs.map(input => {
      // add input to html with jquery append
   })





// const id = $(this).attr('id');
});
