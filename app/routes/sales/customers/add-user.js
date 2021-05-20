import Route from '@ember/routing/route';

export default Route.extend({
    model() {

        return { namee: null, email: null, cusId: null, mobile: null, address: null };
    },
    actions: {
        close() {
            this.transitionTo('sales.customers')
        },
        writeUserData(currentCustomer) {
            var data = {
                Name: currentCustomer.namee,
                emailId: currentCustomer.email,
                userId: currentCustomer.cusId,
                Mobile: currentCustomer.mobile,
                Address: currentCustomer.address
            };
            fetch('https://customer-data-51a90-default-rtdb.firebaseio.com/customer.json', {
                method: 'POST',
                body: JSON.stringify(data),
            }).then(response => response.json()).catch((error) => { console.error('Error:', error); });
            this.transitionTo('sales.customers')
        }
    }
});
