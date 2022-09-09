// const { post } = require("../../routes/koala.router");

console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', saveKoala);
}

function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  
} // end getKoalas

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
  const koalaResidentApplication = {
    name: $('#nameIn').val(),
    age: $('#ageIn').val(),
    gender: $('#genderIn').val(),
    transfer: $('#readyForTransferIn').val(),
    notes: $('#notesIn').val()
  }
  $.ajax({
    type: 'POST',
    url: '/koalas',
    data: koalaResidentApplication
  }).then((postResponse) => {
    console.log('The POST to /koalas was a success:', postResponse);
    getKoalas();
  }).catch((error) => {
    console.log('The POST to /koalas was unsuccessful:', error);
  });
}