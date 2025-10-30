// App.jsx
import React, { useState } from "react";
import Header from "./components/header";
import Login from "./components/Login";
import Splash from "./components/Splash";
import RoleSelect from "./components/RoleSelect";
import VictimHome from "./components/VictimHome";
import VolunteerHome from "./components/VolunteerHome";
import Donation from "./components/Donation";
import GuestHome from "./components/GuestHome";
import SarthiAi from "./components/SarthiAi"; // ✅ import your new component

export default function App() {
  const [step, setStep] = useState("splash");
  const [role, setRole] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setRole(userData.role);
    setStep("splash");
  };

  return (
    <>
      <Header
        step={step}
        role={role}
        onBack={() => {
          if (step === "home") setStep("role");
          else if (step === "donation" || step === "guest" || step === "sarthi")
            setStep("splash");
          else setStep("splash");
        }}
        onReset={() => {
          setStep("splash");
          setRole(null);
          setUser(null);
        }}
        onLogin={() => setShowLogin(true)}
      />

      {/* SarthiAi Screen */}
      {step === "sarthi" && <SarthiAi onClose={() => setStep("home")} />}

      {/* Screens */}
      {step === "splash" && (
        <Splash
          onContinue={() => setStep("role")}
          onDonation={() => setStep("donation")}
        />
      )}

      {step === "role" && (
        <RoleSelect
          onSelect={(r) => {
            setRole(r);
            if (r === "guest") {
              setStep("guest");
            } else {
              setStep("home");
            }
          }}
        />
      )}

      {step === "home" && role === "victim" && (
        <VictimHome user={user} onSOS={() => setStep("sarthi")} /> //Sos function has been used
      )}
      {step === "home" && role === "volunteer" && <VolunteerHome user={user} />}

      {step === "donation" && <Donation />}
      {step === "guest" && <GuestHome />}

      {/* Login Modal */}
      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onLogin={handleLogin}
        />
      )}
    </>
  );
}
