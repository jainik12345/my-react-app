// import React from 'react'

import SecurityOurServiceSection from "./SecurityOurServiceSection/SecurityOurServiceSection";
import SecurityServiceFAQsSection from "./SecurityServiceFAQsSection/SecurityServiceFAQsSection";
import SecurityServiceOverviewSection from "./SecurityServiceOverviewSection/SecurityServiceOverviewSection";
import ClientSection from "./../../Home/ClientSection/ClientSection";
import SecurityServiceBannerSection from "./SecurityServiceBannerSection/SecurityServiceBannerSection";

const SecurityServices = () => {
  return (
    <div>
      <SecurityServiceBannerSection />
      <SecurityServiceOverviewSection />
      <SecurityOurServiceSection />
      <SecurityServiceFAQsSection />
      <ClientSection />
    </div>
  );
};

export default SecurityServices;
