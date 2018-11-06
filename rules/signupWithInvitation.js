function (user, context, callback) {
    if (context.protocol === "redirect-callback") {
        // User was redirected to the /continue endpoint
    } else if(!user.identities[0].isSocial){
        // initialize app_metadata
        user.app_metadata = user.app_metadata || {};
        if (context.stats.loginsCount === 1 || context.stats.loginsCount < 1) {
            // turn on the flag
            user.app_metadata.is_signup = true;

            context.redirect = {
                url: "http://web3.dev.coex.us-east-1.aws.owneriq.net/optms/post_signup"
            };
        }

        if (user.app_metadata.is_signup) {
            context.redirect = {
                url: "http://web3.dev.coex.us-east-1.aws.owneriq.net/optms/post_signup"
            };
        }
    }

    return callback(null, user, context);
}
