import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'

export default Route.extend({

  moment: service('moment'),
  
  beforeModel() {
    this.get('moment').setTimeZone('America/Vancouver');
  }
  
});
