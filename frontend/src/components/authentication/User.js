import { Button } from '@mui/material';
import { useEffect, useState } from "react";
import { useKeycloak } from '@react-keycloak/web';

const User = (props) => {
    const [username, setUsername] = useState("")
    const { initialized, keycloak } = useKeycloak();

    useEffect(async () => {
        if (keycloak && initialized) {
            keycloak.loadUserInfo().then(userInfo => {
                setUsername(userInfo.name)
            });
        }
    }, [keycloak, initialized])

    return (
        <Button variant="contained" color="success" onClick={() => window.location.href = "http://localhost:8080/realms/master/account/"}>{username}</Button>
    )
}
export default User;