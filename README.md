# GoogleSSO
Google OAuth signin angular directive
<li>Include <code>SSO.directive.js and SSO.service.js</code>.</li>
<li>Add <code>GoogleSSO</code> as a dependency to your app and inject SSO into login controller.</li>
<li>Add <code>&lt;google-sign-in clientid="your-client-id"&gt;</code></li>
<li>SSO.loggedIn is a promise that resolves when authenitcated and rejects when authentication fails</li>
