import Route from '@ember/routing/route';

export default Route.extend({

  // this will clean up form when nagivated off and return to form
  model() {
    return {
      first: '',
      last: ''
    }
  }

});
   