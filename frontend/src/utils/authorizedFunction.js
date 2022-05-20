export default function AuthorizedFunction(keycloak, roles) {
    const isAuthorized = () => {
        if (keycloak && roles) {
            return roles.some(r => {
                const realm = keycloak.hasRealmRole(r);
                const resource = keycloak.hasResourceRole(r);
                console.log("AAAAAAAAAAAAA")
                console.log("realm " + realm);
                console.log("resource " + resource);
                return realm || resource;
            });
        }
        return false;
    }

    return isAuthorized();
}