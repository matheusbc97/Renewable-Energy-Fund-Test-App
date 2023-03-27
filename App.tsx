import AppNavigator from './src/navigation';
import useCustomFonts from './src/hooks/useCustomFonts';

function App() {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }

  return <AppNavigator />;
}

export default App;
