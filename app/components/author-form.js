import Component from '@ember/component';

export default Component.extend({

  didReceiveAttrs() {
    this._super(...arguments);

    this.setProperties({
      first: this.author.get('first'),
      last: this.author.get('last')
    });
  },

  actions: {
    submitChanges(ev) {
      ev.preventDefault();

       // note that onsubmit function can be called anything -- named to match the native event in this case
       // it is passed up to the component caller  
      this.onsubmit({
        first: this.first,
        last: this.last
      });
    }
  }

});
