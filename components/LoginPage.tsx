// app/login/page.tsx
import LoginForm from '@/components/LoginForm';

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Log In</h1>
        <LoginForm />
      </div>
    </div>
  );
}