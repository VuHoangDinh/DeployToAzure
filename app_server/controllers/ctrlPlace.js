
const placelist = function(req, res){
    res.render('place',{
        places:
            [
                {continent:'Europe'},
                {continent:'Asia'},
                {continent:'Africa'},
                {continent:'America'},
                {continent:'Oceania'},

            ]});
};
module.exports = {
    placelist
};