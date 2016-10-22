
    AppPurchase.when("order").approved(function(order) {
        // Log all approved orders
        console.log("order " + order.alias + " approved");
    });

    AppPurchase.when("consumable order").approved(function(order) {
        // Auto-finish all consumable orders
        order.finish();
    });

    AppPurchase.when("order 100 coins").approved(function(order) {
        app.addCoins(100);
        order.finish();
    });

    // note: purchased and approved are aliases
    AppPurchase.when("full version")
        .purchased(function(order) {
            app.unlock();
            order.finish();
        })
        .refunded(function() {
            app.lock();
        });

    AppPurchase.when("free subscription").approved(function(subscription) {
    });

    AppPurchase.when("subscription status").updated(function(subscription) {
        if (subscription.expired) {
        }
        else {
        }
    });

    AppPurchase.when("order com.example.app.inappid3").approved(function(order) {
        // Special case for the com.example.app.inappid3 purchase
        order.finish();
    });

    AppPurchase.when("order").rejected(function(order) {
    });

    AppPurchase.when("order").cancelled(function(order) {
    });

    AppPurchase.ready(); // true or false

    // execute when (or immediately if) the store is ready and available.
    AppPurchase.ready(function() { });

    AppPurchase.off(callback);

    AppPurchase.refresh();

    // Call restore if supported
    if (AppPurchase.restore)
        AppPurchase.restore();

    AppPurchase.order("com.example.app.inappid3")
        .initiated(function() {
            // order initiated, waiting approval...
        },
        .error(function(err) {
            // cannot initiate the order.
        });

    // [consumable|non consumable|free subscription|paid subscription|subscription]
    // [order]
    // [productId]
    // [approved|purchased|updated|rejected|cancelled|finished]

    // id updated
    // alias updated
    // order alias updated
    // type updated
    // id finished
    // alias finished
    // type finished
