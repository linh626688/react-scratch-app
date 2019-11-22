import {API} from "./RouteAPI";

export const ACCESS_TOKEN = 'accessToken';
export const EMAIL = 'email';

export const OAUTH2_REDIRECT_URI = 'http://localhost:3000/oauth2/redirect';

export const GOOGLE_AUTH_URL = API + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL = API + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;
