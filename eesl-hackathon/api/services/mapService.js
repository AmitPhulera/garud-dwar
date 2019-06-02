
module.exports={
    "distanceMatrix": async (origins,destinations)=>{
        const googleMapsClient = require('@google/maps').createClient({
            key: 'AIzaSyDbRJ8kX0idgM24qNM7KSXBWLCHgkGszdQ',//process.env.GOOG_API_KEY,
          });
        return new Promise((resolve,reject)=>{
        googleMapsClient.distanceMatrix({
            origins,
            destinations
        },(err,data)=>{
            if(err){
                return reject(err);
            }else
            resolve(data);
        });
        // .then(data=>{
        //     console.log(JSON.stringify(data));
        //     resolve(data);
        // })
        // .catch(err=>{
        //     reject(err);
        //     console.log(err);
        // });
    });
    }
}