/**
 * All firebase functions must be exported from this file to be able to be deployed
 *
 * Don't write functions here to avoid clogging it up, write in another file then import & export here
 */

import { createAccount, onUserSignup, resetPassword, beforeSignIn } from './auth';

export { createAccount, onUserSignup, resetPassword, beforeSignIn };
