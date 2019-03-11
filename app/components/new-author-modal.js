import Component from '@ember/component';
import { inject as service } from '@ember/service';


export default Component.extend({
  // must inject the store since we are in a component
  store: service('store'),

  init() {
    this._super(...arguments);

    this.set('author', {
      first: '',
      last: ''
    });
  },

  actions: {
    save(ev) {
      ev.preventDefault();

      // must use this.get('store') since getter required for injected service
      let author =this.get('store').createRecord('author', this.author);

      author.save().then(() => {
        this.set('showModal', false);

        this.onsave(author);
      });

    }
  }

});
