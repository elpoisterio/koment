// save clientID and clientSecret in your .bashrc or .zshrc or any other witchcraft you use.

module.exports = {

    'facebookAuth' : {
        'clientID'      :  process.env.KOMENT.FACEBOOK_AUTH_APP_ID, // your App ID
        'clientSecret'  :  process.env.KOMENT.FACEBOOK_AUTH_CLIENT_KEY, // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};
