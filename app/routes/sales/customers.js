import Route from '@ember/routing/route';

export default Route.extend({

    model() {
        return fetch('https://customer-data-51a90-default-rtdb.firebaseio.com/customer.json').then((response) => response.json())
    },
    actions: {
        loading() {
            console.log("loading")
            return true;
        },
        transAddUserRoute(){
            this.transitionTo('sales.customers.add-user')
        },
        customerDetail(key)
        {
            this.transitionTo('sales.customers.details',key)
        },
        closeCus(){
            this.transitionTo('sales')
        }
    }
});
