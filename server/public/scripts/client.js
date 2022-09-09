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
  $.ajax({
    method: 'GET',
    url: '/koalas'
  }).then((koalasRes) => {
    console.log('got response from server for get request:',koalasRes);
    //call renderKoalas function
    renderKoalas(koalasRes);
  })
} // end getKoalas

function renderKoalas(koalaResidents) {
  console.log('in renderKoalas');
  $('#viewKoalas').empty();
  for(let i = 0; i < koalaResidents.length; i += 1) {
    let koala = koalaResidents[i];
    // For each book, append a new row to our table
    if(!koala.transfer){
      $('#viewKoalas').append(`
        <tr data-id=${koala.id}>
          <td>${koala.name}</td>
          <td>${koala.age}</td>
          <td>${koala.gender}</td>
          <td>${koala.transfer}</td>
          <td>${koala.notes}</td>
          <td><button class="transfer-btn">Ready For Transfer</button></td>
          <td><button class="delete-btn">Delete</button></td>
        </tr>
      `);
    }
    else if(koala.transfer) {
      $('#viewKoalas').append(`
        <tr data-id=${koala.id}>
          <td>${koala.name}</td>
          <td>${koala.age}</td>
          <td>${koala.gender}</td>
          <td>${koala.transfer}</td>
          <td>${koala.notes}</td>
          <td></td>
          <td><button class="delete-btn">Delete</button></td>
        </tr>
      `);
    }
  }
}

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