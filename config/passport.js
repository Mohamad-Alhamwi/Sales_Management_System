const LocalStrategy = require('passport-local').Strategy ;
const bcrypt = require('bcryptjs') ;

// Load salesperson Model.
const Salesperson = require('../models/salesperson') ;

module.exports = function(passport)
{
    passport.use
    (
        new LocalStrategy
        (
            { 
                usernameField : 'email' 
            },

            (email, password, done) =>
            {
                // Match The User.
                Salesperson.findOne( { where : { email : email} })
                .then
                (
                    salesperson =>
                    {
                        // If no match.
                        if(!salesperson)
                        {
                            return done
                            (
                                null,
                                false,
                                { message : 'Incorrect email or password.'}
                            )
                        }

                        // Match the password.
                        bcrypt.compare
                        (
                            password,
                            salesperson.password,
                            (err, isMatch) =>
                            {
                                if(err) throw err ;

                                if(isMatch)
                                {
                                    // TODO remove unnecesarry attributes
                                    return done(null, salesperson) ; 
                                }

                                else
                                {
                                    return done
                                    (
                                        null,
                                        false,
                                        { message : 'Incorrect email or password.'}
                                    )                                    
                                }
                            }
                        ) ;
                    }
                ) 
                .catch(err => console.log(err))
            }
        ) 
    ) ;

    passport.serializeUser((salesperson, done) => 
    {
        done(null, salesperson.salesperson_id);
    }) ;
    
    passport.deserializeUser((salesperson_id, done) => 
    {
        Salesperson.findByPk(salesperson_id).then(function(salesperson) 
        {
            done(salesperson.errors, salesperson.get());
        }) ;
    }) ;
} ;