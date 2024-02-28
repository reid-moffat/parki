/**
 * All firebase functions must be exported from this file to be able to be deployed
 *
 * Don't write functions here to avoid clogging it up, write in another file then import & export here
 */

import { beforeCreate, beforeSignIn, onUserDelete, onUserSignup } from './triggers/auth';
import { createAccount, resetPassword, getProfile, updateProfile } from './callable/auth';
import { getSpots } from './callable/spots';
import { purgeExpiredEmails, purgeUnverifiedUsers } from './triggers/cron';

export {
    beforeCreate,
    beforeSignIn,
    onUserDelete,
    onUserSignup,

    createAccount,
    resetPassword,
    getProfile,
    updateProfile,

    getSpots,

    purgeUnverifiedUsers,
    purgeExpiredEmails
};
