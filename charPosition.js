var args = process.argv.slice(2);


function charCount(stringInput){
  stringInput = stringInput.join("");
  //split deletes all whitespace from stringInput
  stringInput = stringInput.split("");
  var object = {};
  for (var i = 0; i < stringInput.length; i++){
    var character = stringInput[i];
    //console.log(object[character]);
    //this line checks if character comes for the first time
    if (object[character] === undefined){
      object[character] = [i];
      //console.log(object[character]);
    }
    else{
      //adds 1 for each character found
      object[character].push(i);
      //console.log(object[character]);
    }
  }
  //console.log(character);
  console.log(object);
};

charCount(args);