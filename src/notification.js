const notification = `
@prefix notif: <>.
@prefix as: <https://www.w3.org/ns/activitystreams#>.
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.
notif: a as:notification;
    rdfs:label "Request for Access to Your Data";
    rdfs:comment "Dear User, Would you give us access to your personal data?";
    as:object <https://amazon123.inrupt.net>.
`;
module.exports.notification = notification;
