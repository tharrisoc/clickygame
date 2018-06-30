// PSEUDOCODE  (partial)

/*

var score = 0;
var topScore= 0;

var rootURL = '/public/img';

var pictureNames = [
     'cover01', 'cover02', 'cover03',
     'cover04', 'cover05', 'cover06',
     'cover07', 'cover08', 'cover09',
     'cover10', 'cover11', 'cover12'
];

// When a picture is clicked, set its corresponding boolean to true
var clicked = [ false, false, false,
                false, false, false,
                false, false, false,
                false, false, false
            ];


Picture Click Handler() {
  Determine index of clicked picture
  if (clicked[index] === true) {
      if ( score > topScore ) {
          topScore = score;
      }

      score = 0;
  } else {
      ++score;
      clicked[index] = true;
  }

  Update Navbar Text

  shufflePictures()

}

function shufflePictures() {
  var randIndices = Create a Random Array of integer strings from 01 to 12 inclusive

  for (var i = 0, i < 12, i++) {
      Set pictureNames[i] to "cover" + randIndices[i]
      Set the src attribute of the next .picture class item to rootURL + pictureNames[i]
  }

  Do corresponding reordering of clicked array
}
  
*/