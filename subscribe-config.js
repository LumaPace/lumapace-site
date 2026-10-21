// Public web config (not secrets). Filled in before going live.
window.LUMA_SUB = {
  firebase: { apiKey: "AIzaSyDvtONzourgOPmqEqKiEw8MaN38SNAwWyI", authDomain: "mindenglish-713f7.firebaseapp.com", projectId: "mindenglish-713f7", appId: "1:162557959631:web:3ff7e04d7d53126da106ba" },
  // RevenueCat Web Purchase Links (Web Billing, Stripe-backed). The uid is appended: <link>/<uid>
  // Production link (live Stripe). Test-mode links never go here.
  purchaseLinks: { annual: "https://pay.rev.cat/sjyfmittaafzkwns/", monthly: "https://pay.rev.cat/sjyfmittaafzkwns/" },
  preview: false
};
