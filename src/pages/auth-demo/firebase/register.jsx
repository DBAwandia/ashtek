import { AuthProvider } from '@/contexts/jwtContext';
import RegisterView from './RegisterView';
export default function RegisterWithFirebase() {
  return <AuthProvider>
      <RegisterView />
    </AuthProvider>;
}