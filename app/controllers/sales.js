import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    TransToCustomer(){
      this.transitionToRoute('sales.customers')
    }
  }
});
