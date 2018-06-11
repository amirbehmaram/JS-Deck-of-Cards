var Deck = (function() {

   // Variables
   var cardValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'J', 'Q', 'K'];
   var cards = [];

   return {

      // Create deck
      create: function() {
        // Reset the deck to prevent the addition of more cards
        cards = [];

         // Loop through each possible card value and add four of them to the card deck
         cardValues.forEach(function(item) {
            for(var i = 0; i < 4; i++) {
               cards.push(item);
            }
         })
      },

      // Shuffle the deck
      shuffle: function() {
         /**
          * Randomize array element order in-place.
          * Using Durstenfeld shuffle algorithm.
          * Found at: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/12646864#12646864
          */
         for (var i = cards.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = cards[i];
            cards[i] = cards[j];
            cards[j] = temp;
        }
      },

      /* Cut the deck: Take the top half and put it on the bottom half
       * This is working off the assumption that the first item in the card
       * array is on the bottom of the deck.
      */
      cut: function() {
         // Calculate half the length of the deck, splice the top half off into its own array
         var halfArrLength = Math.ceil(cards.length / 2);
         var topHalf = cards.splice(halfArrLength, cards.length);

         // Concat the top half back onto cards which now only has the bottom half in it
         cards = cards.concat(topHalf);
      },

      /* Deal the top card from the deck
       * This is working off the assumption that the last item in the card
       * array is on the top of the deck.
      */
      deal: function() {
         // Get the top card, then slice it off the array
         var topCard = cards[cards.length - 1];
         cards = cards.slice(0,cards.length - 1);
         return topCard;
      },

      // Deal a random card from the deck
      dealRandom: function() {
         // Generate a random index, then splice that item out after getting the value
         var randomIndex = Math.floor(Math.random() * cards.length);
         var card = cards[randomIndex];
         cards = cards.splice(randomIndex, 1);

         return card;
      }
   };

})();

Deck.create();
Deck.shuffle();
Deck.cut();
console.log(Deck.deal());
console.log(Deck.dealRandom());
