
const visalist = function(req, res){
    res.render('visa',{
        visas:
            [
                {continent:'Europe'},
                {continent:'Asia'},
                {continent:'Africa'},
                {continent:'America'},
                {continent:'Oceania'},

            ]});
};
module.exports = {
    visalist
};