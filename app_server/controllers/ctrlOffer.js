const offerlist = function(req, res){
    res.render('offer',{
        offers:
            [
                {off:'Offer 1'},
                {off:'Offer 2'},
                {off:'Offer 3'},
                {off:'Offer 4'},
                {off:'Offer 5'},

            ]});
};
module.exports = {
    offerlist
};