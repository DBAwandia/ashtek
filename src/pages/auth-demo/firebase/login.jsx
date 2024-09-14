import { AuthProvider } from '@/contexts/jwtContext';
import LoginView from './LoginView';
export default function LoginWithFirebase() {
  return <AuthProvider>
      <LoginView />
    </AuthProvider>;
}