window.BRAND_NUMBERS = {
 "scrapeDate": "August 2026",
 "pagesAudited": 255,
 "pagesLiveChecked": 255,
 "pagesWithNumbers": 108,
 "instanceCount": 170,
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
  "ok": 110,
  "context": 13,
  "unverified": 47,
  "review": 0,
  "drift": 0
 },
 "sourceOfTruth": [
  {
   "id": "venues",
   "label": "Venues worldwide",
   "value": "3,000+",
   "canonical": "Trusted by 3,000+ venues worldwide",
   "retired": [
    "2,600",
    "2,300"
   ],
   "owner": "Brand / Marketing",
   "controlled": "Logo-Set module default + per-page Heading-Composition copy",
   "blurb": "The venue count. Appears more often than any other brand number and is the one most likely to be quoted back at us.",
   "instances": 100,
   "onBrand": 100,
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
   "blurb": "The headline money figure. Live site copy now uses “transactions processed” (formerly “guest revenue processed”). Year-in-Review pages may still carry frozen annual numbers on purpose.",
   "instances": 10,
   "onBrand": 10,
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
   "updateNote": "One edit in the module default changes the heading on all 89 pages at once. This is the single highest-leverage field on the site.",
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
   "pageCount": 89,
   "statusCounts": {
    "ok": 89,
    "context": 0,
    "unverified": 0,
    "review": 0,
    "drift": 0
   },
   "attention": 0,
   "pages": [
    {
     "title": "AI for Attractions",
     "href": "https://www.roller.software/features/ai-for-attractions",
     "display": "roller.software/features/ai-for-attractions",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Adventure Parks",
     "href": "https://www.roller.software/industries/adventure-parks-software",
     "display": "roller.software/industries/adventure-parks-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "BookNow Software",
     "href": "https://www.roller.software/competitor/booknow-software",
     "display": "roller.software/competitor/booknow-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,000+",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "FEC POS",
     "href": "https://www.roller.software/industries/family-entertainment-center-software/pos-system",
     "display": "roller.software/…/fec/pos-system",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "FEC Ticketing",
     "href": "https://www.roller.software/industries/family-entertainment-center-software/ticketing-system",
     "display": "roller.software/…/fec/ticketing-system",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Playcenter Online Ticketing",
     "href": "https://www.roller.software/industries/playcenter-software/online-ticketing-system",
     "display": "roller.software/…/playcenter/online-ticketing",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Playcenter POS",
     "href": "https://www.roller.software/industries/playground-software/play-center-point-of-sale-system",
     "display": "roller.software/…/playground/play-center-pos",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "3,000",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Trampoline POS",
     "href": "https://www.roller.software/industries/trampoline-parks-software/pos",
     "display": "roller.software/…/trampoline-parks-software/pos",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Trampoline Ticketing",
     "href": "https://www.roller.software/industries/trampoline-parks-software/ticketing-software",
     "display": "roller.software/…/trampoline-parks/ticketing",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Wake & Aqua Parks",
     "href": "https://www.roller.software/industries/wake-and-aqua-parks-management-software",
     "display": "roller.software/…/wake-and-aqua-parks",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Wake Park Ticketing",
     "href": "https://www.roller.software/industries/wake-parks-management-software/ticketing-system",
     "display": "roller.software/…/wake-parks/ticketing-system",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
    "ok": 10,
    "context": 13,
    "unverified": 3,
    "review": 0,
    "drift": 0
   },
   "attention": 3,
   "pages": [
    {
     "title": "2024 Year in Review",
     "href": "https://www.roller.software/2023-rollup",
     "display": "roller.software/2023-rollup",
     "numbers": [
      {
       "kind": "note",
       "value": "not extracted",
       "status": "unverified",
       "reason": "Value not extracted",
       "action": "The module is on the page but the scrape could not read its fields. Open the page and check the numbers by hand."
      },
      {
       "kind": "context",
       "value": "700,000",
       "status": "context",
       "reason": "Page-specific figure",
       "action": "An event, customer or page-level number. Not a brand number."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "2025 Year in Review",
     "href": "https://www.roller.software/2024-rollup",
     "display": "roller.software/2024-rollup",
     "numbers": [
      {
       "kind": "note",
       "value": "not extracted",
       "status": "unverified",
       "reason": "Value not extracted",
       "action": "The module is on the page but the scrape could not read its fields. Open the page and check the numbers by hand."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "2026 Year in Review",
     "href": "https://www.roller.software/2025-roll-up-year-in-review",
     "display": "roller.software/2025-roll-up-year-in-review",
     "numbers": [
      {
       "kind": "note",
       "value": "not extracted",
       "status": "unverified",
       "reason": "Value not extracted",
       "action": "The module is on the page but the scrape could not read its fields. Open the page and check the numbers by hand."
      }
     ],
     "status": "unverified"
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
     "title": "BookNow Software",
     "href": "https://www.roller.software/competitor/booknow-software",
     "display": "roller.software/competitor/booknow-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,000+",
       "status": "ok",
       "reason": "Matches 3,000+",
       "action": ""
      }
     ],
     "status": "ok"
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
       "value": "3,000+ venues",
       "status": "ok",
       "reason": "Matches 3,000+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "FEC Ticketing",
     "href": "https://www.roller.software/industries/family-entertainment-center-software/ticketing-system",
     "display": "roller.software/…/fec/ticketing-system",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
     "display": "roller.software/…/implementation",
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
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Laser Tag",
     "href": "https://www.roller.software/industries/laser-tag-software",
     "display": "roller.software/…/laser-tag-software",
     "numbers": [
      {
       "kind": "venue",
       "value": "Trusted by over 3,000 venues worldwide",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "3,000",
       "status": "ok",
       "reason": "Matches 3,000+",
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
     "title": "ROLLER Payments",
     "href": "https://www.roller.software/features/payment-processing-software",
     "display": "roller.software/…/payment-processing-software",
     "numbers": [
      {
       "kind": "revenue",
       "value": "$5B transactions processed",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Roller Skating Trends 2026",
     "href": "https://www.roller.software/2025-roller-skating-trends-report",
     "display": "roller.software/…/roller-skating-trends-report",
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
     "title": "Trampoline POS",
     "href": "https://www.roller.software/industries/trampoline-parks-software/pos",
     "display": "roller.software/…/trampoline-parks-software/pos",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,000+",
       "status": "ok",
       "reason": "Matches 3,000+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Trampoline Ticketing",
     "href": "https://www.roller.software/industries/trampoline-parks-software/ticketing-software",
     "display": "roller.software/…/trampoline-parks-software/ticketing",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,000+",
       "status": "ok",
       "reason": "Matches 3,000+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Wake & Aqua Parks",
     "href": "https://www.roller.software/industries/wake-and-aqua-parks-management-software",
     "display": "roller.software/…/wake-and-aqua-parks",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,000+",
       "status": "ok",
       "reason": "Matches 3,000+",
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
   "pageCount": 34,
   "statusCounts": {
    "ok": 0,
    "context": 0,
    "unverified": 34,
    "review": 0,
    "drift": 0
   },
   "attention": 34,
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
     "title": "Pricing Strategy",
     "href": "https://www.roller.software/features/pricing-strategy",
     "display": "roller.software/features/pricing-strategy",
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
     "title": "Printer Management",
     "href": "https://www.roller.software/features/printer-management",
     "display": "roller.software/features/printer-management",
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
     "title": "RFID",
     "href": "https://www.roller.software/products/rfid",
     "display": "roller.software/products/rfid",
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
     "title": "ROLLER Capital",
     "href": "https://www.roller.software/features/capital",
     "display": "roller.software/features/capital",
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
     "title": "Staff Permissions",
     "href": "https://www.roller.software/features/staff-permissions",
     "display": "roller.software/features/staff-permissions",
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
     "title": "Stock & Inventory",
     "href": "https://www.roller.software/features/stock-and-inventory-control",
     "display": "roller.software/features/stock-and-inventory-control",
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
     "title": "Trampoline POS",
     "href": "https://www.roller.software/industries/trampoline-parks-software/pos",
     "display": "roller.software/…/trampoline-parks-software/pos",
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
   "updateEffort": "each",
   "updateNote": "Currently a per-page edit. In the rebuild this becomes a Sanity singleton, so one update will propagate everywhere.",
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
   "pageCount": 14,
   "statusCounts": {
    "ok": 7,
    "context": 0,
    "unverified": 7,
    "review": 0,
    "drift": 0
   },
   "attention": 7,
   "pages": [
    {
     "title": "2024 Year in Review",
     "href": "https://www.roller.software/2023-rollup",
     "display": "roller.software/2023-rollup",
     "numbers": [
      {
       "kind": "note",
       "value": "not extracted",
       "status": "unverified",
       "reason": "Value not extracted",
       "action": "The module is on the page but the scrape could not read its fields. Open the page and check the numbers by hand."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "2025 Year in Review",
     "href": "https://www.roller.software/2024-rollup",
     "display": "roller.software/2024-rollup",
     "numbers": [
      {
       "kind": "note",
       "value": "not extracted",
       "status": "unverified",
       "reason": "Value not extracted",
       "action": "The module is on the page but the scrape could not read its fields. Open the page and check the numbers by hand."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "2026 Year in Review",
     "href": "https://www.roller.software/2025-roll-up-year-in-review",
     "display": "roller.software/2025-roll-up-year-in-review",
     "numbers": [
      {
       "kind": "note",
       "value": "not extracted",
       "status": "unverified",
       "reason": "Value not extracted",
       "action": "The module is on the page but the scrape could not read its fields. Open the page and check the numbers by hand."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Area 51",
     "href": "https://www.roller.software/customers/stories/area-51",
     "display": "roller.software/customers/stories/area-51",
     "numbers": [
      {
       "kind": "revenue",
       "value": "$5B transactions processed",
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
       "value": "$5B",
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
       "value": "$5B transactions processed",
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
       "kind": "venue",
       "value": "3,000+",
       "status": "ok",
       "reason": "Matches 3,000+",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Integration Partner Program",
     "href": "https://www.roller.software/partners/integration",
     "display": "roller.software/partners/integration",
     "numbers": [
      {
       "kind": "note",
       "value": "not extracted",
       "status": "unverified",
       "reason": "Value not extracted",
       "action": "The module is on the page but the scrape could not read its fields. Open the page and check the numbers by hand."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Pricing",
     "href": "https://www.roller.software/pricing",
     "display": "roller.software/pricing",
     "numbers": [
      {
       "kind": "venue",
       "value": "3,000+",
       "status": "ok",
       "reason": "Matches 3,000+",
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
       "value": "$5B transactions processed",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Service Partners",
     "href": "https://www.roller.software/partners/service",
     "display": "roller.software/partners/service",
     "numbers": [
      {
       "kind": "note",
       "value": "not extracted",
       "status": "unverified",
       "reason": "Value not extracted",
       "action": "The module is on the page but the scrape could not read its fields. Open the page and check the numbers by hand."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Solutions SBM",
     "href": "https://www.roller.software/solutions/grow-your-business",
     "display": "roller.software/solutions/grow-your-business",
     "numbers": [
      {
       "kind": "revenue",
       "value": "$5B transactions processed",
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
       "kind": "note",
       "value": "not extracted",
       "status": "unverified",
       "reason": "Value not extracted",
       "action": "The module is on the page but the scrape could not read its fields. Open the page and check the numbers by hand."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Technology Partners",
     "href": "https://www.roller.software/partners/technology",
     "display": "roller.software/partners/technology",
     "numbers": [
      {
       "kind": "note",
       "value": "not extracted",
       "status": "unverified",
       "reason": "Value not extracted",
       "action": "The module is on the page but the scrape could not read its fields. Open the page and check the numbers by hand."
      }
     ],
     "status": "unverified"
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
   "updateNote": "Overlaps with Stats-Set on the three Solutions pages — the same figure appears twice on those pages and both copies have to be changed.",
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
   "pageCount": 7,
   "statusCounts": {
    "ok": 4,
    "context": 0,
    "unverified": 3,
    "review": 0,
    "drift": 0
   },
   "attention": 3,
   "pages": [
    {
     "title": "Area 51",
     "href": "https://www.roller.software/customers/stories/area-51",
     "display": "roller.software/customers/stories/area-51",
     "numbers": [
      {
       "kind": "revenue",
       "value": "$5B transactions processed",
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
       "value": "$5B transactions processed",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Integration Partner Program",
     "href": "https://www.roller.software/partners/integration",
     "display": "roller.software/partners/integration",
     "numbers": [
      {
       "kind": "note",
       "value": "not extracted",
       "status": "unverified",
       "reason": "Value not extracted",
       "action": "The module is on the page but the scrape could not read its fields. Open the page and check the numbers by hand."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Segmentation Groups",
     "href": "https://www.roller.software/solutions/multi-venue",
     "display": "roller.software/solutions/multi-venue",
     "numbers": [
      {
       "kind": "revenue",
       "value": "$5B transactions processed",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Service Partners",
     "href": "https://www.roller.software/partners/service",
     "display": "roller.software/partners/service",
     "numbers": [
      {
       "kind": "note",
       "value": "not extracted",
       "status": "unverified",
       "reason": "Value not extracted",
       "action": "The module is on the page but the scrape could not read its fields. Open the page and check the numbers by hand."
      }
     ],
     "status": "unverified"
    },
    {
     "title": "Solutions SBM",
     "href": "https://www.roller.software/solutions/grow-your-business",
     "display": "roller.software/solutions/grow-your-business",
     "numbers": [
      {
       "kind": "revenue",
       "value": "$5B transactions processed",
       "status": "ok",
       "reason": "Matches $5B",
       "action": ""
      }
     ],
     "status": "ok"
    },
    {
     "title": "Technology Partners",
     "href": "https://www.roller.software/partners/technology",
     "display": "roller.software/partners/technology",
     "numbers": [
      {
       "kind": "note",
       "value": "not extracted",
       "status": "unverified",
       "reason": "Value not extracted",
       "action": "The module is on the page but the scrape could not read its fields. Open the page and check the numbers by hand."
      }
     ],
     "status": "unverified"
    }
   ]
  }
 ]
};
