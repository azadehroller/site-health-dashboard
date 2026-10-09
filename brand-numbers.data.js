window.BRAND_NUMBERS = {
 "scrapeDate": "9 October 2026",
 "pagesAudited": 158,
 "pagesLiveChecked": 158,
 "pagesWithNumbers": 117,
 "instanceCount": 258,
 "statusMeta": {
  "ok": {
   "label": "On brand",
   "icon": "check",
   "blurb": "Matches the source of truth."
  },
  "context": {
   "label": "Contextual",
   "icon": "info",
   "blurb": "A page-specific or frozen figure. Not a brand number — leave it alone."
  },
  "unverified": {
   "label": "Unverified",
   "icon": "search",
   "blurb": "The scrape could not read the value. Someone has to open the page."
  },
  "review": {
   "label": "Needs a call",
   "icon": "flag",
   "blurb": "A number is present but it is unclear which figure it is meant to be."
  },
  "drift": {
   "label": "Off brand",
   "icon": "alert",
   "blurb": "Shows a superseded value. Change it."
  }
 },
 "attentionStatuses": [
  "drift",
  "review",
  "unverified"
 ],
 "statusCounts": {
  "ok": 197,
  "context": 24,
  "unverified": 37,
  "review": 0,
  "drift": 0
 },
 "sourceOfTruth": [
  {
   "id": "venues",
   "label": "Venues worldwide",
   "value": "3,500+",
   "canonical": "Trusted by 3,500+ venues worldwide",
   "retired": [
    "3,000",
    "2,600",
    "2,300"
   ],
   "owner": "Brand / Marketing",
   "controlled": "Logo-Set module default + per-page Heading-Composition copy, including /fr/commencer",
   "blurb": "The current figure is 3,500+. Marketing pages and blog posts that cite the venue count match.",
   "instances": 150,
   "onBrand": 150,
   "offBrand": 0,
   "retiredFound": []
  },
  {
   "id": "revenue",
   "label": "Transactions processed",
   "value": "$5B",
   "canonical": "$5B transactions processed",
   "retired": [
    "$4B",
    "$3B"
   ],
   "owner": "Finance / Brand",
   "controlled": "Stats-Set and Stats-Set-Stacked module fields",
   "blurb": "The headline money figure is $5B transactions processed. Live brand claims match. Year-in-Review pages may still carry frozen annual numbers on purpose.",
   "instances": 47,
   "onBrand": 47,
   "offBrand": 0,
   "retiredFound": []
  }
 ],
 "components": [
  {
   "id": "ls",
   "name": "Logo-Set",
   "tagline": "Customer logo carousel with a heading above it",
   "module": "logo-set-global.module",
   "moduleId": "195231364891",
   "updateWhere": "HubSpot Design Manager → module default heading",
   "updateEffort": "one",
   "updateNote": "One edit in the logo-set-global default changes the heading on the English pages. All 90 logo headings that state a venue count match 3,500+, including the French heading on /fr/commencer. /iaapa-europe-2026 and /2026-wwa use the module for a partner heading and do not carry the venue count. /competitor/booknow-software redirects to the homepage.",
   "rebuild": "Becomes one Customer logo carousel component; heading moves to a Sanity global.",
   "figma": [
    {
     "label": "Light bg",
     "href": "https://www.figma.com/design/O9pCkQPfrVioGWgt9I4Mjx/Product-Launch-key-visuals---assets?node-id=4228-16167",
     "img": "figma-screenshots/global-logo-carousel.png",
     "alt": "Customer logo carousel – light background"
    },
    {
     "label": "Dark bg",
     "href": "https://www.figma.com/design/bx2k4aFWamz5TjKkpQ21Sa/Website-Refresh-2022---2024?node-id=8810-43367&m=dev",
     "img": "figma-screenshots/global-logo-carousel-dark-multi-venue.png",
     "alt": "Customer logo carousel – dark background"
    }
   ],
   "pageCount": 90,
   "statusCounts": {
    "ok": 90,
    "context": 0,
    "unverified": 0,
    "review": 0,
    "drift": 0
   },
   "attention": 0,
   "pages": [
    {
     "title": "Adventure Parks",
     "href": "https://www.roller.software/industries/adventure-parks-software",
     "display": "roller.software/industries/adventure-parks-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "AI for Attractions",
     "href": "https://www.roller.software/features/ai-for-attractions",
     "display": "roller.software/features/ai-for-attractions",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "All-in-One Venue Management Software for Attractions",
     "href": "https://www.roller.software",
     "display": "roller.software",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Aluvii",
     "href": "https://www.roller.software/competitor/aluvii",
     "display": "roller.software/competitor/aluvii",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Alvarado",
     "href": "https://www.roller.software/partners/alvarado",
     "display": "roller.software/partners/alvarado",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Amusement & Theme Parks",
     "href": "https://www.roller.software/industries/amusement-and-theme-parks-software",
     "display": "roller.software/industries/amusement-and-theme-parks-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Amusement Connect",
     "href": "https://www.roller.software/partners/amusement-connect",
     "display": "roller.software/partners/amusement-connect",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "API Integrations",
     "href": "https://www.roller.software/features/api-integrations",
     "display": "roller.software/features/api-integrations",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Axe Throwing",
     "href": "https://www.roller.software/industries/axe-throwing-software",
     "display": "roller.software/industries/axe-throwing-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Bookeo",
     "href": "https://www.roller.software/competitor/bookeo",
     "display": "roller.software/competitor/bookeo",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Bowling",
     "href": "https://www.roller.software/industries/bowling-alley-management-software",
     "display": "roller.software/industries/bowling-alley-management-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Capacity Management",
     "href": "https://www.roller.software/features/capacity-management",
     "display": "roller.software/features/capacity-management",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Cashless Wallets",
     "href": "https://www.roller.software/features/cashless-wallets",
     "display": "roller.software/features/cashless-wallets",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Centaman",
     "href": "https://www.roller.software/competitor/centaman",
     "display": "roller.software/competitor/centaman",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Channel Management",
     "href": "https://www.roller.software/features/channel-management",
     "display": "roller.software/features/channel-management",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Checkfront",
     "href": "https://www.roller.software/competitor/checkfront",
     "display": "roller.software/competitor/checkfront",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Clubspeed",
     "href": "https://www.roller.software/competitor/clubspeed",
     "display": "roller.software/competitor/clubspeed",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "CRM Experience",
     "href": "https://www.roller.software/features/crm-experience",
     "display": "roller.software/features/crm-experience",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Digital Waivers",
     "href": "https://www.roller.software/features/digital-waiver-software",
     "display": "roller.software/features/digital-waiver-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Enterprise",
     "href": "https://www.roller.software/solutions/enterprise",
     "display": "roller.software/solutions/enterprise",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Escape Rooms",
     "href": "https://www.roller.software/industries/escape-room-software",
     "display": "roller.software/industries/escape-room-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Family Entertainment Centers",
     "href": "https://www.roller.software/industries/family-entertainment-center-software",
     "display": "roller.software/industries/family-entertainment-center-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "FareHarbor",
     "href": "https://www.roller.software/competitor/fareharbor",
     "display": "roller.software/competitor/fareharbor",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "FEC POS",
     "href": "https://www.roller.software/industries/family-entertainment-center-software/pos-system",
     "display": "roller.software/industries/family-entertainment-center-software/pos-system",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "FEC Ticketing",
     "href": "https://www.roller.software/industries/family-entertainment-center-software/ticketing-system",
     "display": "roller.software/industries/family-entertainment-center-software/ticketing-system",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Fresh KDS",
     "href": "https://www.roller.software/partners/fresh-kds",
     "display": "roller.software/partners/fresh-kds",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "FuseMetrix",
     "href": "https://www.roller.software/competitor/fusemetrix",
     "display": "roller.software/competitor/fusemetrix",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Gift Cards",
     "href": "https://www.roller.software/features/giftcard",
     "display": "roller.software/features/giftcard",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Go-Karting",
     "href": "https://www.roller.software/industries/go-karting",
     "display": "roller.software/industries/go-karting",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Groupon",
     "href": "https://www.roller.software/partners/groupon",
     "display": "roller.software/partners/groupon",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Guest Experience Agent",
     "href": "https://www.roller.software/features/guest-experience-agent",
     "display": "roller.software/features/guest-experience-agent",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Guest Feedback Software",
     "href": "https://www.roller.software/features/guest-feedback-software",
     "display": "roller.software/features/guest-feedback-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Guest Tabs",
     "href": "https://www.roller.software/features/guest-tabs",
     "display": "roller.software/features/guest-tabs",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Ice Skating",
     "href": "https://www.roller.software/industries/ice-skating",
     "display": "roller.software/industries/ice-skating",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Industries",
     "href": "https://www.roller.software/industries",
     "display": "roller.software/industries",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Intercard",
     "href": "https://www.roller.software/partners/intercard",
     "display": "roller.software/partners/intercard",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Laser Tag",
     "href": "https://www.roller.software/industries/laser-tag-software",
     "display": "roller.software/industries/laser-tag-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Lightspeed",
     "href": "https://www.roller.software/competitor/lightspeed",
     "display": "roller.software/competitor/lightspeed",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "LiliPad POS",
     "href": "https://www.roller.software/competitor/lilypad-pos",
     "display": "roller.software/competitor/lilypad-pos",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Logiciel tout-en-un de gestion pour sites de loisirs",
     "href": "https://www.roller.software/fr/commencer",
     "display": "roller.software/fr/commencer",
     "numbers": [
      {
       "kind": "venue",
       "value": "Utilisé par plus de 3 500 sites dans le monde entier",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Loyalty Programs",
     "href": "https://www.roller.software/features/loyalty-programs",
     "display": "roller.software/features/loyalty-programs",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Membership Management",
     "href": "https://www.roller.software/features/membership-management-software",
     "display": "roller.software/features/membership-management-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Mini Golf",
     "href": "https://www.roller.software/industries/mini-golf",
     "display": "roller.software/industries/mini-golf",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Mobile Check-in App",
     "href": "https://www.roller.software/features/mobile-check-in",
     "display": "roller.software/features/mobile-check-in",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Mobile Food & Beverage",
     "href": "https://www.roller.software/features/mobile-food-and-beverage-ordering",
     "display": "roller.software/features/mobile-food-and-beverage-ordering",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Multi-Venue Management",
     "href": "https://www.roller.software/features/multi-venue-management",
     "display": "roller.software/features/multi-venue-management",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Museums",
     "href": "https://www.roller.software/industries/museums-software",
     "display": "roller.software/industries/museums-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Online Ticketing System",
     "href": "https://www.roller.software/features/online-ticket-system",
     "display": "roller.software/features/online-ticket-system",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Packages",
     "href": "https://www.roller.software/features/packages",
     "display": "roller.software/features/packages",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Party Booking Software",
     "href": "https://www.roller.software/features/party-booking-software",
     "display": "roller.software/features/party-booking-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Party Center Software",
     "href": "https://www.roller.software/competitor/party-center-software",
     "display": "roller.software/competitor/party-center-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Pickleball",
     "href": "https://www.roller.software/industries/pickleball-software",
     "display": "roller.software/industries/pickleball-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Playcenter Online Ticketing",
     "href": "https://www.roller.software/industries/playcenter-software/online-ticketing-system",
     "display": "roller.software/industries/playcenter-software/online-ticketing-system",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Playcenter POS",
     "href": "https://www.roller.software/industries/playground-software/play-center-point-of-sale-system",
     "display": "roller.software/industries/playground-software/play-center-point-of-sale-system",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Playground / Softplay",
     "href": "https://www.roller.software/industries/playground-software",
     "display": "roller.software/industries/playground-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Point of Sale",
     "href": "https://www.roller.software/features/pos",
     "display": "roller.software/features/pos",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "POS Reports",
     "href": "https://www.roller.software/features/point-of-sale-reports",
     "display": "roller.software/features/point-of-sale-reports",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Pricing",
     "href": "https://www.roller.software/pricing",
     "display": "roller.software/pricing",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Pricing Strategy",
     "href": "https://www.roller.software/features/pricing-strategy",
     "display": "roller.software/features/pricing-strategy",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Printer Management",
     "href": "https://www.roller.software/features/printer-management",
     "display": "roller.software/features/printer-management",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "RaceFacer",
     "href": "https://www.roller.software/competitor/racefacer",
     "display": "roller.software/competitor/racefacer",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "RFID",
     "href": "https://www.roller.software/products/rfid",
     "display": "roller.software/products/rfid",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Rock Climbing Gyms",
     "href": "https://www.roller.software/industries/climbing-gyms-software",
     "display": "roller.software/industries/climbing-gyms-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Rock Gym Pro",
     "href": "https://www.roller.software/competitor/rock-gym-pro",
     "display": "roller.software/competitor/rock-gym-pro",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "RocketRez",
     "href": "https://www.roller.software/competitor/rocketrez",
     "display": "roller.software/competitor/rocketrez",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "ROLLER and Centeredge",
     "href": "https://www.roller.software/centeredge-software-alternative",
     "display": "roller.software/centeredge-software-alternative",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "ROLLER Capital",
     "href": "https://www.roller.software/features/capital",
     "display": "roller.software/features/capital",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "ROLLER iQ",
     "href": "https://www.roller.software/features/ai-assistant",
     "display": "roller.software/features/ai-assistant",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "ROLLER Payments",
     "href": "https://www.roller.software/features/payment-processing-software",
     "display": "roller.software/features/payment-processing-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Roller Skating",
     "href": "https://www.roller.software/industries/skating-rink-software",
     "display": "roller.software/industries/skating-rink-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Segmentation Groups",
     "href": "https://www.roller.software/solutions/multi-venue",
     "display": "roller.software/solutions/multi-venue",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Self-Serve Kiosks",
     "href": "https://www.roller.software/features/self-service-ticketing-kiosk",
     "display": "roller.software/features/self-service-ticketing-kiosk",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Solutions SBM",
     "href": "https://www.roller.software/solutions/grow-your-business",
     "display": "roller.software/solutions/grow-your-business",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Square",
     "href": "https://www.roller.software/competitor/square",
     "display": "roller.software/competitor/square",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Staff Permissions",
     "href": "https://www.roller.software/features/staff-permissions",
     "display": "roller.software/features/staff-permissions",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Stock & Inventory Control",
     "href": "https://www.roller.software/features/stock-and-inventory-control",
     "display": "roller.software/features/stock-and-inventory-control",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Tanda",
     "href": "https://www.roller.software/partners/tanda",
     "display": "roller.software/partners/tanda",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Ticket Tailor",
     "href": "https://www.roller.software/competitor/tickettailor",
     "display": "roller.software/competitor/tickettailor",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Trampoline Parks",
     "href": "https://www.roller.software/industries/trampoline-parks-software",
     "display": "roller.software/industries/trampoline-parks-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Trampoline POS",
     "href": "https://www.roller.software/industries/trampoline-parks-software/pos",
     "display": "roller.software/industries/trampoline-parks-software/pos",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Trampoline Ticketing",
     "href": "https://www.roller.software/industries/trampoline-parks-software/ticketing-software",
     "display": "roller.software/industries/trampoline-parks-software/ticketing-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Venue Management Software",
     "href": "https://www.roller.software/venue-management-software",
     "display": "roller.software/venue-management-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Venue Sumo",
     "href": "https://www.roller.software/competitor/venue-sumo",
     "display": "roller.software/competitor/venue-sumo",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Visitor Attractions",
     "href": "https://www.roller.software/industries/visitor-attractions-software",
     "display": "roller.software/industries/visitor-attractions-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Wake & Aqua Parks",
     "href": "https://www.roller.software/industries/wake-and-aqua-parks-management-software",
     "display": "roller.software/industries/wake-and-aqua-parks-management-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Wake Park Ticketing",
     "href": "https://www.roller.software/industries/wake-parks-management-software/ticketing-system",
     "display": "roller.software/industries/wake-parks-management-software/ticketing-system",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Water Parks",
     "href": "https://www.roller.software/industries/water-parks-management-software",
     "display": "roller.software/industries/water-parks-management-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Workforce.com",
     "href": "https://www.roller.software/partners/workforce.com",
     "display": "roller.software/partners/workforce.com",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Yellow Dog",
     "href": "https://www.roller.software/partners/yellow-dog",
     "display": "roller.software/partners/yellow-dog",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Zoos & Aquariums",
     "href": "https://www.roller.software/industries/zoos-management-software",
     "display": "roller.software/industries/zoos-management-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    }
   ]
  },
  {
   "id": "hc",
   "name": "Heading-Composition",
   "tagline": "Eyebrow, headline and body copy — numbers written into the headline",
   "module": "heading-composition.module",
   "moduleId": "118787874184",
   "updateWhere": "HubSpot page editor, one page at a time",
   "updateEffort": "each",
   "updateNote": "Every instance is hand-written page copy. There is no shared default — each of the 24 pages has to be opened and edited individually.",
   "rebuild": "Becomes the Text block heading composition; numbers stay as page copy.",
   "figma": [
    {
     "label": "Desktop",
     "href": "https://www.figma.com/design/O9pCkQPfrVioGWgt9I4Mjx/Product-Launch-key-visuals---assets?node-id=4228-16190",
     "img": "figma-screenshots/text-desktop.png",
     "alt": "Heading composition – desktop"
    },
    {
     "label": "Mobile",
     "href": "https://www.figma.com/design/O9pCkQPfrVioGWgt9I4Mjx/Product-Launch-key-visuals---assets?node-id=4228-16354",
     "img": "figma-screenshots/text-mobile.png",
     "alt": "Heading composition – mobile"
    }
   ],
   "pageCount": 24,
   "statusCounts": {
    "ok": 15,
    "context": 13,
    "unverified": 0,
    "review": 0,
    "drift": 0
   },
   "attention": 0,
   "pages": [
    {
     "title": "2024 Year in Review",
     "href": "https://www.roller.software/2023-rollup",
     "display": "roller.software/2023-rollup",
     "numbers": [
      {
       "kind": "context",
       "value": "700,000",
       "status": "context",
       "reason": "Page-specific figure",
       "action": "An event, customer or page-level number. Not a brand number."
      }
     ],
     "status": "context"
    },
    {
     "title": "All-in-One Venue Management Software for Attractions",
     "href": "https://www.roller.software",
     "display": "roller.software",
     "numbers": [
      {
       "kind": "venue",
       "value": "The platform powering 3,500+ thriving attractions",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Amusement Expo 2026",
     "href": "https://www.roller.software/events/amusementexpo2025",
     "display": "roller.software/events/amusementexpo2025",
     "numbers": [
      {
       "kind": "context",
       "value": "4,500",
       "status": "context",
       "reason": "Page-specific figure",
       "action": "An event, customer or page-level number. Not a brand number."
      }
     ],
     "status": "context"
    },
    {
     "title": "Area 51",
     "href": "https://www.roller.software/customers/stories/area-51",
     "display": "roller.software/customers/stories/area-51",
     "numbers": [
      {
       "kind": "context",
       "value": "1,500",
       "status": "context",
       "reason": "Page-specific figure",
       "action": "An event, customer or page-level number. Not a brand number."
      }
     ],
     "status": "context"
    },
    {
     "title": "Bowling Trends 2026",
     "href": "https://www.roller.software/2026-bowling-trends",
     "display": "roller.software/2026-bowling-trends",
     "numbers": [
      {
       "kind": "context",
       "value": "1,000 venues (report data)",
       "status": "context",
       "reason": "Report / survey data",
       "action": "Sourced from a published report. Tied to that report, not to the brand numbers."
      }
     ],
     "status": "context"
    },
    {
     "title": "Business Solutions",
     "href": "https://www.roller.software/business-solutions",
     "display": "roller.software/business-solutions",
     "numbers": [
      {
       "kind": "venue",
       "value": "Helping a community of 3,500+ venues thrive",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Company facts",
     "href": "https://www.roller.software/company-facts",
     "display": "roller.software/company-facts",
     "numbers": [
      {
       "kind": "venue",
       "value": "employees globally Customers: 3,500+ venues worldwide Markets served: The Am",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "Annual transaction volume: $5B processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "FEC Ticketing",
     "href": "https://www.roller.software/industries/family-entertainment-center-software/ticketing-system",
     "display": "roller.software/industries/family-entertainment-center-software/ticketing-system",
     "numbers": [
      {
       "kind": "context",
       "value": "15,000 tickets/event",
       "status": "context",
       "reason": "Page-specific figure",
       "action": "An event, customer or page-level number. Not a brand number."
      }
     ],
     "status": "context"
    },
    {
     "title": "Get Started",
     "href": "https://www.roller.software/get-started",
     "display": "roller.software/get-started",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "IAAPA Orlando 2025",
     "href": "https://www.roller.software/events/iaapaexpo2024",
     "display": "roller.software/events/iaapaexpo2024",
     "numbers": [
      {
       "kind": "context",
       "value": "1,100",
       "status": "context",
       "reason": "Page-specific figure",
       "action": "An event, customer or page-level number. Not a brand number."
      },
      {
       "kind": "context",
       "value": "40,000",
       "status": "context",
       "reason": "Page-specific figure",
       "action": "An event, customer or page-level number. Not a brand number."
      }
     ],
     "status": "context"
    },
    {
     "title": "Implementation Services",
     "href": "https://www.roller.software/professional-services/implementation",
     "display": "roller.software/professional-services/implementation",
     "numbers": [
      {
       "kind": "context",
       "value": "1,000 venues onboarded",
       "status": "context",
       "reason": "Services figure",
       "action": "A professional-services milestone, tracked separately from the venue count."
      }
     ],
     "status": "context"
    },
    {
     "title": "Industries",
     "href": "https://www.roller.software/industries",
     "display": "roller.software/industries",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Laser Tag",
     "href": "https://www.roller.software/industries/laser-tag-software",
     "display": "roller.software/industries/laser-tag-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by 3,500+ attractions worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Logiciel tout-en-un de gestion pour sites de loisirs",
     "href": "https://www.roller.software/fr/commencer",
     "display": "roller.software/fr/commencer",
     "numbers": [
      {
       "kind": "venue",
       "value": "ROLLER : la plateforme qui accompagne plus de 3 500 sites de loisirs performants",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "venue",
       "value": "Plus de 3 500 sites nous font confiance dans le monde",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "venue",
       "value": "FAQ: ROLLER équipe aujourd’hui plus de 3 500 sites dans plus de 30 pays",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Loyalty matters",
     "href": "https://www.roller.software/loyalty-matters",
     "display": "roller.software/loyalty-matters",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,500+ venues worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Party Parent Report",
     "href": "https://www.roller.software/party-parent-report",
     "display": "roller.software/party-parent-report",
     "numbers": [
      {
       "kind": "context",
       "value": "2,000 (survey data)",
       "status": "context",
       "reason": "Report / survey data",
       "action": "Sourced from a published report. Tied to that report, not to the brand numbers."
      }
     ],
     "status": "context"
    },
    {
     "title": "Pricing",
     "href": "https://www.roller.software/pricing",
     "display": "roller.software/pricing",
     "numbers": [
      {
       "kind": "venue",
       "value": "We partner with over 3,500+ attractions venues",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Professional Services",
     "href": "https://www.roller.software/professional-services",
     "display": "roller.software/professional-services",
     "numbers": [
      {
       "kind": "context",
       "value": "1,000 venues onboarded",
       "status": "context",
       "reason": "Services figure",
       "action": "A professional-services milestone, tracked separately from the venue count."
      }
     ],
     "status": "context"
    },
    {
     "title": "Pulse Report",
     "href": "https://www.roller.software/2025-pulse-report",
     "display": "roller.software/2025-pulse-report",
     "numbers": [
      {
       "kind": "context",
       "value": "2,000 (survey data)",
       "status": "context",
       "reason": "Report / survey data",
       "action": "Sourced from a published report. Tied to that report, not to the brand numbers."
      }
     ],
     "status": "context"
    },
    {
     "title": "QubicaAMF",
     "href": "https://www.roller.software/partners/qubicaamf",
     "display": "roller.software/partners/qubicaamf",
     "numbers": [
      {
       "kind": "venue",
       "value": "years ago, ROLLER now powers 3,500+ venues across 30+ countries — from sing",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Roller Skating Trends 2026",
     "href": "https://www.roller.software/2025-roller-skating-trends-report",
     "display": "roller.software/2025-roller-skating-trends-report",
     "numbers": [
      {
       "kind": "context",
       "value": "1,000 venues (report data)",
       "status": "context",
       "reason": "Report / survey data",
       "action": "Sourced from a published report. Tied to that report, not to the brand numbers."
      }
     ],
     "status": "context"
    },
    {
     "title": "Venue Sumo",
     "href": "https://www.roller.software/competitor/venue-sumo",
     "display": "roller.software/competitor/venue-sumo",
     "numbers": [
      {
       "kind": "venue",
       "value": "Grow with us Trusted by over 3,500+ venues worldwide ROLLER VS. VENUE SUMO:",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Water Park Trends 2026",
     "href": "https://www.roller.software/2025-water-park-trends-report",
     "display": "roller.software/2025-water-park-trends-report",
     "numbers": [
      {
       "kind": "context",
       "value": "1,000 venues (report data)",
       "status": "context",
       "reason": "Report / survey data",
       "action": "Sourced from a published report. Tied to that report, not to the brand numbers."
      }
     ],
     "status": "context"
    },
    {
     "title": "Ticket Tailor",
     "href": "https://www.roller.software/competitor/tickettailor",
     "display": "roller.software/competitor/tickettailor",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by 3,500+ attractions worldwide",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    }
   ]
  },
  {
   "id": "ur",
   "name": "User-Reviews",
   "tagline": "Boxed review cards — star rating, score and review count per platform",
   "module": "widget-user-review.module",
   "moduleId": null,
   "updateWhere": "Per-page, or module defaults in HubSpot",
   "updateEffort": "mixed",
   "updateNote": "Scores and review counts are sourced from G2, Capterra and GetApp. They drift on their own as new reviews land — nobody gets notified when they do.",
   "rebuild": "Becomes the Boxed user reviews block with an items array.",
   "figma": [
    {
     "label": "Boxed reviews",
     "href": "https://www.figma.com/design/bx2k4aFWamz5TjKkpQ21Sa/Website-Refresh-2022---2024?node-id=5564-30189",
     "img": "figma-screenshots/boxed-user-reviews.png",
     "alt": "Boxed user reviews"
    },
    {
     "label": "Badge strip",
     "href": "https://www.figma.com/design/bx2k4aFWamz5TjKkpQ21Sa/Website-Refresh-2022---2024?node-id=6035-37652",
     "img": "figma-screenshots/global-user-review-widget.png",
     "alt": "User review widget badge strip"
    }
   ],
   "pageCount": 37,
   "statusCounts": {
    "ok": 0,
    "context": 0,
    "unverified": 37,
    "review": 0,
    "drift": 0
   },
   "attention": 37,
   "pages": [
    {
     "title": "Adventure Parks",
     "href": "https://www.roller.software/industries/adventure-parks-software",
     "display": "roller.software/industries/adventure-parks-software",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "All-in-One Venue Management Software for Attractions",
     "href": "https://www.roller.software",
     "display": "roller.software",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Amusement & Theme Parks",
     "href": "https://www.roller.software/industries/amusement-and-theme-parks-software",
     "display": "roller.software/industries/amusement-and-theme-parks-software",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Aqua Park Management Software | Booking, POS & Waivers",
     "href": "https://www.roller.software/industries/wake-and-aqua-parks-management-software",
     "display": "roller.software/industries/wake-and-aqua-parks-management-software",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Attractions Management Software | Streamline Operations and Maximize Revenue",
     "href": "https://www.roller.software/solutions/grow-your-business",
     "display": "roller.software/solutions/grow-your-business",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Axe Throwing",
     "href": "https://www.roller.software/industries/axe-throwing-software",
     "display": "roller.software/industries/axe-throwing-software",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Bowling",
     "href": "https://www.roller.software/industries/bowling-alley-management-software",
     "display": "roller.software/industries/bowling-alley-management-software",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Digital Waivers",
     "href": "https://www.roller.software/features/digital-waiver-software",
     "display": "roller.software/features/digital-waiver-software",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Enterprise",
     "href": "https://www.roller.software/solutions/enterprise",
     "display": "roller.software/solutions/enterprise",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Escape Rooms",
     "href": "https://www.roller.software/industries/escape-room-software",
     "display": "roller.software/industries/escape-room-software",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Family Entertainment Centers",
     "href": "https://www.roller.software/industries/family-entertainment-center-software",
     "display": "roller.software/industries/family-entertainment-center-software",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "FareHarbor",
     "href": "https://www.roller.software/competitor/fareharbor",
     "display": "roller.software/competitor/fareharbor",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Gift Cards",
     "href": "https://www.roller.software/features/giftcard",
     "display": "roller.software/features/giftcard",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Go-Karting",
     "href": "https://www.roller.software/industries/go-karting",
     "display": "roller.software/industries/go-karting",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Guest Feedback Software",
     "href": "https://www.roller.software/features/guest-feedback-software",
     "display": "roller.software/features/guest-feedback-software",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Ice Skating",
     "href": "https://www.roller.software/industries/ice-skating",
     "display": "roller.software/industries/ice-skating",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Indoor Playground & Soft Play Center Software | POS & Booking System",
     "href": "https://www.roller.software/industries/playground-software",
     "display": "roller.software/industries/playground-software",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Laser Tag",
     "href": "https://www.roller.software/industries/laser-tag-software",
     "display": "roller.software/industries/laser-tag-software",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "LiliPad POS",
     "href": "https://www.roller.software/competitor/lilypad-pos",
     "display": "roller.software/competitor/lilypad-pos",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Membership Management",
     "href": "https://www.roller.software/features/membership-management-software",
     "display": "roller.software/features/membership-management-software",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Mini Golf",
     "href": "https://www.roller.software/industries/mini-golf",
     "display": "roller.software/industries/mini-golf",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Museums",
     "href": "https://www.roller.software/industries/museums-software",
     "display": "roller.software/industries/museums-software",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Party Booking Software",
     "href": "https://www.roller.software/features/party-booking-software",
     "display": "roller.software/features/party-booking-software",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Pickleball",
     "href": "https://www.roller.software/industries/pickleball-software",
     "display": "roller.software/industries/pickleball-software",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Point of Sale",
     "href": "https://www.roller.software/features/pos",
     "display": "roller.software/features/pos",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Professional Services",
     "href": "https://www.roller.software/professional-services",
     "display": "roller.software/professional-services",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Rock Climbing Gyms",
     "href": "https://www.roller.software/industries/climbing-gyms-software",
     "display": "roller.software/industries/climbing-gyms-software",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Roller Skating",
     "href": "https://www.roller.software/industries/skating-rink-software",
     "display": "roller.software/industries/skating-rink-software",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "ROLLER Software Features | POS, Ticketing & Venue Management Tools",
     "href": "https://www.roller.software/features",
     "display": "roller.software/features",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "ROLLER vs CenterEdge: Features, Pros, Pricing",
     "href": "https://www.roller.software/centeredge-software-alternative",
     "display": "roller.software/centeredge-software-alternative",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "ROLLER vs Rock Gym Pro: Features, Pros, Pricing",
     "href": "https://www.roller.software/competitor/rock-gym-pro",
     "display": "roller.software/competitor/rock-gym-pro",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Self-Serve Kiosks",
     "href": "https://www.roller.software/features/self-service-ticketing-kiosk",
     "display": "roller.software/features/self-service-ticketing-kiosk",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "The Future of Multi-Venue Management",
     "href": "https://www.roller.software/solutions/multi-venue",
     "display": "roller.software/solutions/multi-venue",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Trampoline Parks",
     "href": "https://www.roller.software/industries/trampoline-parks-software",
     "display": "roller.software/industries/trampoline-parks-software",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Visitor Attractions",
     "href": "https://www.roller.software/industries/visitor-attractions-software",
     "display": "roller.software/industries/visitor-attractions-software",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Water Park Management Software | Ticketing, POS & Capacity Control",
     "href": "https://www.roller.software/industries/water-parks-management-software",
     "display": "roller.software/industries/water-parks-management-software",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Zoos & Aquariums",
     "href": "https://www.roller.software/industries/zoos-management-software",
     "display": "roller.software/industries/zoos-management-software",
     "numbers": [
      {
       "kind": "note",
       "value": "review scores",
       "status": "unverified",
       "reason": "Third-party figures",
       "action": "Star ratings and review counts come from G2 / Capterra / GetApp and change on their own. Re-check when those platforms update."
      }
     ],
     "status": "unverified"
    }
   ]
  },
  {
   "id": "ss",
   "name": "Stats-Set",
   "tagline": "A row of ROLLER headline numbers",
   "module": "stats-set.module",
   "moduleId": "138558821728",
   "updateWhere": "HubSpot module fields per page",
   "updateEffort": "mixed",
   "updateNote": "41 pages share the company-stats block: 3,500+ customers and $5B transactions processed annually. /fr/commencer has its own tile, 3 500+ clients. The other Stats-Set modules are edited per page and currently carry operational or page-level figures.",
   "rebuild": "Sanity singleton — one set of values, used by every page.",
   "figma": [
    {
     "label": "Desktop",
     "href": "https://www.figma.com/design/bx2k4aFWamz5TjKkpQ21Sa/Website-Refresh-2022---2024?node-id=5575-43587",
     "img": "figma-screenshots/global-company-stats.png",
     "alt": "Company stats widget – desktop"
    },
    {
     "label": "Mobile",
     "href": "https://www.figma.com/design/OZZPhDtGvUtHuzYIDZ5RWx/Website-library-2023?node-id=4159-145238&m=dev",
     "img": "figma-screenshots/company-stats-mobile.png",
     "alt": "Company stats widget – mobile"
    }
   ],
   "pageCount": 52,
   "statusCounts": {
    "ok": 82,
    "context": 11,
    "unverified": 0,
    "review": 0,
    "drift": 0
   },
   "attention": 0,
   "pages": [
    {
     "title": "2024 Year in Review",
     "href": "https://www.roller.software/2023-rollup",
     "display": "roller.software/2023-rollup",
     "numbers": [
      {
       "kind": "context",
       "value": "Year-in-review figures: $2m · 92% · $25k · 576%",
       "status": "context",
       "reason": "Page-specific figure",
       "action": "An event, customer or page-level number. Not a brand number."
      }
     ],
     "status": "context"
    },
    {
     "title": "2025 Year in Review",
     "href": "https://www.roller.software/2024-rollup",
     "display": "roller.software/2024-rollup",
     "numbers": [
      {
       "kind": "context",
       "value": "Year-in-review figures: $1M+ · 5x · $60,000 · 50%",
       "status": "context",
       "reason": "Page-specific figure",
       "action": "An event, customer or page-level number. Not a brand number."
      }
     ],
     "status": "context"
    },
    {
     "title": "2026 Year in Review",
     "href": "https://www.roller.software/2025-roll-up-year-in-review",
     "display": "roller.software/2025-roll-up-year-in-review",
     "numbers": [
      {
       "kind": "context",
       "value": "Year-in-review figures: $2M Increase in revenue this year · 2x Increase in weekly sales · 72 Venues centralized under one platform · £27,000 In bookings within 3 days of launch",
       "status": "context",
       "reason": "Page-specific figure",
       "action": "An event, customer or page-level number. Not a brand number."
      }
     ],
     "status": "context"
    },
    {
     "title": "All-in-One Venue Management Software for Attractions",
     "href": "https://www.roller.software",
     "display": "roller.software",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Alvarado Integration Partner | Guest Experience Platform",
     "href": "https://www.roller.software/partners/alvarado",
     "display": "roller.software/partners/alvarado",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Amusement Connect Integration Partner - Enhance Your Arcade Management",
     "href": "https://www.roller.software/partners/amusement-connect",
     "display": "roller.software/partners/amusement-connect",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Attractions CRM Software | Personalize Marketing & Drive Loyalty",
     "href": "https://www.roller.software/features/crm-experience",
     "display": "roller.software/features/crm-experience",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Boost Revenue with Curated Product Bundles",
     "href": "https://www.roller.software/features/packages",
     "display": "roller.software/features/packages",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Business Solutions",
     "href": "https://www.roller.software/business-solutions",
     "display": "roller.software/business-solutions",
     "numbers": [
      {
       "kind": "revenue",
       "value": "$5B transaction processed in the last 12 months",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Campaign Monitor Integration Partner | Guest Experience Platform",
     "href": "https://www.roller.software/partners/campaign-monitor",
     "display": "roller.software/partners/campaign-monitor",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Capacity Management Software | Control Guest Numbers in Real Time",
     "href": "https://www.roller.software/features/capacity-management",
     "display": "roller.software/features/capacity-management",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Cashless Payment System | RFID Wristbands & Digital Wallets",
     "href": "https://www.roller.software/features/cashless-wallets",
     "display": "roller.software/features/cashless-wallets",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Channel Management Software | Distribute & Sell More Attraction Tickets",
     "href": "https://www.roller.software/features/channel-management",
     "display": "roller.software/features/channel-management",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Digital Waiver Software | Contactless, Fast & Compliant",
     "href": "https://www.roller.software/features/digital-waiver-software",
     "display": "roller.software/features/digital-waiver-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Enterprise",
     "href": "https://www.roller.software/solutions/enterprise",
     "display": "roller.software/solutions/enterprise",
     "numbers": [
      {
       "kind": "context",
       "value": "99.99% platform uptime. · 35% decrease in additional location set-up time with HQ. · 50% increase in basket size. · 70% reduction in booking management time.",
       "status": "context",
       "reason": "Page-specific figure",
       "action": "An event, customer or page-level number. Not a brand number."
      }
     ],
     "status": "context"
    },
    {
     "title": "Fresh KDS Integration Partner - Streamline Food & Beverage Operations",
     "href": "https://www.roller.software/partners/fresh-kds",
     "display": "roller.software/partners/fresh-kds",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Get Started",
     "href": "https://www.roller.software/get-started",
     "display": "roller.software/get-started",
     "numbers": [
      {
       "kind": "context",
       "value": "1.5x larger Basket size · 50% Reduction in admin time · 27% higher Guest experience · -40% Admin labour costs",
       "status": "context",
       "reason": "Page-specific figure",
       "action": "An event, customer or page-level number. Not a brand number."
      }
     ],
     "status": "context"
    },
    {
     "title": "Gift Card Software | Sell & Manage Digital Cards for Attractions",
     "href": "https://www.roller.software/features/giftcard",
     "display": "roller.software/features/giftcard",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Groupon Integration Partner",
     "href": "https://www.roller.software/partners/groupon",
     "display": "roller.software/partners/groupon",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Guest Tab Software | Keep Tabs Open, Boost Guest Spending",
     "href": "https://www.roller.software/features/guest-tabs",
     "display": "roller.software/features/guest-tabs",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Intercard Integration Partner",
     "href": "https://www.roller.software/partners/intercard",
     "display": "roller.software/partners/intercard",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Inventory Control Software | Track Stock in Real Time with ROLLER",
     "href": "https://www.roller.software/features/stock-and-inventory-control",
     "display": "roller.software/features/stock-and-inventory-control",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Logiciel tout-en-un de gestion pour sites de loisirs",
     "href": "https://www.roller.software/fr/commencer",
     "display": "roller.software/fr/commencer",
     "numbers": [
      {
       "kind": "venue",
       "value": "3 500+ clients",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "context",
       "value": "+ 50 % de panier moyen · – 50 % de temps administratif · + 27 % de satisfaction visiteurs · – 40 % de coûts liés aux tâches administratives · 300 collaborateurs",
       "status": "context",
       "reason": "Page-specific figure",
       "action": "An event, customer or page-level number. Not a brand number."
      }
     ],
     "status": "context"
    },
    {
     "title": "Loyalty matters",
     "href": "https://www.roller.software/loyalty-matters",
     "display": "roller.software/loyalty-matters",
     "numbers": [
      {
       "kind": "context",
       "value": "1.5x larger Basket size · 50% Reduction in admin time · 27% higher Guest experience · -40% Admin labour costs",
       "status": "context",
       "reason": "Page-specific figure",
       "action": "An event, customer or page-level number. Not a brand number."
      }
     ],
     "status": "context"
    },
    {
     "title": "Membership Management Software for Attractions Venues",
     "href": "https://www.roller.software/features/membership-management-software",
     "display": "roller.software/features/membership-management-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Mobile Check-In App | Faster Entry & Waiver Management",
     "href": "https://www.roller.software/features/mobile-check-in",
     "display": "roller.software/features/mobile-check-in",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Mobile F&B Ordering System | Self-Service Food & Drink for Attractions",
     "href": "https://www.roller.software/features/mobile-food-and-beverage-ordering",
     "display": "roller.software/features/mobile-food-and-beverage-ordering",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Multi-Venue Management Software | Centralized Control for All Locations",
     "href": "https://www.roller.software/features/multi-venue-management",
     "display": "roller.software/features/multi-venue-management",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Online Ticketing System for Attractions | Sell More, Reduce Queues",
     "href": "https://www.roller.software/features/online-ticket-system",
     "display": "roller.software/features/online-ticket-system",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Party Booking Software | Online Reservations, Payments & Packages",
     "href": "https://www.roller.software/features/party-booking-software",
     "display": "roller.software/features/party-booking-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Payment Processing Software for Venues",
     "href": "https://www.roller.software/features/payment-processing-software",
     "display": "roller.software/features/payment-processing-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Playcenter POS System | Fast, Integrated Sales for Indoor Playgrounds",
     "href": "https://www.roller.software/industries/playground-software/play-center-point-of-sale-system",
     "display": "roller.software/industries/playground-software/play-center-point-of-sale-system",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "POS Reporting Software | Real-Time Sales Insights & Dashboards",
     "href": "https://www.roller.software/features/point-of-sale-reports",
     "display": "roller.software/features/point-of-sale-reports",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "POS System for Attractions | Fast, Integrated Ticketing & Sales",
     "href": "https://www.roller.software/features/pos",
     "display": "roller.software/features/pos",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Pricing",
     "href": "https://www.roller.software/pricing",
     "display": "roller.software/pricing",
     "numbers": [
      {
       "kind": "context",
       "value": "1.5x larger Basket size · 50% Reduction in admin time · 27% higher Guest experience · -40% Admin labour costs",
       "status": "context",
       "reason": "Page-specific figure",
       "action": "An event, customer or page-level number. Not a brand number."
      }
     ],
     "status": "context"
    },
    {
     "title": "Pricing Strategy Software for Attractions",
     "href": "https://www.roller.software/features/pricing-strategy",
     "display": "roller.software/features/pricing-strategy",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Printer Management Software | Reliable Printing for POS & Orders",
     "href": "https://www.roller.software/features/printer-management",
     "display": "roller.software/features/printer-management",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "ROLLER API & Integrations | Connect Your Apps & Custom Workflows",
     "href": "https://www.roller.software/features/api-integrations",
     "display": "roller.software/features/api-integrations",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "ROLLER iQ: Your new AI-powered assistant, built specifically for attractions.",
     "href": "https://www.roller.software/features/ai-assistant",
     "display": "roller.software/features/ai-assistant",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "ROLLER Software Features | POS, Ticketing & Venue Management Tools",
     "href": "https://www.roller.software/features",
     "display": "roller.software/features",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Segmentation Groups",
     "href": "https://www.roller.software/solutions/multi-venue",
     "display": "roller.software/solutions/multi-venue",
     "numbers": [
      {
       "kind": "context",
       "value": "99.99% platform uptime. · 35% decrease in additional location set-up time with HQ. · 50% increase in basket size. · 70% reduction in booking times.",
       "status": "context",
       "reason": "Page-specific figure",
       "action": "An event, customer or page-level number. Not a brand number."
      }
     ],
     "status": "context"
    },
    {
     "title": "Solutions SBM",
     "href": "https://www.roller.software/solutions/grow-your-business",
     "display": "roller.software/solutions/grow-your-business",
     "numbers": [
      {
       "kind": "context",
       "value": "30% reduction in party booking admin. · 30% increase in average online revenue. · 70% reduction in booking management time.",
       "status": "context",
       "reason": "Page-specific figure",
       "action": "An event, customer or page-level number. Not a brand number."
      }
     ],
     "status": "context"
    },
    {
     "title": "Staff Permissions Software | Control Access & Roles with ROLLER",
     "href": "https://www.roller.software/features/staff-permissions",
     "display": "roller.software/features/staff-permissions",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Support",
     "href": "https://www.roller.software/support",
     "display": "roller.software/support",
     "numbers": [
      {
       "kind": "context",
       "value": "99.99% App uptime · 95% Customer satisfaction score · 60 seconds Average call response time",
       "status": "context",
       "reason": "Page-specific figure",
       "action": "An event, customer or page-level number. Not a brand number."
      }
     ],
     "status": "context"
    },
    {
     "title": "Tanda Integration Partner - Streamline staffing with actual sales data",
     "href": "https://www.roller.software/partners/tanda",
     "display": "roller.software/partners/tanda",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Ticketing Kiosk Software | Self-Service Check-In & Ticket Printing",
     "href": "https://www.roller.software/features/self-service-ticketing-kiosk",
     "display": "roller.software/features/self-service-ticketing-kiosk",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Trampoline Park POS Software | Fast, Integrated Sales with ROLLER",
     "href": "https://www.roller.software/industries/trampoline-parks-software/pos",
     "display": "roller.software/industries/trampoline-parks-software/pos",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Trampoline Park Ticketing Software | Online Booking & Upsells with ROLLER",
     "href": "https://www.roller.software/industries/trampoline-parks-software/ticketing-software",
     "display": "roller.software/industries/trampoline-parks-software/ticketing-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Venue Management Software for Attractions & FECs",
     "href": "https://www.roller.software/venue-management-software",
     "display": "roller.software/venue-management-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Wake Park Ticketing Software | Sell Tickets Online & Manage Capacity",
     "href": "https://www.roller.software/industries/wake-parks-management-software/ticketing-system",
     "display": "roller.software/industries/wake-parks-management-software/ticketing-system",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Workforce.com Integration Partner - Streamline staffing with actual sales data",
     "href": "https://www.roller.software/partners/workforce.com",
     "display": "roller.software/partners/workforce.com",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Yellow Dog Integration Partner",
     "href": "https://www.roller.software/partners/yellow-dog",
     "display": "roller.software/partners/yellow-dog",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,500+ customers",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      },
      {
       "kind": "revenue",
       "value": "$5B transactions processed annually",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    }
   ]
  },
  {
   "id": "sss",
   "name": "Stats-Set-Stacked",
   "tagline": "World-map visual beside a stacked list of headline metrics",
   "module": "stats-set-stacked.module",
   "moduleId": "180893604893",
   "updateWhere": "HubSpot module fields per page",
   "updateEffort": "each",
   "updateNote": "Five pages show $5B in the stacked layout. The solutions pages no longer repeat that figure in Stats-Set — those rows are operational stats now.",
   "rebuild": "Sanity singleton — shares its values with Stats-Set.",
   "figma": [
    {
     "label": "Desktop",
     "href": "https://www.figma.com/design/bx2k4aFWamz5TjKkpQ21Sa/Website-Refresh-2022---2024?node-id=14795-28192&m=dev",
     "img": "figma-screenshots/global-stats-desktop.png",
     "alt": "Global stats – desktop"
    },
    {
     "label": "Mobile",
     "href": "https://www.figma.com/design/bx2k4aFWamz5TjKkpQ21Sa/Website-Refresh-2022---2024?node-id=14862-99689&m=dev",
     "img": "figma-screenshots/global-stats-mobile.png",
     "alt": "Global stats – mobile"
    }
   ],
   "pageCount": 5,
   "statusCounts": {
    "ok": 5,
    "context": 0,
    "unverified": 0,
    "review": 0,
    "drift": 0
   },
   "attention": 0,
   "pages": [
    {
     "title": "Area 51",
     "href": "https://www.roller.software/customers/stories/area-51",
     "display": "roller.software/customers/stories/area-51",
     "numbers": [
      {
       "kind": "revenue",
       "value": "$5B transactions processed in the last 12 months",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Enterprise",
     "href": "https://www.roller.software/solutions/enterprise",
     "display": "roller.software/solutions/enterprise",
     "numbers": [
      {
       "kind": "revenue",
       "value": "$5B transactions processed in the last 12 months",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Segmentation Groups",
     "href": "https://www.roller.software/solutions/multi-venue",
     "display": "roller.software/solutions/multi-venue",
     "numbers": [
      {
       "kind": "revenue",
       "value": "$5B transactions processed in the last 12 months",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Solutions SBM",
     "href": "https://www.roller.software/solutions/grow-your-business",
     "display": "roller.software/solutions/grow-your-business",
     "numbers": [
      {
       "kind": "revenue",
       "value": "$5B transactions processed in the last 12 months",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "We Rock the Spectrum | Powered by ROLLER",
     "href": "https://www.roller.software/customers/stories/we-rock-the-spectrum",
     "display": "roller.software/customers/stories/we-rock-the-spectrum",
     "numbers": [
      {
       "kind": "revenue",
       "value": "$5B transactions processed in the last 12 months",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    }
   ]
  },
  {
   "id": "blog",
   "name": "Blog",
   "tagline": "Every blog post is checked. These are the ones that state a venue count or the transactions figure.",
   "module": "HubSpot blog posts",
   "moduleId": null,
   "updateWhere": "Each post in the HubSpot blog editor",
   "updateEffort": "each",
   "updateNote": "741 blog posts were checked. 5 state a brand figure, and they match 3,500+ or $5B. Amounts that are not the venue count or the transactions figure were left out.",
   "rebuild": "Blog copy stays in HubSpot until the site moves. Each post is its own edit.",
   "figma": [],
   "pageCount": 5,
   "statusCounts": {
    "ok": 5,
    "context": 0,
    "unverified": 0,
    "review": 0,
    "drift": 0
   },
   "attention": 0,
   "pages": [
    {
     "title": "5 Key Online Checkout Insights from the 2026 Benchmark Report",
     "href": "https://www.roller.software/blog/5-key-online-checkout-insights-2026-benchmark-report",
     "display": "roller.software/blog/5-key-online-checkout-insights-2026-benchmark-report",
     "numbers": [
      {
       "kind": "venue",
       "value": "thousands of data points across more than 3,500+ venues worldwide, is full of trends and takeaways that show",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Membership Insights from the 2026 Benchmark Report",
     "href": "https://www.roller.software/blog/membership-insights-2026-benchmark-report",
     "display": "roller.software/blog/membership-insights-2026-benchmark-report",
     "numbers": [
      {
       "kind": "venue",
       "value": "thousands of data points across more than 3,500+ venues worldwide, reveals clear trends around membership",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Party Insights from the 2026 Attractions Industry Benchmark Report",
     "href": "https://www.roller.software/blog/party-insights-2026-benchmark-report",
     "display": "roller.software/blog/party-insights-2026-benchmark-report",
     "numbers": [
      {
       "kind": "venue",
       "value": "thousands of data points across more than 3,500+ venues worldwide, reveals several clear trends around party",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Payment Insights from the 2026 Benchmark Report",
     "href": "https://www.roller.software/blog/payment-insights-2026-benchmark-report",
     "display": "roller.software/blog/payment-insights-2026-benchmark-report",
     "numbers": [
      {
       "kind": "venue",
       "value": "thousands of data points from more than 3,500+ venues worldwide. The report reveals major shifts in how",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "ROLLER secures US$50M to accelerate innovation and customer growth",
     "href": "https://www.roller.software/blog/2025-funding-round",
     "display": "roller.software/blog/2025-funding-round",
     "numbers": [
      {
       "kind": "venue",
       "value": "experiences. Today, with over 3,500+ venues across 30 countries, that purpose feels more alive",
       "status": "ok",
       "reason": "Matches 3,500+",
       "action": ""
      }
     ],
     "status": "ok"
    }
   ]
  }
 ]
};
