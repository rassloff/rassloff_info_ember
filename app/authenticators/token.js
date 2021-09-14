import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
  restore(data) {
    console.log('??? restore ???');
    console.log(typeof data);
  },

  async authenticate(name, password) {

    // da scheint es auch noch ein problem mit der übergabe / weitergabe der parameter zu geben ...
    name = "c1312asd";
    password = "12345asdfghj";

    //const BACKEND_URL = "https://api.rassloff.info/login"; // http://127.0.0.1:8000

    const BACKEND_URL = "http://127.0.0.1:8000/login"; // https://api.rassloff.info/api/v1

    let response = await fetch( BACKEND_URL, { // '/api/token'
      //mode: 'cors',
      //credentials: 'same-origin',
      //mode: 'no-cors',
      method: 'POST',
      headers: {
        //'Accept': "application/json",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name, password
      })
    });

    //console.log('??? NO Success:', BACKEND_URL);

    console.log('??? NO Success:', response);


    if(response.ok) {
      return response.json();
    } else {
      let error = await response.text();

      //console.log('NO Success:', BACKEND_URL);

      throw new Error(error);
    }
  },

  invalidate(data){
    console.log('blöd');
    console.log(typeof data);
  }
});
