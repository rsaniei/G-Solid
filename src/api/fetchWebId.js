import solidAuth from 'solid-auth-client';

// this is the function that does the main job!
// fetch the users webId by checking if the user is loggedIn
export async function fetchWebId() {
  const currentSession = await solidAuth.currentSession();
  // console.log('currentSession:', currentSession);
  // if user is not loggedIn it return null
  if (!currentSession) {
    return null;
  }
  return currentSession.webId
}
