import Controller from '@ember/controller';

export default Controller.extend({

    actions: {
        ToggleAddCus() {
            this.toggleProperty("isShowAddField");
        },
        customerDetail(key)
        {
            this.setProperties({
                isShowCustomerDetail:true
            })
            this.transitionToRoute('sales.customers.details',key)
        },
        closeCusDetail(){
            this.setProperties({
                isShowCustomerDetail:false
            })
        }
    }
});
