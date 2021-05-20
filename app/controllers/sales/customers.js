import Controller from '@ember/controller';

export default Controller.extend({

    actions: {
        ToggleAddCus() {
            this.toggleProperty("isShowAddField");
        },
        customerDetail(key)
        {
            this.transitionToRoute('sales.customers.details',key)
        },
        closeCus(){
            this.transitionToRoute('sales')
        }
    }
});
