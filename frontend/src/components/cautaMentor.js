import MyCarousel from "./myCarousel";
import MultiCarouselPage from "./multiCarousePage";
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
        <div className="not-found">
            
            <h2>Alegeti mentorul din profesorii de mai jos: </h2>
            <MyCarousel/>
            {/* <MultiCarouselPage></MultiCarouselPage> */}
        </div>
    );
}
 
export default CautaMentor;