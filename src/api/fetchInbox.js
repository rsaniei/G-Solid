import solidAuth from 'solid-auth-client';

// this is the function that does the main job!
// fetch the users webId by checking if the user is loggedIn
export async function fetchInbox() {
  const currentSession = await solidAuth.currentSession();
  // if user is not loggedIn it return null
  if (!currentSession) {
    return null;
  }
  const inbox = "https://rsaniei.inrupt.net/inbox/"
  return inbox
}
