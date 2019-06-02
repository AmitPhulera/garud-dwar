/**
 * DevicelogsController
 *
 * @description :: Server-side logic for managing devicelogs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create:async (req,res)=>{
        let {data} = req.allParams();
        if(!data)
            return res.badRequest();
        let {lat,id,long,battery,ts} = data;
        if(!lat || !long || !id || !battery || !ts){
            return res.badRequest();
        }
        try { 
            await Devicelogs.create({lat,long,battery,ts});
            return res.created();
        } catch (error) {
            sails.log.error(error);
            return res.serverError();
        }
    }
};

