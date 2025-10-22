import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import microsoftLogo from "@/assets/microsoft-logo.png";
import natureBackground from "@/assets/nature-background.jpg";
import { HelpCircle, KeyRound, ChevronLeft } from "lucide-react";

const Index = () => {
  const [step, setStep] = useState<"email" | "password" | "staySignedIn">("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === "email") {
      setStep("password");
    } else if (step === "password") {
      setStep("staySignedIn");
    }
  };

  const handleBack = () => {
    if (step === "password") {
      setStep("email");
    } else if (step === "staySignedIn") {
      setStep("password");
    }
  };

  const handleSignIn = (staySignedIn: boolean) => {
    console.log("Sign in:", { email, password, staySignedIn });
  };

  return (
    <div 
      className="flex min-h-screen flex-col items-center justify-center px-4 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${natureBackground})` }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-background/40" />
      <div className="w-full max-w-[440px] relative z-10">
        {/* Card */}
        <div className="bg-card shadow-lg px-11 py-12">
          {/* Logo */}
          <div className="mb-4">
            <img 
              src={microsoftLogo} 
              alt="Microsoft" 
              className="h-6"
            />
          </div>

          {/* Email Step */}
          {step === "email" && (
            <>
              <h1 className="mb-4 text-2xl font-semibold text-foreground">Sign in</h1>
              
              <form onSubmit={handleNext} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Email, phone, or Skype"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-8 border-border bg-background text-sm text-foreground placeholder:text-muted focus-visible:border-primary focus-visible:ring-0"
                    required
                    autoFocus
                  />
                </div>

                <div className="text-sm">
                  <span className="text-foreground">No account? </span>
                  <button type="button" className="text-primary hover:underline">
                    Create one!
                  </button>
                </div>

                <button
                  type="button"
                  className="flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  Sign in with a security key
                  <HelpCircle className="h-3 w-3" />
                </button>

                <div className="flex justify-end pt-2">
                  <Button
                    type="submit"
                    className="h-8 bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                  >
                    Next
                  </Button>
                </div>
              </form>
            </>
          )}

          {/* Password Step */}
          {step === "password" && (
            <>
              <button
                onClick={handleBack}
                className="mb-4 flex items-center text-sm text-foreground hover:text-foreground/80"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="ml-2">{email}</span>
              </button>

              <h1 className="mb-4 text-2xl font-semibold text-foreground">Enter password</h1>
              
              <form onSubmit={handleNext} className="space-y-4">
                <div>
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-8 border-border bg-background text-sm text-foreground placeholder:text-muted focus-visible:border-primary focus-visible:ring-0"
                    required
                    autoFocus
                  />
                </div>

                <button
                  type="button"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </button>

                <div className="flex justify-between pt-2">
                  <button
                    type="button"
                    className="text-sm text-primary hover:underline"
                  >
                    Other ways to sign in
                  </button>
                  <Button
                    type="submit"
                    className="h-8 bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                  >
                    Sign in
                  </Button>
                </div>
              </form>
            </>
          )}

          {/* Stay Signed In Step */}
          {step === "staySignedIn" && (
            <>
              <button
                onClick={handleBack}
                className="mb-4 flex items-center text-sm text-foreground hover:text-foreground/80"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="ml-2">{email}</span>
              </button>

              <h1 className="mb-4 text-2xl font-semibold text-foreground">Stay signed in?</h1>
              
              <p className="mb-4 text-sm text-foreground">
                Stay signed in so you don't have to sign in again next time.
              </p>

              <div className="mb-6">
                <label className="flex items-center text-sm">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-foreground">Don't show this again</span>
                </label>
              </div>

              <div className="flex justify-end gap-3">
                <Button
                  type="button"
                  onClick={() => handleSignIn(false)}
                  variant="outline"
                  className="h-8 border-border bg-background px-6 text-sm font-semibold text-foreground hover:bg-muted/10"
                >
                  No
                </Button>
                <Button
                  type="button"
                  onClick={() => handleSignIn(true)}
                  className="h-8 bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  Yes
                </Button>
              </div>
            </>
          )}
        </div>

        {/* Sign-in options */}
        <button className="mt-4 flex w-full items-center justify-center gap-2 bg-card py-3 text-sm text-foreground shadow-sm hover:bg-card/90">
          <KeyRound className="h-4 w-4" />
          <span>Sign-in options</span>
        </button>
      </div>

      {/* Footer */}
      <div className="mt-8 flex gap-6 text-xs text-muted">
        <button className="hover:underline">Terms of use</button>
        <button className="hover:underline">Privacy & cookies</button>
        <button className="hover:text-foreground">...</button>
      </div>
    </div>
  );
};

export default Index;
