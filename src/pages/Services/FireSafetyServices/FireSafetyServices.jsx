// import React from 'react'

import FireSafetyOurServiceSection from "./FireSafetyOurServiceSection/FireSafetyOurServiceSection";
import FireSafetyServiceBannerSection from "./FireSafetyServiceBannerSection/FireSafetyServiceBannerSection";
import FireSafetyServiceFAQsSection from "./FireSafetyServiceFAQsSection/FireSafetyServiceFAQsSection";
import FireSafetyServiceOverviewSection from "./FireSafetyServiceOverviewSection/FireSafetyServiceOverviewSection";
import ClientSection from "./../../Home/ClientSection/ClientSection";

const FireSafetyServices = () => {
  return (
    <div>
      <FireSafetyServiceBannerSection />
      <FireSafetyServiceOverviewSection />
      <FireSafetyOurServiceSection />
      <FireSafetyServiceFAQsSection />
      <ClientSection />
    </div>
  );
};

export default FireSafetyServices;
