/**
 * ChargestationsController
 *
 * @description :: Server-side logic for managing chargestations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create:async (req,res)=>{
        let {lat,long,name,managedBy,city} = req.allParams();
        lat = Number(lat);
        long = Number(long);
        if(!lat || !long || !name || !managedBy || !city)
            return res.badRequest();

        const finalObj = {lat,long,name,managedBy,city};
        console.log(finalObj)
        try {
         
        let resp = await Chargestations.create(finalObj);
        return res.ok();   
        } catch (error) {
            console.log(error);
            return res.serverError();
        }
    }
};

