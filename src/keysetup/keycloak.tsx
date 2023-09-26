import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
    url: "YOUR LOCALHOST",
    realm: "YOUR CLIENT REALM",
    clientId: "YOUR CLIENT ID",

});

export default keycloak;