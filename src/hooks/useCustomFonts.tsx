import {useFonts} from 'expo-font';

function useCustomFonts() {
  const [fontsLoaded] = useFonts({
    Sora400: require('../../assets/fonts/Sora-Regular.ttf'),
    Sora500: require('../../assets/fonts/Sora-Medium.ttf'),
    Sora600: require('../../assets/fonts/Sora-SemiBold.ttf'),
    Sora700: require('../../assets/fonts/Sora-Bold.ttf'),
  });

  return fontsLoaded;
}

export default useCustomFonts;
