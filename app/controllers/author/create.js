import Controller from '@ember/controller';

export default Controller.extend({

  reset() {
    this.setProperties({
      first: '',
      last: ''
    });
  },

  actions: {

  }


});
