function Pricing({ plans }) {
  return (
    <section id="pricing" className="section">
      <h2>Pricing</h2>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div key={plan.name} className="pricing-card">
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>

            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <button className="primary-btn">Choose Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;


