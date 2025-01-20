import { Redirect } from 'expo-router';

export default function Index() {
  // (auth) klasörüne doğrudan erişildiğinde introduction/step1'e yönlendir
  return <Redirect href="/(auth)/introduction/intro" />;
} 