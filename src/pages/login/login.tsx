import { Eye, EyeOff } from "lucide-react";
import { useLogin } from "./hooks/useLogin";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/common/Button";
import { Input } from "../../components/common/Input";
import { Controller } from "react-hook-form";

const Login = () => {
  const {
    control,
    handleSubmit,
    errors,
    onSubmit,
    showPassword,
    handleTogglePassword
  } = useLogin();

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <Card className="w-full max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Admin Login</CardTitle>
            <CardDescription>
              Enter your credentials to access the panel.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <>
                  <Input
                    id="username"
                    label="Username"
                    type="text"
                    placeholder="Enter your username"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    autoComplete="username"
                    error={errors.username?.message}
                  />
                </>
              )}
            />

            <div className="relative">
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Input
                    id="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                    autoComplete="current-password"
                    error={errors.password?.message}
                  />
                )}
              />

              <button
                type="button"
                onClick={handleTogglePassword}
                className={`absolute ${errors.password ? "bottom-8" : "bottom-2.5"} right-3 text-slate-400 hover:text-slate-600 focus:outline-none`}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full"
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
