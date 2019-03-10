import Route from '@ember/routing/route';

export default Route.extend({

  queryParams: {
    search: {
      // refreshModel fires the model whenever the search parameter changes
      refreshModel: true
    }
  },

  model(params) {
    if (params.search) {
      return this.store.query('author', {
        filter: {
          query: params.search
        }
      });
    }
    return this.store.findAll('author');
  }

});

// same model hook with ES6 syntax:

// model({ search }) {
//   if (search) {
//     return this.store.query('author', {
//       filter: {
//         query: search
//       }
//     });
//   }
//   return this.store.findAll('author');
// }

