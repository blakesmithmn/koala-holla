console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', function(){
    console.log( 'in addButton on click' );
    // get user input and put in an object
    // NOT WORKING YET :(
    // using a test object
    let koalaToSend = {
      name: 'testName',
      age: 'testName',
      gender: 'testName',
      readyForTransfer: 'testName',
      notes: 'testName',
    };
    // call saveKoala with the new obejct
    saveKoala( koalaToSend );
  }); 
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
    let koala = koala[i];
    // For each book, append a new row to our table
    $('#viewKoalas').append(`
      <tr data-id=${koala.id}>
        <td>${koala.name}</td>
        <td>${koala.age}</td>
        <td>${koala.gender}</td>
        <td>${koala.transfer}</td>
        <td>${koala.notes}</td>
        <td><button>Ready For Transfer</button></td>
        <td><button class="delete-btn">Ready For Transfer</button></td>
      </tr>
    `);
  }
}

function saveKoala( newKoala ){
  console.log( 'in saveKoala', newKoala );
  // ajax call to server to get koalas
}
