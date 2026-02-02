import './App.css'
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";


function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Hero
          title="Grow your business with FlowSuite"
          subtitle="FlowSuite helps small businesses track customers, manage tasks, and stay on top of daily operations."
          primaryCta="Start Free Trial"
          secondaryCta="Book a Demo"
        />

        <Features
          items={[
            "Customer management",
            "Task tracking",
            "Analytics dashboard",
            "Automated reminders",
          ]}
        />

        <Pricing
          plans={[
            {
              name: "Starter",
              price: "$19/mo",
              features: ["Basic analytics", "Task tracking", "Email support"],
            },
            {
              name: "Pro",
              price: "$49/mo",
              features: [
                "Advanced analytics",
                "Unlimited tasks",
                "Priority support",
              ],
            },
            {
              name: "Business",
              price: "$99/mo",
              features: [
                "All Pro features",
                "Team management",
                "Dedicated support",
              ],
            },
          ]}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;

