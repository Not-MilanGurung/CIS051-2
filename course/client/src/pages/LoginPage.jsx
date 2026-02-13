import LoginForm from "../components/LoginForm";

function LoginPage() {
  return (
    <main className="h-screen bg-blue-400">
        <div className="flex justify-center py-10">
            <div className="bg-white p-10 rounded-b-xl min-w-[200px] text-center">
                <div className="text-2xl">Login</div>
                <LoginForm />
            </div>
        </div>
    </main>
  )
}

export default LoginPage;