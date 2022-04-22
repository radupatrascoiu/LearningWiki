import MyCarousel from "../components/mentor/MyCarousel";
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useKeycloak } from '@react-keycloak/web';
import "../styles/myCarousel.css"

const CautaMentor = () => {
    const { initialized, keycloak } = useKeycloak();
    const [error, setError] = useState(false);

    useEffect(async () => {
        if (keycloak && initialized) {
            try {

            } catch (error) {
                setError(true);
            }
        }
    }, [keycloak, initialized])

    return (initialized && keycloak?.authenticated &&
        <div className='content'>
            <div className="first-text">
                <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h4"
                >
                    Alegeti mentorul din profesorii de mai jos:
                </Typography>
            </div>

            <MyCarousel />
        </div>
    );
}

export default CautaMentor;