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
        return this.store.query('book', {
          filter: {
            query: params.search
          }
        });
      }
      return this.store.findAll('book');
    }
  
});
