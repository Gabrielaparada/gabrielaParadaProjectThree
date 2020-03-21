console.log("works")
$(document).ready(function () {
   const stories = [
      {
         id: "unicorn",
         title: "What happens when unicorns poop?",
         completeStory: (pNoun, adjective, pAnimal, pNoun2, verbEd, verb2, noun, adjective2, adjective3 ) => 
            `Unicorns aren't like other ${pNoun}; they're ${adjective}. They look like ${pAnimal}. Some ${pNoun2} don't believe unicorns are ${adjective2} but I believe in them. One thing I've always ${verbEd} about is wether unicorns ${verb2} rainbows or is their ${noun} ${adjective3} like any other animal's`,
         inputs: [
            'Plural Noun', 'Adjective', 'Plural Animal', 'Plural Noun', 'Verb-ed','Verb','Noun', 'Adjective','Adjective'
         ],
      },
      {
         id: "winter",
         title: "Fun Facts about Winter",
         completeStory: (number, noun3, adjective2, noun4, verbIng, verbIng2, verbIng3, beverage, food) =>
            `Winter is one of ${number} seasons of the year. Winter is the time of the year when the ${noun3} is furthest from the earth. The weather tends to be ${adjective2} in winter, with ${noun4} fall and cold temperatures. Some winter sports include ${verbIng}, ${verbIng2}, and ${verbIng3}. Hot ${beverage} with ${food} on top is a popular drink.`,
         inputs: [
            'number', 'adjective', 'noun', 'noun2', 'noun3', 'adjective2', 'noun3', 'verbIng', 'verbIng2', 'verbIng3', 'beverage', 'food'
         ]
      },
      {
         id:'brains',
         title:'Braaaaaiiiins',
         completeStory: (adjective, noun, bodyPart, verb, verb2, pNoun, bodyPart2, adjective2, verb4, adverb3, adjective3) => 
            `The brain is ${adjective} part of the human ${noun} located in the ${bodyPart}. The brain is like a ${adjective} computer that ${verb} the body. People use their brains to ${verb} and ${verb2}, and all human ${pNoun} are controlled by the ${bodyPart2}.
            ${adjective2} Fact: Zombies like to ${verb4} brains, which is ${adverb3} ${adjective3}!`,
         inputs:[
            'Adjective', 'Noun', 'Body Part', 'Verb', 'Verb', 'Plural Noun',
            'Body Part', 'Adjective', 'Verb', 'Verb','Adverb','Adjective'
         ]
      },
      {
         id: 'monster',
         title: 'Is there a monster in my room?',
         completeStory: (verb, verb2, adjective, noun, verbIng, adjective2, verb3, verb4, pNoun, nounFurniture, typeOfMonster, typeOfMonster2) =>
            `Every night before I ${verb} to sleep, I swear I can ${verb2} noises in my closet. It sounds like a ${adjective} ${noun} is ${verbIng} in there and it's so ${adjective2}!.
            I ${verb3} off the lights and try to ${verb4} That's when the ${pNoun} start under my ${nounFurniture}. Is it a monster, or something else, like a ${typeOfMonster} or maybe even a ${typeOfMonster2}`,
         inputs: [
            'Verb', 'Verb', 'Adjective', 'Noun', 'Verb-ing', 'Adjective', 'Verb', 'Verb', 'Plural Noun', 'Noun-Furniture', 'Type of Monster', 'Type of Monster'
            ]
      },

      {
         id: 'pizza',
         title: 'Pizza',
         completeStory: (adjective, nationality, person, noun, adjective2, noun2, adjective3, adjective4, pNoun, noun3, food, food2) =>
            `Pizza was invented by a ${adjective} ${nationality} chef named ${person}. To make pizza, you need to take a lump of ${noun}, and make a thin, round ${adjective2} ${noun2}. Then you cover it with ${adjective3} sauce, ${adjective4} cheese and fresh chopped ${pNoun}. Next you have to bake it in a very hot ${noun3}. Some people like ${food} pizza the best, but my favorite is the ${food2} pizza. If I could, I would eat pizza *number* times a day.`,
            inputs: [
               'Adjective', 'Nationality', 'Person', 'Noun', 'Adjective',
               'Noun', 'Adjective', 'Adjective', 'Plural Noun', 'Noun', 'Food', 'Food'

         ]
      },

         // {
         //    id: 'favoriteFood',
         //    title: ''
         //    completeStory: () =>
         //       inputs: [

         //    ]
         // },
         // {
         //    id: 'starWars',
         //    title: ''
         //    completeStory: () =>
         //       inputs: [

         //    ]
         // },

      {
         id: 'callInSick',
         title: 'Call in sick for work',
         completeStory: (yourName, bodyPart, verb, noun, fakeEmail, adjective, dayOfTheWeek) =>
         `Hello, this is ${yourName}. I think I've got a touch of that ${bodyPart} bug that's been going around, and I'm *adjective*  I wont be able to come in. I'll try and make it by *reasonable hour*, but if not, I'll ${verb} and get some ${noun} done at ${place}. If you need, you can reach me at ${fakeEmail}  Here's hoping I'll be ${adjective} enough to come in ${dayOfTheWeek}.`,
         inputs: [
            'Your name', 'Body part', 'Verb', 'Noun', 'Fake email', 'adjective', 'Day of the week'
         ]
      },
      
   ]
   console.log(stories)


//dynamically add radio buttons   
   $('.leggoButton').on('click', function(){
      $('.notADeveloper').css('display', 'none')
      $('.section2').append(`<h2>Choose your poison</h2>
      <form class="poisonForm">

      <input type="radio" id="unicorn" name="answer" value="winter">
      <label class="poisonLabel" for="unicorn">🦄</label>

      <input type="radio" id="winter" name="answer" value="winter">
      <label class="poisonLabel"  for="winter">❄️</label>
      
      <input type="radio" id="brains" name="answer" value="brains">
      <label class="poisonLabel" for="brains">🧠</label>

      <input type="radio" id="monster" name="answer" value="monster">
      <label class="poisonLabel"  for="monster">👹</label>

      <input type="radio" id="pizza" name="answer" value="pizza">
      <label class="poisonLabel"  for="pizza">🍕</label>

      <input type="radio" id="favoriteFood" name="answer" value="favoriteFood">
      <label class="poisonLabel" for="favoriteFood">🍽💕</label>

      <input type="radio" id="starWars" name="answer" value="starWars">
      <label class="poisonLabel"  for="starWars">✨🛡</label>

      <input type="radio" id="callInSick" name="answer" value="callInSick">
      <label class="poisonLabel" for="callInSick">📞🤒</label>

      <button class="buttonSection2" type="submit">Submit</button>
      </form>`)
      

      //get values from radio buttons
      $(".poisonForm").on('submit',function (e) {
         console.log("button click")
         e.preventDefault()
         const value = $('input[name="answer"]:checked').val()
         console.log(value)
         
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
})

   // select story






// const id = $(this).attr('id');

