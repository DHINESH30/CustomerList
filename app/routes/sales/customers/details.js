import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        let user_id=params.key;
        var obj = fetch(`https://customer-data-51a90-default-rtdb.firebaseio.com/customer/${user_id}.json`).then((response) =>response.json()).then(function(data){console.log(data); return data;})
        return obj;
    }
});
