const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();



exports.addAdminRole = functions.https.onCall((data, context) =>
  // get user and add custom claim (admin)
  admin
    .auth()
    .getUserByEmail(data.email)
    .then((user) =>
      admin.auth().setCustomUserClaims(user.uid, {
        admin: true,
      })
    )
    .then(() => ({
      message: `Success, ${data.email} has been made an admin`,
    }))
    .catch((err) => err)
);

exports.deleteUser = functions.https.onCall(async (data, context) => {
  if (!context.auth.token.admin) return;
  const { uid } = data;
  if (!uid) return { error: "Please enter a UID" };
  try {
    // return the promise from here
    await admin.auth().deleteUser(uid);
    console.log("Successfully deleted user");
    return { data: "User deleted" };
  } catch (error) {
    console.log("error deleting user", error);
    return { error };
  }
});
