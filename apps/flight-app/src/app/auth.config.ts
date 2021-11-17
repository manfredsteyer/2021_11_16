import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'https://idsvr4.azurewebsites.net',

  redirectUri: window.location.origin + '/index.html',
  clientId: 'spa',
  
  responseType: 'code', // Code Flow + PKCE

  scope: 'openid profile email offline_access api',
  showDebugInformation: true,
};