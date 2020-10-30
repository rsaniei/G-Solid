import React from 'react';


export function setSelectedaclItem() {
  // using react state and react hook to dynamically set the profile whenever the user is loggedIn
  // const [selectedItem, setSelectedItem] = React.useState();
  const uri = 'hhhdh';

  if (uri === null) {
    return;
  }
  // if we have already a profile set fetchProfile as profile
  setSelectedItem(uri);

  return selectedItem;
}
