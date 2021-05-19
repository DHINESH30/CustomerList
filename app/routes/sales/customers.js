import Route from '@ember/routing/route';

export default Route.extend({

        model() {
            var cusList=fetch('https://customer-data-51a90-default-rtdb.firebaseio.com/customer.json').then((response) => response.json()).then(function(data){
                return data;
            })
            console.log(cusList)
            return cusList
        },
        actions:{
            writeUserData(cusId, Name, email, Mob, address) {
                var data = {
                    Name: Name,
                    emailId: email,
                    userId: cusId,
                    Mobile:Mob,
                    Address:address
                };
                fetch('https://customer-data-51a90-default-rtdb.firebaseio.com/customer.json', {
                    method: 'POST',
                    body: JSON.stringify(data),
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log('Success:', data);
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
                    this.refresh();
            }
        }
});
