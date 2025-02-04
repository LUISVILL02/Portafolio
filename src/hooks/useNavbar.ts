import { useEffect, useState } from "react";

export const useNavbar = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const hadleScroll = () => {
            if(window.scrollY > 300){
                setScroll(true);
            }else{
                setScroll(false);
            }
        }
        window.addEventListener('scroll', hadleScroll);

        return () => {
            window.removeEventListener('scroll', hadleScroll);
        }
    }, []);

    return {scroll};
}