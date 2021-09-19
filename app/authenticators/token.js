import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
  restore(data) {
    console.log('??? restore ???');
    console.log(typeof data);
  },

  async authenticate( username, password ) {

    //name = "c1312asd";
    //password = "12345asdfghj";
    const name = username;

    const BACKEND_URL = "https://api.rassloff.info/login";

    //const BACKEND_URL = "http://127.0.0.1:8000/login";

    let response = await fetch( BACKEND_URL, { // '/api/token'
      //mode: 'cors',
      //credentials: 'same-origin',
      //mode: 'no-cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name, password
      })
    });

    if(response.ok) {

      return response.json();

    } else {

      let error = await response.text();

      throw new Error(error);
    }
  },

  invalidate(data){
    console.log('blöd');
    console.log(typeof data);
  }
});
