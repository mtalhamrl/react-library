export const oktaConfig = {
  clientId: "0oajuv6mj52QzNCgD5d7",
  issuer: "https://dev-45866985.okta.com/oauth2/default",
  redirectUri: "http://localhost:3000/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
