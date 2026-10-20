// Public web config (not secrets). Filled in before going live.
window.LUMA_SUB = {
  firebase: { apiKey: "AIzaSyDvtONzourgOPmqEqKiEw8MaN38SNAwWyI", authDomain: "mindenglish-713f7.firebaseapp.com", projectId: "mindenglish-713f7", appId: "1:162557959631:web:3ff7e04d7d53126da106ba" },
  // RevenueCat Web Purchase Links (Web Billing, Stripe-backed). The uid is appended: <link>/<uid>
  // Production link: fill when Stripe goes live. Never put the sandbox link here.
  purchaseLinks: { annual: "", monthly: "" },
  // Sandbox (Stripe test mode) link, used ONLY while preview is true.
  // MUST be removed / preview:false before any public deploy.
  sandboxLinks: { annual: "https://pay.rev.cat/sandbox/wyafblfykdbvxckz/", monthly: "https://pay.rev.cat/sandbox/wyafblfykdbvxckz/" },
  preview: true
};
