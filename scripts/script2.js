//Non developer site
$(document).ready(function () {
   const stories = [
      {
         id: "unicorn",
         title: "What happens when unicorns 💩?",
         completeStory: (pNoun, adjective, pAnimal, pNoun2, verbEd, verb2, noun, adjective2, adjective3 ) => 
            `Unicorns aren't like other <span class="green">${pNoun}</span>; they're <span class="green">${adjective}</span>. They look like <span class="green">${pAnimal}</span>. Some <span class="green">${pNoun2}</span> don't believe unicorns are <span class="green">${adjective2}</span> but I believe in them. One thing I've always <span class="green">${verbEd}</span> about is wether unicorns <span class="green">${verb2}</span> rainbows or is their <span class="green">${noun}</span> <span class="green">${adjective3}</span> like any other animal's`,
         inputs: [
            'Plural Noun', 'Adjective', 'Plural Animal', 'Plural Noun', 'Verb-ed','Verb','Noun', 'Adjective','Adjective'
         ],
      },
      {
         id: "winter",
         title: "Fun facts about winter🙅🏻‍♀️",
         completeStory: (number, noun3, adjective2, noun4, verbIng, verbIng2, verbIng3, beverage, food) =>
            `Winter is one of <span class="green">${number}</span> seasons of the year. Winter is the time of the year when the <span class="green">${noun3}</span> is furthest from the earth. The weather tends to be <span class="green">${adjective2}</span> in winter, with <span class="green">${noun4}</span> fall and cold temperatures. Some winter sports include <span class="green">${verbIng}</span>, <span class="green">${verbIng2}</span>, and <span class="green">${verbIng3}</span>. Hot <span class="green">${beverage}</span> with <span class="green">${food}</span> on top is a popular drink.`,
         inputs: [
            'number', 'adjective', 'noun', 'noun2', 'noun3', 'adjective2', 'noun3', 'verbIng', 'verbIng2', 'verbIng3', 'beverage', 'food'
         ]
      },
      {
         id:'brains',
         title:'Braaaaaiiiins👀',
         completeStory: (adjective, noun, bodyPart, verb, verb2, pNoun, bodyPart2, adjective2, verb4, adverb3, adjective3) => 
            `The brain is <span class="green">${adjective}</span> part of the human <span class="green">${noun}</span> located in the <span class="green">${bodyPart}.</span> The brain is like a <span class="green">${adjective}</span> computer that <span class="green">${verb}</span> the body. People use their brains to <span class="green">${verb}</span> and <span class="green">${verb2},</span> and all human <span class="green">${pNoun}</span> are controlled by the <span class="green">${bodyPart2}</span>.
            <span class="green">${adjective2}</span> Fact: Zombies like to <span class="green">${verb4}</span> brains, which is <span class="green">${adverb3}</span> <span class="green">${adjective3}</span>!`,
         inputs:[
            'Adjective', 'Noun', 'Body Part', 'Verb', 'Verb', 'Plural Noun',
            'Body Part', 'Adjective', 'Verb', 'Verb','Adverb','Adjective'
         ]
      },
      {
         id: 'monster',
         title: 'Is there a monster in my room?😦',
         completeStory: (verb, verb2, adjective, noun, verbIng, adjective2, verb3, verb4, pNoun, nounFurniture, typeOfMonster, typeOfMonster2) =>
            `Every night before I <span class="green">${verb}</span> to sleep, I swear I can <span class="green">${verb2}</span> noises in my closet. It sounds like a <span class="green">${adjective}</span> <span class="green">${noun}</span> is <span>${verbIng}</span> in there and it's so <span class="green">${adjective2}</span>!.
            I <span class="green">${verb3}</span> off the lights and try to <span class="green">${verb4}</span> That's when the <span class="green">${pNoun}</span> start under my <span class="green">${nounFurniture}</span>. Is it a monster, or something else, like a <span class="green">${typeOfMonster}</span> or maybe even a <span class="green">${typeOfMonster2}</span>`,
         inputs: [
            'Verb', 'Verb', 'Adjective', 'Noun', 'Verb-ing', 'Adjective', 'Verb', 'Verb', 'Plural Noun', 'Noun-Furniture', 'Type of Monster', 'Type of Monster'
            ]
      },

      {
         id: 'pizza',
         title: 'Pizza💘',
         completeStory: (adjective, nationality, person, noun, adjective2, noun2, adjective3, adjective4, pNoun, noun3, food, food2, number) =>
            `Pizza was invented by a <span class="green">${adjective}</span> <span class="green">${nationality}</span> chef named <span class="green">${person}</span>. To make pizza, you need to take a lump of <span class="green">${noun}</span>, and make a thin, round <span class="green">${adjective2}</span> <span class="green">${noun2}.</span> Then you cover it with <span class="green">${adjective3}</span> sauce, <span class="green">${adjective4}</span> cheese and fresh chopped <span class="green">${pNoun}.</span> Next you have to bake it in a very hot <span class="green">${noun3}</span>. Some people like <span class="green">${food}</span> pizza the best, but my favorite is the <span class="green">${food2}</span> pizza. If I could, I would eat pizza <span class="green">${number}</span> times a day.`,
            inputs: [
               'Adjective', 'Nationality', 'Person', 'Noun', 'Adjective',
               'Noun', 'Adjective', 'Adjective', 'Plural Noun', 'Noun', 'Food', 'Food', 'Number'
         ]
      },
         {
            id: 'favoriteFood',
            title: 'Favorite Food👅',
            completeStory: (food, noun, verb, noun2, food2, place, adjective, place2, adjective2, person, noun3, animal) =>
            `At night I dream of <span class="green">${food}</span> that is as big as a <span class="green">${noun}</span> When I try to take a bite, it <span class="green">${verb}</span> on my <span>${noun2}</span> 
            The best time I ever ate <span>${food2}</span> was at the <span class="green">${place}</span> It tasted <span class="green">${adjective}</span>.But don't ever buy it at <span>${place2}</span> though, it is most <span class="green">${adjective2}</span>. <span class="green">${person}</span> likes it best with <span class="green">${noun3}</span> Be sure to give the leftovers to your <span class="green">${animal}</span>`,
            inputs: [
               'Food', 'Noun', 'Verb', 'Noun', 'Food','Place','Adjective','Place', 'Place', 'Adjective', 'Person','Noun', 'Animal'
            ]
         },
         {
            id: 'bunny',
            title: 'Funny Bunny🤡',
            completeStory: (place, verb, animal, exercise, noun, partOfFace, adjective, vegetable, activity, verb2, verb3, noun3) =>
            `I am writing this email to inform you that something funny happened at <span class="green">${place}</span> today. When I was <span class="green">${verb}</span> the trash out, I stumbled upon a <span class="green">${animal}</span> doing push ups and <span class="green">${exercise}</span>. This <span class="green">${noun}</span> was dressed on a bunny costumer. It had a large <span class="green">${partOfFace}</span> and a cute <span class="green">${adjective}</span> tail. I asked this <span class="green">${vegetable}</span> head what it was doing by the trash cans? He replied, "I am training for the Easter Day <span class="green">${activity}</span> Rabbits always win, so I thought I would <span class="green">${verb2}</span> like one and maybe finally win!"<br>
            I said, "well, good luck! I hope you <span class="green">${verb3}</span> like the <span class="green">${noun3}</span>"`,
            inputs: [
               'Place', 'Verb', 'Animal', 'Exercise', 'Noun','Part of face', 'Adjective', 'Vegetable', 'Activity', 'Verb', 'Verb', 'Noun'
            ]
         },

      {
         id: 'callInSick',
         title: 'Call in sick for work 🤷🏻‍♀️',
         completeStory: (yourName, bodyPart, adjective, time, verb, noun, place, fakeEmail, adjective2, dayOfTheWeek) =>
         `Hello, this is <span class="green">${yourName}</span>. I think I've got a touch of that <span class="green">${bodyPart}</span> bug that's been going around, and I'm <span class="green">${adjective}</span>  I wont be able to come in. I'll try and make it by <span class="green">${time}</span>, but if not, I'll <span class="green">${verb}</span> and get some <span>${noun}</span> done at <span class="green">${place}</span>. If you need, you can reach me at <span class="green">${fakeEmail}</span>  Here's hoping I'll be <span class="green">${adjective2}</span> enough to come in <span class="green">${dayOfTheWeek}</span>.`,
         inputs: [
            'Your name', 'Body part','Adjective','Time', 'Verb', 'Noun', 'Place','Fake email', 'adjective', 'Day of the week'
         ]
      },
      
   ]

//dynamically add radio buttons to the page  
   $('.gigglesButton').on('click', function(){
      $('.notADeveloper').css('display', 'none')
      $('.section2').removeClass('hidden')
      $('.section2').append(`<h2>Pick your poison</h2>
      <form class="poisonForm">

      <input type="radio" id="unicorn" name="answer" value="unicorn">
      <label class="poisonLabel" for="unicorn">🦄💩</label>

      <input type="radio" id="winter" name="answer" value="winter">
      <label class="poisonLabel"  for="winter">❄️🥶</label>
      
      <input type="radio" id="brains" name="answer" value="brains">
      <label class="poisonLabel" for="brains">🧠🤔</label>

      <input type="radio" id="monster" name="answer" value="monster">
      <label class="poisonLabel"  for="monster">👹😨</label>

      <input type="radio" id="pizza" name="answer" value="pizza">
      <label class="poisonLabel"  for="pizza">🍕🍕</label>

      <input type="radio" id="favoriteFood" name="answer" value="favoriteFood">
      <label class="poisonLabel" for="favoriteFood">🍽💕</label>

      <input class="greenRadio" type="radio" id="bunny" name="answer" value="bunny">
      <label class="poisonLabel greenRadio"  for="bunny">🤪🐰</label>

      <input class="greenRadio" type="radio" id="callInSick" name="answer" value="callInSick">
      <label class="poisonLabel greenRadio" for="callInSick">📞🤒</label>

      <button class="buttonSection2 fontFamilyText" type="submit">Submit</button>
      </form>`)
      

      $(".poisonForm").on('submit',function (e) {
         e.preventDefault()
         //get values from radio buttons
         const value = $('input[name="answer"]:checked').val()
      
         //match values with array
         const findStory = stories.filter(function (story) {
            return story['id'] === value;
      })


      //get from story inputs
      const storyInputs = findStory[0].inputs;

      //display form   
      $('.section2').css('display','none')
      $('.section3').removeClass('hidden')
      $('.section3 h2').append(`Fill the spaces below`)
      storyInputs.forEach(function (input){
         $('.fillWords').append(`
         <input class="wordsFromUser" 
         type="text" name="input" id="${input}" placeholder="${input}" required=""><label class="visuallyHidden" for="${input}">${input}</label>`)
      })
      $('.fillWords').append(`<button class="buttonSection3 fontFamilyText" type="submit">Next</button>`)

      //grab values from user 
      $('.fillWords').on('submit', function(e){
         e.preventDefault();
         $('.section3').css('display', 'none')
         const arrayOfInputs = Array.from($("input[name='input']"))
         const results = arrayOfInputs.map(function (res){
            return $(res).val()
         })

         //display story
         $('.section4').removeClass('hidden')
         $('.section4').append(`<button onclick="window.location.href='./notADeveloper.html'" class="again fontFamilyText">
            Let's do it again!
         </button>`)
         $('.section4 h3').html((findStory[0].title))
         $('.section4 p').html(findStory[0].completeStory(...results))git
         
      })
      });
   })
})





