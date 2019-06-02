/**
 * DevicesController
 *
 * @description :: Server-side logic for managing devices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  init: async (req, res) => {
    try {
        let {id} =req.allParams();
        if(!id)
            return res.badRequest();
        let device = Devices.findOne({id});
        if(!device)
            return res.ok({status:null})
        return res.ok({status:"verified"});
    } catch (err) {
      console.log(err);
      return res.serverError();
    }
  }
};
//sapra 192.168.31.13
