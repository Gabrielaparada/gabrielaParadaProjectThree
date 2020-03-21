
$(document).ready(function () {
   const stories = [
      {
         id: "unicorn",
         title: "What happens when unicorns 💩?",
         completeStory: (pNoun, adjective, pAnimal, pNoun2, verbEd, verb2, noun, adjective2, adjective3 ) => 
            `Unicorns aren't like other <span>${pNoun}</span>; they're <span>${adjective}</span>. They look like <span>${pAnimal}</span>. Some <span>${pNoun2}</span> don't believe unicorns are <span>${adjective2}</span> but I believe in them. One thing I've always <span>${verbEd}</span> about is wether unicorns <span>${verb2}</span> rainbows or is their <span>${noun}</span> <span>${adjective3}</span> like any other animal's`,
         inputs: [
            'Plural Noun', 'Adjective', 'Plural Animal', 'Plural Noun', 'Verb-ed','Verb','Noun', 'Adjective','Adjective'
         ],
      },
      {
         id: "winter",
         title: "Fun facts about winter",
         completeStory: (number, noun3, adjective2, noun4, verbIng, verbIng2, verbIng3, beverage, food) =>
            `Winter is one of <span>${number}</span> seasons of the year. Winter is the time of the year when the <span>${noun3}</span> is furthest from the earth. The weather tends to be <span>${adjective2}</span> in winter, with <span>${noun4}</span> fall and cold temperatures. Some winter sports include <span>${verbIng},</span> <span>${verbIng2},</span> and <span>${verbIng3}.</span> Hot <span>${beverage}</span> with <span>${food}</span> on top is a popular drink.`,
         inputs: [
            'number', 'adjective', 'noun', 'noun2', 'noun3', 'adjective2', 'noun3', 'verbIng', 'verbIng2', 'verbIng3', 'beverage', 'food'
         ]
      },
      {
         id:'brains',
         title:'Braaaaaiiiins',
         completeStory: (adjective, noun, bodyPart, verb, verb2, pNoun, bodyPart2, adjective2, verb4, adverb3, adjective3) => 
            `The brain is <span>${adjective}</span> part of the human <span>${noun}</span> located in the <span>${bodyPart}.</span> The brain is like a <span>${adjective}</span> computer that <span>${verb}</span> the body. People use their brains to <span>${verb}</span> and <span>${verb2},</span> and all human <span>${pNoun}</span> are controlled by the <span>${bodyPart2}</span>.
            <span>${adjective2}</span> Fact: Zombies like to <span>${verb4}</span> brains, which is <span>${adverb3}</span> <span>${adjective3}</span>!`,
         inputs:[
            'Adjective', 'Noun', 'Body Part', 'Verb', 'Verb', 'Plural Noun',
            'Body Part', 'Adjective', 'Verb', 'Verb','Adverb','Adjective'
         ]
      },
      {
         id: 'monster',
         title: 'Is there a monster in my room?😦',
         completeStory: (verb, verb2, adjective, noun, verbIng, adjective2, verb3, verb4, pNoun, nounFurniture, typeOfMonster, typeOfMonster2) =>
            `Every night before I <span>${verb}</span> to sleep, I swear I can <span>${verb2}</span> noises in my closet. It sounds like a <span>${adjective}</span> <span>${noun}</span> is ${verbIng} in there and it's so <span>${adjective2}</span>!.
            I <span>${verb3}</span> off the lights and try to <span>${verb4}</span> That's when the <span>${pNoun}</span> start under my <span>${nounFurniture}</span>. Is it a monster, or something else, like a <span>${typeOfMonster}</span> or maybe even a <span>${typeOfMonster2}</span>`,
         inputs: [
            'Verb', 'Verb', 'Adjective', 'Noun', 'Verb-ing', 'Adjective', 'Verb', 'Verb', 'Plural Noun', 'Noun-Furniture', 'Type of Monster', 'Type of Monster'
            ]
      },

      {
         id: 'pizza',
         title: 'Pizza💘',
         completeStory: (adjective, nationality, person, noun, adjective2, noun2, adjective3, adjective4, pNoun, noun3, food, food2, number) =>
            `Pizza was invented by a <span>${adjective}</span> <span>${nationality}</span> chef named ${person}. To make pizza, you need to take a lump of <span>${noun}</span>, and make a thin, round <span>${adjective2}</span> <span>${noun2}.</span> Then you cover it with <span>${adjective3}</span> sauce, <span>${adjective4}</span> cheese and fresh chopped <span>${pNoun}.</span> Next you have to bake it in a very hot <span>${noun3}</span>. Some people like <span>${food}</span> pizza the best, but my favorite is the <span>${food2}</span> pizza. If I could, I would eat pizza ${number} times a day.`,
            inputs: [
               'Adjective', 'Nationality', 'Person', 'Noun', 'Adjective',
               'Noun', 'Adjective', 'Adjective', 'Plural Noun', 'Noun', 'Food', 'Food', 'Number'

         ]
      },

         {
            id: 'favoriteFood',
            title: 'Favorite Food',
            completeStory: (food, noun, verb, noun2, food2, place, adjective, place2, adjective2, person, noun3, animal) =>
            `At night I dream of <span>${food}</span> that is as big as a <span>${noun}</span> When I try to take a bite, it <span>${verb}</span> on my <span>${noun2}</span> 
            The best time I ever ate <span>${food2}</span> was at the <span>${place}</span> It tasted <span>${adjective}</span>.But don't ever buy it at <span>${place2}</span> though, it is most <span>${adjective2}</span>. <span>${person}</span> likes it best with <span>${noun3}</span> Be sure to give the leftovers to your <span>${animal}</span>`,
            inputs: [
               'Food', 'Noun', 'Verb', 'Noun', 'Food','Place','Adjective','Place', 'Place', 'Adjective', 'Person','Noun', 'Animal'
            ]
         },
         {
            id: 'bunny',
            title: 'Funny Bunny',
            completeStory: (place, verb, animal, exercise, noun, partOfFace, adjective, vegetable, activity, verb2, verb3, noun3) =>
            `I am writing this email to inform you that something funny happened at <span>${place}</span> today. When I was <span>${verb}</span> the trash out, I stumbled upon a <span>${animal}</span> doing push ups and <span>${exercise}</span>. This <span>${noun}</span> was dressed on a bunny costumer. It had a large <span>${partOfFace}</span> and a cute <span>${adjective}</span> tail. I asked this <span>${vegetable}</span> head what it was doing by the trash cans? He replied, "I am training for the Easter Day <span>${activity}</span> Rabbits always win, so I thought I would <span>${verb2}</span> like one and maybe finally win!"<br>
            I said, "well, good luck! I hope you <span>${verb3}</span> like the <span>${noun3}</span>"`,
            inputs: [
               'Place', 'Verb', 'Animal', 'Exercise', 'Noun','Part of face', 'Adjective', 'Vegetable', 'Activity', 'Verb', 'Verb', 'Noun'
            ]
         },

      {
         id: 'callInSick',
         title: 'Call in sick for work 🤷🏻‍♀️',
         completeStory: (yourName, bodyPart, adjective, time, verb, noun, place, fakeEmail, adjective2, dayOfTheWeek) =>
         `Hello, this is <span>${yourName}</span>. I think I've got a touch of that <span>${bodyPart}</span> bug that's been going around, and I'm <span>${adjective}</span>  I wont be able to come in. I'll try and make it by <span>${time},</span> but if not, I'll <span>${verb}</span> and get some <span>${noun}</span> done at <span>${place}</span>. If you need, you can reach me at <span>${fakeEmail}</span>  Here's hoping I'll be <span>${adjective2}</span> enough to come in <span>${dayOfTheWeek}</span>.`,
         inputs: [
            'Your name', 'Body part','Adjective','Time', 'Verb', 'Noun', 'Place','Fake email', 'adjective', 'Day of the week'
         ]
      },
      
   ]
   console.log(stories)


//dynamically add radio buttons   
   $('.leggoButton').on('click', function(){
      $('.notADeveloper').css('display', 'none')
      $('.section2').removeClass('hidden')
      $('.section2').append(`<h2>Pick your poison</h2>
      <form class="poisonForm">

      <input type="radio" id="unicorn" name="answer" value="unicorn">
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

      <input type="radio" id="bunny" name="answer" value="bunny">
      <label class="poisonLabel"  for="bunny">🤪🐰</label>

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
            $('.section3').removeClass('hidden')
            $('.section3 h2').append(`Fill the spaces below`)
            storyInputs.forEach(function (input){
               $('.fillWords').append(`
               <input class="wordsFromUser" type="text" name="input" id="${input}" placeholder="${input}" required=""><label class="visuallyHidden" for="${input}">${input}</label>`)
            })
            $('.fillWords').append(`<button class="buttonSection3" type="submit">Next</button>`)

            $('.fillWords').on('submit', function(e){
               e.preventDefault();
               $('.section3').css('display', 'none')
               //grab values from user 
               const arrayOfInputs = Array.from($("input[name='input']"))
               const results = arrayOfInputs.map(function (res){
                  return $(res).val()
               })

               $('.section4').removeClass('hidden')
               $('.section4').append(`<a href="notAdeveloper.html"><button class="again">Let's do it again!</button></a>`)
               $('.section4 h3').html((findStory[0].title))
               $('.section4 p').html(findStory[0].completeStory(...results))
               
            })
      });

      
   })
})

   // select story






// const id = $(this).attr('id');

