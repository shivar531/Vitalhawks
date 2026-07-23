// ---------------------------------------------------------------------------
// VitalHawks — SEO page configuration
//
// This is the ONLY file you edit when you add or change a page.
// The build script reads this and generates a real HTML file for each entry,
// with its own canonical / title / description baked into the served HTML.
//
// RULES:
//   - `path` must match the route in App.jsx EXACTLY, including capitalisation
//   - every page needs a DIFFERENT title and description — that is the point
//   - `noindex: true` = page is generated but kept out of the sitemap and
//     tagged noindex (for utility routes that shouldn't be search results)
// ---------------------------------------------------------------------------

// One host, everywhere. Your current canonical uses www, so we keep www.
export const SITE_URL = 'https://www.vitalhawks.com'

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

export const pages = [
  // --- core ----------------------------------------------------------------
  {
    path: '/',
    title: 'Verified B2B Contact Data India | VitalHawks',
    description:
      'Verified decision-maker contact data across India — direct mobile numbers and work emails at 95% accuracy, delivered within 48 hours.',
    priority: '1.0',
    changefreq: 'weekly',
  },
  {
    path: '/Pricing',
    title: 'Pricing | Verified B2B Contact Data from Rs 22 per Contact',
    description:
      'Transparent per-contact pricing for verified Indian decision-maker data. Direct mobiles and work emails, 95% accuracy, 48-hour delivery. No seat fees.',
    priority: '0.9',
    changefreq: 'monthly',
  },
  {
    path: '/SampleList',
    title: 'Free Sample List | Verified B2B Contacts — VitalHawks',
    description:
      'Request a free sample of verified decision-maker contacts before you buy. See the accuracy of our direct mobile numbers and work emails for yourself.',
    priority: '0.9',
    changefreq: 'monthly',
  },
  {
    path: '/Industries',
    title: 'B2B Contact Data by Industry | VitalHawks India',
    description:
      'Verified decision-maker contact lists built for specific industries — financial services, insurance, manufacturing, pharma, healthcare, IT and real estate.',
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/Plan',
    title: 'Plans & Packages | VitalHawks Contact Data',
    description:
      'Choose a contact data package that fits your outbound volume — one-off lists or ongoing monthly delivery of verified Indian decision-maker contacts.',
    priority: '0.7',
    changefreq: 'monthly',
  },
  {
    path: '/Contact',
    title: 'Contact VitalHawks | Request Verified B2B Contact Data',
    description:
      'Tell us your target roles, industry and geography, and get a verified contact list back within 48 hours. Email info@vitalhawks.com or message us on WhatsApp.',
    priority: '0.7',
    changefreq: 'yearly',
  },

  // --- trust ---------------------------------------------------------------
  {
    path: '/Client',
    title: 'Our Clients | VitalHawks B2B Contact Data',
    description:
      'The sales and marketing teams that rely on VitalHawks for verified decision-maker contact data across India.',
    priority: '0.6',
    changefreq: 'monthly',
  },
  {
    path: '/testimonials',
    title: 'Client Testimonials | VitalHawks Contact Data',
    description:
      'What clients say about working with VitalHawks — data accuracy, turnaround time, and how our contact lists perform in real outbound campaigns.',
    priority: '0.6',
    changefreq: 'monthly',
  },
  {
    path: '/Privacy',
    title: 'Privacy Policy | VitalHawks',
    description:
      'How VitalHawks collects, processes and protects data, aligned with India DPDP and GDPR requirements.',
    priority: '0.3',
    changefreq: 'yearly',
  },

  // --- utility (generated, but kept out of search) --------------------------
  {
    path: '/Popupform',
    title: 'Request Contact Data | VitalHawks',
    description: 'Enquiry form for requesting verified B2B contact data from VitalHawks.',
    noindex: true,
  },

  // --- industry pages ------------------------------------------------------
  {
    path: '/financial-services',
    title: 'Financial Services Contact Database India | VitalHawks',
    description:
      'Verified contacts of decision-makers at Indian banks, NBFCs, fintechs and financial services firms. Direct mobiles and work emails, 95% accuracy, 48-hour delivery.',
    priority: '0.9',
    changefreq: 'monthly',
  },
  {
    path: '/insurance-contact-data',
    title: 'Insurance Contact Data India | Verified Decision-Makers',
    description:
      'Verified contact data for insurers, brokers and insurtech decision-makers across India. Direct mobile numbers and work emails at 95% accuracy, delivered in 48 hours.',
    priority: '0.9',
    changefreq: 'monthly',
  },
  {
    path: '/manufacturing-database',
    title: 'Manufacturing Company Database India | Verified Contacts',
    description:
      'Reach plant heads, operations leaders and procurement decision-makers at Indian manufacturers. Verified direct mobiles and work emails, delivered within 48 hours.',
    priority: '0.9',
    changefreq: 'monthly',
  },
  {
    path: '/pharmaceutical-database',
    title: 'Pharmaceutical Company Database India | VitalHawks',
    description:
      'Verified decision-maker contacts at Indian pharmaceutical manufacturers, formulators and distributors. Direct mobiles and work emails at 95% accuracy.',
    priority: '0.9',
    changefreq: 'monthly',
  },
  {
    path: '/healthcare-database',
    title: 'Healthcare Database India | Hospital Decision-Maker Contacts',
    description:
      'Verified contacts of hospital administrators, procurement heads and clinical decision-makers across India. Direct mobile numbers and work emails, 48-hour delivery.',
    priority: '0.9',
    changefreq: 'monthly',
  },
  {
    path: '/it-company-database',
    title: 'IT Company Database India | Verified Tech Decision-Makers',
    description:
      'Verified contacts at Indian IT services firms, SaaS companies and technology providers. Direct mobiles and work emails of decision-makers, delivered in 48 hours.',
    priority: '0.9',
    changefreq: 'monthly',
  },
  {
    path: '/real-estate-database',
    title: 'Real Estate Database India | Verified Developer Contacts',
    description:
      'Verified contacts of developers, builders and real estate decision-makers across India. Direct mobile numbers and work emails at 95% accuracy, 48-hour turnaround.',
    priority: '0.9',
    changefreq: 'monthly',
  },

  // --- role / seniority pages ----------------------------------------------
  {
    path: '/cfo-database',
    title: 'CFO Database India | Verified CFO & Finance Head Contacts',
    description:
      'Verified CFO and finance head contacts across India — direct mobile numbers and work emails at 95% accuracy. Over 31,000 CFO contacts delivered in 12 months.',
    priority: '1.0',
    changefreq: 'monthly',
  },
  {
    path: '/ceo-database',
    title: 'CEO Database India | Verified Founder & CEO Contacts',
    description:
      'Verified founder, co-founder and CEO contacts across India — direct mobiles and work emails. Over 50,000 founder contacts delivered in the last 12 months.',
    priority: '1.0',
    changefreq: 'monthly',
  },
  {
    path: '/cio-database',
    title: 'CIO Database India | Verified CIO & CTO Contacts',
    description:
      'Verified CIO, CTO and technology head contacts across India — direct mobile numbers and work emails. Over 22,000 CTO contacts delivered in the last 12 months.',
    priority: '1.0',
    changefreq: 'monthly',
  },
  {
    path: '/hr-director-database',
    title: 'HR Director Database India | Verified HR Head Contacts',
    description:
      'Verified HR director and people leader contacts across India. Direct mobile numbers and work emails at 95% accuracy, delivered within 48 hours.',
    priority: '0.9',
    changefreq: 'monthly',
  },
  {
    path: '/procurement-head-database',
    title: 'Procurement Head Database India | Verified Buyer Contacts',
    description:
      'Verified procurement head and purchase decision-maker contacts across Indian enterprises. Direct mobiles and work emails, 95% accuracy, 48-hour delivery.',
    priority: '0.9',
    changefreq: 'monthly',
  },

  // --- competitor comparison pages -----------------------------------------
  {
    path: '/apollo-alternative-india',
    title: 'Apollo.io Alternative for India | VitalHawks',
    description:
      'Apollo coverage of Indian decision-makers is thin on direct mobiles. VitalHawks delivers verified India contacts at 95% accuracy, priced in rupees, in 48 hours.',
    priority: '0.9',
    changefreq: 'monthly',
  },
  {
    path: '/lusha-alternative-india',
    title: 'Lusha Alternative for India | Verified Mobile Numbers',
    description:
      'A Lusha alternative built for the Indian market — verified direct mobile numbers and work emails of decision-makers, no seat fees, delivered within 48 hours.',
    priority: '0.9',
    changefreq: 'monthly',
  },
  {
    path: '/zoominfo-alternative-india',
    title: 'ZoomInfo Alternative for India | VitalHawks',
    description:
      'ZoomInfo is priced for US teams and light on Indian coverage. VitalHawks delivers verified India decision-maker contacts at rupee pricing, 95% accuracy.',
    priority: '0.9',
    changefreq: 'monthly',
  },
  {
    path: '/rocketreach-alternative-india',
    title: 'RocketReach Alternative for India | VitalHawks',
    description:
      'A RocketReach alternative for Indian B2B sales teams — human-verified direct mobiles and work emails, 95% accuracy, delivered as a ready-to-use list in 48 hours.',
    priority: '0.9',
    changefreq: 'monthly',
  },
  {
    path: '/signalhire-alternative-india',
    title: 'SignalHire Alternative for India | VitalHawks',
    description:
      'A SignalHire alternative focused on India — verified decision-maker mobile numbers and work emails at 95% accuracy, delivered in 48 hours with no credit system.',
    priority: '0.9',
    changefreq: 'monthly',
  },
]
