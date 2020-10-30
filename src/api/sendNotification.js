import axios from "axios";
import { notification } from "../notification";
import { fetchInbox } from "../api/fetchInbox";

// Let's assume that we know the IRI of the notife's calendar
// const calendar_iri = "https://cleopatra.solid.community/public/calendar/";

export function sendNotification() {
  console.log('in the send notification function');
  // First, fetch the inbox...
  fetchInbox()
    .then(inbox => {
      // ...and then perform a POST to the target inbox to send
      // the notif defined in notif.js
      axios({
        method: "post",
        url: "https://rsaniei.inrupt.net/inbox/",
        data: notification,
        headers: {
          "Content-type": "text/turtle",
          'Access-Control-Allow-Origin': '*',
          Slug: "Access Request from Amazon!"
        }
      })
        .then(response => {
          console.log(response.headers);
          if (response.status === 201) {
            document.getElementById("root").innerHTML = `
      <h1>Notification sent</h1>
      <div>
        Check the inbox of
          } has been created
      </div>
      `;
          }
        })
        .catch(error => {
          console.log('sorry it did not work!');
          console.log(error);
        });
    })
    .catch(error => {
      console.log(error);
    });

  return ('done')
}
