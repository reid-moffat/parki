import { logger } from "firebase-functions";
import { onSchedule } from 'firebase-functions/v2/scheduler';
import { auth } from '../helpers/setup';
import { HttpsError } from "firebase-functions/v2/https";

/**
 * Removes users that have been unverified for at least 7 days
 * https://github.com/firebase/functions-samples/blob/main/Node/delete-unused-accounts-cron/functions/index.js
 */
const purgeUnverifiedUsers = onSchedule('0 0 * * *', async () => {

    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    logger.log(`Getting all unverified user accounts created before ${weekAgo}...`);

    // Go through users in batches of 1000
    const unverifiedUsers: string[] = [];
    const getUnverifiedUsers = (nextPageToken: string | undefined) => auth.listUsers(1000, nextPageToken)
        .then(async (listUsersResult) => {
            unverifiedUsers.push(...listUsersResult.users
                .filter((user) => !user.emailVerified && new Date(user.metadata.creationTime) < weekAgo)
                .map((user) => user.uid));

            if (listUsersResult.pageToken) {
                await getUnverifiedUsers(listUsersResult.pageToken);
            }
        })
        .catch((err) => {
            throw new HttpsError('internal', `Error listing users: ${err.message} (${err.code})`);
        });

    await getUnverifiedUsers(undefined);
    logger.log(`Successfully queried ${unverifiedUsers.length} old unverified users`);
    if (unverifiedUsers.length == 0) return;

    return Promise.all(unverifiedUsers.map((user) => auth.deleteUser(user)))
        .then(() => logger.log(`Successfully deleted ${unverifiedUsers.length} unverified user(s): ${unverifiedUsers}`))
        .catch((err) => logger.error(`Failed to delete unverified user(s): ${err.message} (${err.code})`));
});

export { purgeUnverifiedUsers };
