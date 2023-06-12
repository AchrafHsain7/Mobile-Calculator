import {Stack} from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

const Layout = () =>{
    const [fontsLoaded] = useFonts({
        Ubuntu: require('../styles/fonts/Ubuntu-Bold.ttf')
    })

    const onLayoutRootView = useCallback(async () => {
        if(fontsLoaded){
            await SplashScreen.hideAsync();
        }
        }, [fontsLoaded])

    if(!fontsLoaded) return null;
    return(
        <Stack onLayout={onLayoutRootView} />
    );
}

export default Layout;