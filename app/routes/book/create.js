import Route from '@ember/routing/route';

export default Route.extend({

  model() {


    return {
      title: '',
      isbn: '',
      // null is used so as not to disrupt ember power select
      publishDate: null,
      author: null
    };
  }
});
