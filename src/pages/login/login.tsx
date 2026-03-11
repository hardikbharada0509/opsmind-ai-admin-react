import { Eye, EyeOff } from "lucide-react";
import { useLogin } from "./hooks/useLogin";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/common/Button";
import { Input } from "../../components/common/Input";

const Login = () => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    showPassword,
    handleTogglePassword,
    loading,
    error,
    handleSubmit
  } = useLogin();

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <Card className="w-full max-w-sm">
        <form onSubmit={handleSubmit}>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Admin Login</CardTitle>
            <CardDescription>
              Enter your credentials to access the panel.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {error && (
              <div className="rounded bg-red-50 p-3 text-sm text-red-600">
                {error}
              </div>
            )}
            
            <Input
              id="username"
              label="Username"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={loading}
              autoComplete="username"
            />
            
            <div className="relative">
              <Input
                id="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={handleTogglePassword}
                className="absolute bottom-2.5 right-3 text-slate-400 hover:text-slate-600 focus:outline-none"
                disabled={loading}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full"
              isLoading={loading}
              disabled={loading}
            >
              Sign In
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Login;
