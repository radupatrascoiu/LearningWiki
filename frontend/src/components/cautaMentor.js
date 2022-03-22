import MyCarousel from "./myCarousel";
import MultiCarouselPage from "./multiCarousePage";
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useKeycloak } from '@react-keycloak/web';

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
        <div className="not-foundsad">
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h4"
              padding="50px"
            >
            Alegeti mentorul din profesorii de mai jos:
            </Typography>
            <MyCarousel/>
            {/* <MultiCarouselPage></MultiCarouselPage> */}
        </div>
    );
}
 
export default CautaMentor;