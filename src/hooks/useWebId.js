import React from 'react';
import { fetchWebId } from '../api/fetchWebId';
import { TripleSubject } from 'tripledoc';


export function useWebId() {
  // using react state and react hook to dynamically set the profile whenever the user is loggedIn
  const [webId, setWebId] = React.useState();

  React.useEffect(() => {
    fetchWebId().then((fetchWebId) => {
      if (fetchWebId === null) {
        return;

      }
      // if we have already a profile set fetchProfile as profile
      setWebId(fetchWebId);
    });
  }, [])
  return webId;
}
