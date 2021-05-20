import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        closeCusDetail(){
            this.transitionToRoute('sales.customers')
        }
    }
});
