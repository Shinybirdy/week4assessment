var min=1;
var max=100;
var amount =function randomNumber(min, max) {
 return Math.random() * (max - min) + min;

};
console.log(amount);

var threatLevel = function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
 };

$(document).ready(function(){


  $('#addAnimalButton').on ('click', function(event){
      console.log("CLICK");
      event.preventDefault();
      var newAnimalType = $('#addAnimal').val();

      console.log("addAnimal " + newAnimalType);

       var newAnimal = {
          "animal_type": newAnimalType,
          "amount": amount,
          "threatLevel": threatLevel
          };

      $.ajax({
        type: 'POST',
        url:'/postNewAnimal',
        data:newAnimal
      });//end ajax POST


  var updateDisplay = function(group){
    $('#updateDisplay').on('click',function(){
      console.log('in updateDisplay' + group);
      var eachGroup = document.createElement('p');
      $('animal').append( eachGroup );
    });

  };

  }); //end button click
$.ajax({
  type:'GET',
  url:'/getAllAnimals',
  data:""
});

});//end document ready
