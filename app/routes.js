const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.use('/alpha-1i', require('./views/alpha-1i/_routes'));




module.exports = router

router.post('/what-benefits-are-you-receiving-answer', function(req, res, next){
   if (req.session.data['benefits']){
    for (i = 0; i<req.session.data['benefits'].length; i++){
    switch (req.session.data['benefits'][i]){

     case "Incapacity Benefit" :  return res.redirect("/alpha-1i/eligibility/ineligible"); next(); break;
     case "Income Support" :  return res.redirect("/alpha-1i/eligibility/ineligible"); next(); break;
     case "Severe Disability Allowance" :  return res.redirect("/alpha-1i/eligibility/ineligible"); next(); break;

     case "None of these" :  return res.redirect("/alpha-1i/eligibility/ogd"); next(); break;
     default: continue;
     }
     break;
    }
   } else {
   }
  return res.redirect("/alpha-1i/eligibility/do-you-work-less-than-16-hours"); next();
  })
  router.post('/benefits', function(req, res, next){
   if (req.session.data['benefits']){
    for (i = 0; i<req.session.data['benefits'].length; i++){
    switch (req.session.data['benefits'][i]){
     case "Income Support" :  return res.redirect("/alpha-1i/eligibility/ineligible"); next(); break;
     case "Severe Disability Allowance" :  return res.redirect("/alpha-1i/eligibility/ineligible"); next(); break;

     case "None of these" :  return res.redirect("/alpha-1i/eligibility/ogd"); next(); break;
     default: continue;
     }
     break;
    }
   } else {
   }
  return res.redirect("/alpha-1i/eligibility/do-you-work-less-than-16-hours"); next();
  })
  router.post('/benefits', function(req, res, next){
   if (req.session.data['benefits']){
    for (i = 0; i<req.session.data['benefits'].length; i++){
    switch (req.session.data['benefits'][i]){
     case "Severe Disability Allowance" :  return res.redirect("/alpha-1i/eligibility/ineligible"); next(); break;

     case "None of these" :  return res.redirect("/alpha-1i/eligibility/ogd"); next(); break;
     default: continue;
     }
     break;
    }
   } else {
   }
  return res.redirect("/alpha-1i/eligibility/do-you-work-less-than-16-hours"); next();
  })
  router.post('/benefits', function(req, res, next){
   if (req.session.data['benefits']){
    for (i = 0; i<req.session.data['benefits'].length; i++){
    switch (req.session.data['benefits'][i]){

     case "None of these" :  return res.redirect("/alpha-1i/eligibility/ogd"); next(); break;
     default: continue;
     }
     break;
    }
   } else {
   }
  return res.redirect("/alpha-1i/eligibility/do-you-work-less-than-16-hours"); next();
  })
  router.post('/benefits', function(req, res, next){
   if (req.session.data['benefits']){
    for (i = 0; i<req.session.data['benefits'].length; i++){
    switch (req.session.data['benefits'][i]){

     case "None of these" :  return res.redirect("/alpha-1i/eligibility/ogd"); next(); break;
     default: continue;
     }
     break;
    }
   } else {
   }
  return res.redirect("/alpha-1i/eligibility/do-you-work-less-than-16-hours"); next();
  })
