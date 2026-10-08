window.FORM_AUDIT = {
  "auditedOn": "8 October 2026",
  "auditedOnIso": "2026-10-08",
  "source": "Site crawl of non-blog pages on 8 October 2026. Submission counts, views and last-submit dates are the HubSpot all-forms export of 3 September 2026.",
  "scope": "All non-blog pages. Forms outside the site footer. Footer subscribe form excluded except where it is separately embedded in the body.",
  "hubspotPortal": "3375779",
  "hubspotFormsTotal": 134,
  "stats": {
    "formsInUse": 24,
    "pagesCrawled": 152,
    "placements": 32,
    "lifetimeSubmissions": 16652,
    "idleSixMonths": 7,
    "sharedForms": 6
  },
  "statusMeta": {
    "fresh": {
      "id": "fresh",
      "label": "Active",
      "pill": "ok"
    },
    "warm": {
      "id": "warm",
      "label": "Slowing",
      "pill": "warn"
    },
    "cold": {
      "id": "cold",
      "label": "Stale",
      "pill": "warn"
    },
    "dead": {
      "id": "dead",
      "label": "Dormant",
      "pill": "bad"
    }
  },
  "statusCounts": {
    "fresh": 11,
    "warm": 6,
    "cold": 3,
    "dead": 4
  },
  "flags": [
    {
      "id": "get-started-two-forms",
      "title": "/get-started/ runs two forms",
      "severity": "warn",
      "body": "Neither is a normal embed. “2023 - Let’s chat v2” renders into #hubspot-form-wrapper via an inline hbspt.forms.create() call, then reveals Calendly with name and email prefilled. When Calendly fires calendly.event_scheduled, the page POSTs directly to the HubSpot Forms API to submit “Calendly tag registration form” with calendly_booked=true. That second form has no markup on the page at all."
    },
    {
      "id": "calendly-conversion",
      "title": "Calendly conversion figures are meaningless",
      "severity": "warn",
      "body": "The “Calendly tag registration form” shows 4 page views against 211 submissions because it never renders. HubSpot’s submissions-per-page-view of 5,275 is an artefact. Treat those 211 as a count of completed Calendly bookings."
    },
    {
      "id": "lets-chat-shared",
      "title": "Let’s chat v2 is on four pages — and embedded twice on the event pages",
      "severity": "warn",
      "body": "“Let’s chat v2” is on /get-started/, /iaapa-europe-2026, /iaapa-expo-orlando-2026 and /2026-wwa, so its 8,748 submissions cannot be split by form ID. The Orlando page moved off /2026-iaapaexpoorlando. On each event page it is embedded twice — once through the standard module and once into a hidden #footerHSForm div. The same double embed is also on /2026-benchmark-report, /2026-pulse-report and the Area 51 story."
    },
    {
      "id": "spam-leads-naming",
      "title": "Get Started naming is tangled",
      "severity": "warn",
      "body": "A form named “2023 - Get Started (Spam Leads)” is live on two solutions pages with 36 submissions, last one 3 August 2026. Separately, “2023 - Get Started” (770 submissions) sits on /solutions/enterprise, not on /get-started/. The naming across those three needs untangling."
    },
    {
      "id": "idle-forms",
      "title": "Seven forms have been silent for 6+ months",
      "severity": "bad",
      "body": "Their pages stay published and in the sitemap. The Guest Experience Playbook form has been silent since September 2022 — just over four years."
    },
    {
      "id": "shared-attribution",
      "title": "Six forms sit on more than one page",
      "severity": "info",
      "body": "Their submissions pool and cannot be attributed by form ID. Let’s chat v2 is on four pages; the Orlando event page is now /iaapa-expo-orlando-2026. Subscribe to Blog Notifications dropped from three pages to two, because /customer-stories now redirects to a blog tag. For per-page numbers you need HubSpot’s page-level breakdown."
    }
  ],
  "notes": "No literal <form> tags exist in the served HTML — every form on roller.software is injected by JavaScript. Detection covered the standard module options block, inline hbspt.forms.create() calls, and direct POSTs to api.hsforms.com/submissions/v3. The global footer subscribe module is excluded except where that form is separately embedded in the page body. Placements were recrawled on 8 October 2026 (152 non-blog sitemap URLs, 24 forms, 32 placements). /customer-stories now 301s to /blog/tag/customer-stories, so that subscribe placement is out of this non-blog audit. /2026-iaapaexpoorlando is gone; Let’s chat v2 for Orlando is on /iaapa-expo-orlando-2026. Submission counts, views and last-submit dates are still the HubSpot export of 3 September 2026, so a form may have been submitted since. Days since that last known submit are counted to 8 October. Freshness bands are unchanged from the export.",
  "forms": [
    {
      "name": "2023 - Let's chat v2",
      "id": "20a46e0f-ec52-4e8d-ad13-a1c6bae4c8f0",
      "hubspotUrl": "https://app.hubspot.com/forms/3375779/editor/20a46e0f-ec52-4e8d-ad13-a1c6bae4c8f0/edit/form",
      "band": "fresh",
      "pageCount": 4,
      "submissions": 8748,
      "views": 234515,
      "conversion": 3.73,
      "lastSubmitted": "2026-09-03",
      "daysAgoLabel": "35d ago",
      "pages": [
        {
          "url": "https://www.roller.software/get-started/",
          "path": "/get-started/",
          "role": "Get Started demo request (feeds Calendly)"
        },
        {
          "url": "https://www.roller.software/iaapa-europe-2026",
          "path": "/iaapa-europe-2026",
          "role": "IAAPA Europe 2026 meeting request"
        },
        {
          "url": "https://www.roller.software/iaapa-expo-orlando-2026",
          "path": "/iaapa-expo-orlando-2026",
          "role": "IAAPA Expo Orlando 2026 meeting request"
        },
        {
          "url": "https://www.roller.software/2026-wwa",
          "path": "/2026-wwa",
          "role": "WWA 2026 meeting request"
        }
      ],
      "status": "Active",
      "pill": "ok"
    },
    {
      "name": "Subscribe to Blog Notifications",
      "id": "efa7bd0a-929a-4ea4-8480-1c6f77843cf2",
      "hubspotUrl": "https://app.hubspot.com/forms/3375779/editor/efa7bd0a-929a-4ea4-8480-1c6f77843cf2/edit/form",
      "band": "fresh",
      "pageCount": 2,
      "submissions": 4962,
      "views": 4319901,
      "conversion": 0.11,
      "lastSubmitted": "2026-09-03",
      "daysAgoLabel": "35d ago",
      "pages": [
        {
          "url": "https://www.roller.software/customer-stories/rockstar-climbing-increases-online-sales-by-over-25-after-switching-to-roller",
          "path": "/customer-stories/rockstar-climbing-increases-online-sales-by-over-25-after-switching-to-roller",
          "role": "Newsletter / GX signup (in-body)"
        },
        {
          "url": "https://www.roller.software/customer-stories/rolling-on-over-to-jump-giants",
          "path": "/customer-stories/rolling-on-over-to-jump-giants",
          "role": "Newsletter / GX signup (in-body)"
        }
      ],
      "status": "Active",
      "pill": "ok"
    },
    {
      "name": "2024 - Industry Benchmark Report",
      "id": "2051941f-0411-4b31-a088-87377ae46bf0",
      "hubspotUrl": "https://app.hubspot.com/forms/3375779/editor/2051941f-0411-4b31-a088-87377ae46bf0/edit/form",
      "band": "fresh",
      "pageCount": 1,
      "submissions": 824,
      "views": 5070,
      "conversion": 16.25,
      "lastSubmitted": "2026-08-24",
      "daysAgoLabel": "45d ago",
      "pages": [
        {
          "url": "https://www.roller.software/2025-benchmark-report",
          "path": "/2025-benchmark-report",
          "role": "2025 Benchmark Report download"
        }
      ],
      "status": "Active",
      "pill": "ok"
    },
    {
      "name": "2023 - Get Started",
      "id": "fb0ce181-8ea3-437c-a6be-fbc6cf8daa89",
      "hubspotUrl": "https://app.hubspot.com/forms/3375779/editor/fb0ce181-8ea3-437c-a6be-fbc6cf8daa89/edit/form",
      "band": "warm",
      "pageCount": 1,
      "submissions": 770,
      "views": 9063,
      "conversion": 8.5,
      "lastSubmitted": "2026-07-01",
      "daysAgoLabel": "99d ago",
      "pages": [
        {
          "url": "https://www.roller.software/solutions/enterprise",
          "path": "/solutions/enterprise",
          "role": "Solutions demo request"
        }
      ],
      "status": "Slowing",
      "pill": "warn"
    },
    {
      "name": "2026 Industry Benchmark Report",
      "id": "5cbf1aa8-f1de-4df8-8695-20efc5de8a6f",
      "hubspotUrl": "https://app.hubspot.com/forms/3375779/editor/5cbf1aa8-f1de-4df8-8695-20efc5de8a6f/edit/form",
      "band": "fresh",
      "pageCount": 1,
      "submissions": 432,
      "views": 12608,
      "conversion": 3.43,
      "lastSubmitted": "2026-09-03",
      "daysAgoLabel": "35d ago",
      "pages": [
        {
          "url": "https://www.roller.software/2026-benchmark-report",
          "path": "/2026-benchmark-report",
          "role": "2026 Benchmark Report download"
        }
      ],
      "status": "Active",
      "pill": "ok"
    },
    {
      "name": "Calendly tag registration form",
      "id": "48a28f64-ceaf-4249-90c7-fbfd7a10aec3",
      "hubspotUrl": "https://app.hubspot.com/forms/3375779/editor/48a28f64-ceaf-4249-90c7-fbfd7a10aec3/edit/form",
      "band": "fresh",
      "pageCount": 1,
      "submissions": 211,
      "views": 4,
      "conversion": null,
      "lastSubmitted": "2026-09-03",
      "daysAgoLabel": "35d ago",
      "pages": [
        {
          "url": "https://www.roller.software/get-started/",
          "path": "/get-started/",
          "role": "Calendly booking confirmation (no rendered form) · API submit on booking"
        }
      ],
      "status": "Active",
      "pill": "ok"
    },
    {
      "name": "2025 - Partnerships",
      "id": "1ba546dd-ea89-46da-be44-be55daa12197",
      "hubspotUrl": "https://app.hubspot.com/forms/3375779/editor/1ba546dd-ea89-46da-be44-be55daa12197/edit/form",
      "band": "fresh",
      "pageCount": 2,
      "submissions": 125,
      "views": 955,
      "conversion": 13.09,
      "lastSubmitted": "2026-09-03",
      "daysAgoLabel": "35d ago",
      "pages": [
        {
          "url": "https://www.roller.software/partners/integration",
          "path": "/partners/integration",
          "role": "Integration partner application"
        },
        {
          "url": "https://www.roller.software/partners/service",
          "path": "/partners/service",
          "role": "Service partner application"
        }
      ],
      "status": "Active",
      "pill": "ok"
    },
    {
      "name": "2025 - Party parent consumer report",
      "id": "b71c75b1-1df3-4e44-be20-2ab671290978",
      "hubspotUrl": "https://app.hubspot.com/forms/3375779/editor/b71c75b1-1df3-4e44-be20-2ab671290978/edit/form",
      "band": "warm",
      "pageCount": 1,
      "submissions": 121,
      "views": 479,
      "conversion": 25.26,
      "lastSubmitted": "2026-07-27",
      "daysAgoLabel": "73d ago",
      "pages": [
        {
          "url": "https://www.roller.software/party-parent-report",
          "path": "/party-parent-report",
          "role": "Party Parent Report download"
        }
      ],
      "status": "Slowing",
      "pill": "warn"
    },
    {
      "name": "2026 Pulse Report",
      "id": "f5404897-7beb-420e-a376-70e70a462c23",
      "hubspotUrl": "https://app.hubspot.com/forms/3375779/editor/f5404897-7beb-420e-a376-70e70a462c23/edit/form",
      "band": "fresh",
      "pageCount": 2,
      "submissions": 87,
      "views": 8520,
      "conversion": 1.02,
      "lastSubmitted": "2026-08-26",
      "daysAgoLabel": "43d ago",
      "pages": [
        {
          "url": "https://www.roller.software/2026-pulse-report",
          "path": "/2026-pulse-report",
          "role": "2026 Pulse Report download"
        },
        {
          "url": "https://www.roller.software/customers/stories/area-51",
          "path": "/customers/stories/area-51",
          "role": "2026 Pulse Report download"
        }
      ],
      "status": "Active",
      "pill": "ok"
    },
    {
      "name": "2022 - Mystery Shopper",
      "id": "b7ecbc08-e849-4747-b378-fcab4ff449d0",
      "hubspotUrl": "https://app.hubspot.com/forms/3375779/editor/b7ecbc08-e849-4747-b378-fcab4ff449d0/edit/form",
      "band": "fresh",
      "pageCount": 1,
      "submissions": 65,
      "views": 17181,
      "conversion": 0.38,
      "lastSubmitted": "2026-08-11",
      "daysAgoLabel": "58d ago",
      "pages": [
        {
          "url": "https://www.roller.software/mystery-shopper-report/",
          "path": "/mystery-shopper-report/",
          "role": "Mystery Shopper Report download"
        }
      ],
      "status": "Active",
      "pill": "ok"
    },
    {
      "name": "2022 - Memberships eBook",
      "id": "a8a3d5e4-f7a7-4b8f-a107-1d7490013bd5",
      "hubspotUrl": "https://app.hubspot.com/forms/3375779/editor/a8a3d5e4-f7a7-4b8f-a107-1d7490013bd5/edit/form",
      "band": "cold",
      "pageCount": 1,
      "submissions": 59,
      "views": 7391,
      "conversion": 0.8,
      "lastSubmitted": "2025-09-16",
      "daysAgoLabel": "387d ago",
      "pages": [
        {
          "url": "https://www.roller.software/membership-ebook",
          "path": "/membership-ebook",
          "role": "Membership e-book download"
        }
      ],
      "status": "Stale",
      "pill": "warn"
    },
    {
      "name": "Venue launch checklist",
      "id": "70a64b65-2b35-4448-a94c-b8f59890ee66",
      "hubspotUrl": "https://app.hubspot.com/forms/3375779/editor/70a64b65-2b35-4448-a94c-b8f59890ee66/edit/form",
      "band": "fresh",
      "pageCount": 1,
      "submissions": 49,
      "views": 134,
      "conversion": 36.57,
      "lastSubmitted": "2026-08-14",
      "daysAgoLabel": "55d ago",
      "pages": [
        {
          "url": "https://www.roller.software/venue-launch-checklist",
          "path": "/venue-launch-checklist",
          "role": "Venue launch checklist download"
        }
      ],
      "status": "Active",
      "pill": "ok"
    },
    {
      "name": "2025 - Analytics ebook",
      "id": "066f2fff-c86e-4714-ba4a-6e68ee1e84b0",
      "hubspotUrl": "https://app.hubspot.com/forms/3375779/editor/066f2fff-c86e-4714-ba4a-6e68ee1e84b0/edit/form",
      "band": "warm",
      "pageCount": 1,
      "submissions": 43,
      "views": 176,
      "conversion": 24.43,
      "lastSubmitted": "2026-07-13",
      "daysAgoLabel": "87d ago",
      "pages": [
        {
          "url": "https://www.roller.software/analytics-ebook",
          "path": "/analytics-ebook",
          "role": "Analytics e-book download"
        }
      ],
      "status": "Slowing",
      "pill": "warn"
    },
    {
      "name": "2025 - Roller skating trends report",
      "id": "ca21fd8b-7a08-49c4-8b90-ef1f11dc1d75",
      "hubspotUrl": "https://app.hubspot.com/forms/3375779/editor/ca21fd8b-7a08-49c4-8b90-ef1f11dc1d75/edit/form",
      "band": "fresh",
      "pageCount": 1,
      "submissions": 42,
      "views": 293,
      "conversion": 14.33,
      "lastSubmitted": "2026-08-11",
      "daysAgoLabel": "58d ago",
      "pages": [
        {
          "url": "https://www.roller.software/2025-roller-skating-trends-report",
          "path": "/2025-roller-skating-trends-report",
          "role": "Roller Skating Trends Report download"
        }
      ],
      "status": "Active",
      "pill": "ok"
    },
    {
      "name": "2023 - Get Started (Spam Leads)",
      "id": "08f35b46-27fe-45e2-bd33-c5519cbc5302",
      "hubspotUrl": "https://app.hubspot.com/forms/3375779/editor/08f35b46-27fe-45e2-bd33-c5519cbc5302/edit/form",
      "band": "warm",
      "pageCount": 2,
      "submissions": 36,
      "views": 8470,
      "conversion": 0.43,
      "lastSubmitted": "2026-08-03",
      "daysAgoLabel": "66d ago",
      "pages": [
        {
          "url": "https://www.roller.software/solutions/grow-your-business",
          "path": "/solutions/grow-your-business",
          "role": "Solutions demo request"
        },
        {
          "url": "https://www.roller.software/solutions/multi-venue",
          "path": "/solutions/multi-venue",
          "role": "Solutions demo request"
        }
      ],
      "status": "Slowing",
      "pill": "warn"
    },
    {
      "name": "2022 - GX Show eBook",
      "id": "ae7b5552-c0d4-436c-886a-d5304df5100d",
      "hubspotUrl": "https://app.hubspot.com/forms/3375779/editor/ae7b5552-c0d4-436c-886a-d5304df5100d/edit/form",
      "band": "dead",
      "pageCount": 1,
      "submissions": 28,
      "views": 469,
      "conversion": 5.97,
      "lastSubmitted": "2024-04-10",
      "daysAgoLabel": "911d ago",
      "pages": [
        {
          "url": "https://www.roller.software/gx-show-ebook",
          "path": "/gx-show-ebook",
          "role": "GX Show e-book download"
        }
      ],
      "status": "Dormant",
      "pill": "bad"
    },
    {
      "name": "Refresh2025",
      "id": "6c317a40-231d-4117-a450-174892a5397a",
      "hubspotUrl": "https://app.hubspot.com/forms/3375779/editor/6c317a40-231d-4117-a450-174892a5397a/edit/form",
      "band": "warm",
      "pageCount": 2,
      "submissions": 17,
      "views": 1592,
      "conversion": 1.07,
      "lastSubmitted": "2026-07-01",
      "daysAgoLabel": "99d ago",
      "pages": [
        {
          "url": "https://www.roller.software/industries/family-entertainment-centers",
          "path": "/industries/family-entertainment-centers",
          "role": "Contact / demo request"
        },
        {
          "url": "https://www.roller.software/resources/featured",
          "path": "/resources/featured",
          "role": "Contact / demo request"
        }
      ],
      "status": "Slowing",
      "pill": "warn"
    },
    {
      "name": "2022 - Guest Experience Playbook",
      "id": "7b17abe9-b7fd-4801-a8f5-b89f24c6aa5c",
      "hubspotUrl": "https://app.hubspot.com/forms/3375779/editor/7b17abe9-b7fd-4801-a8f5-b89f24c6aa5c/edit/form",
      "band": "dead",
      "pageCount": 1,
      "submissions": 14,
      "views": 95,
      "conversion": 14.74,
      "lastSubmitted": "2022-09-08",
      "daysAgoLabel": "1491d ago",
      "pages": [
        {
          "url": "https://www.roller.software/guest-experience-playbook",
          "path": "/guest-experience-playbook",
          "role": "GX playbook download"
        }
      ],
      "status": "Dormant",
      "pill": "bad"
    },
    {
      "name": "2025 - Entrepreneur guide to opening a venue playbook",
      "id": "0d57dd22-84f2-4496-b66e-0dc93bf59442",
      "hubspotUrl": "https://app.hubspot.com/forms/3375779/editor/0d57dd22-84f2-4496-b66e-0dc93bf59442/edit/form",
      "band": "cold",
      "pageCount": 1,
      "submissions": 10,
      "views": 43,
      "conversion": 23.26,
      "lastSubmitted": "2025-10-27",
      "daysAgoLabel": "346d ago",
      "pages": [
        {
          "url": "https://www.roller.software/opening-your-first-attraction-playbook",
          "path": "/opening-your-first-attraction-playbook",
          "role": "First attraction playbook download"
        }
      ],
      "status": "Stale",
      "pill": "warn"
    },
    {
      "name": "2025 - Expanding your business playbook",
      "id": "12076001-c57f-422d-946b-f1c31ae825e0",
      "hubspotUrl": "https://app.hubspot.com/forms/3375779/editor/12076001-c57f-422d-946b-f1c31ae825e0/edit/form",
      "band": "dead",
      "pageCount": 1,
      "submissions": 4,
      "views": 32,
      "conversion": 12.5,
      "lastSubmitted": "2025-03-21",
      "daysAgoLabel": "566d ago",
      "pages": [
        {
          "url": "https://www.roller.software/expanding-your-business-playbook",
          "path": "/expanding-your-business-playbook",
          "role": "Expansion playbook download"
        }
      ],
      "status": "Dormant",
      "pill": "bad"
    },
    {
      "name": "2026 - Bowling trends report",
      "id": "b20c7fde-0d9a-4280-95e9-3fe07b43c036",
      "hubspotUrl": "https://app.hubspot.com/forms/3375779/editor/b20c7fde-0d9a-4280-95e9-3fe07b43c036/edit/form",
      "band": "warm",
      "pageCount": 1,
      "submissions": 2,
      "views": 34,
      "conversion": 5.88,
      "lastSubmitted": "2026-07-10",
      "daysAgoLabel": "90d ago",
      "pages": [
        {
          "url": "https://www.roller.software/2026-bowling-trends",
          "path": "/2026-bowling-trends",
          "role": "Bowling Trends Report download"
        }
      ],
      "status": "Slowing",
      "pill": "warn"
    },
    {
      "name": "2025 - School vacation optimization guide",
      "id": "faee02b8-dbc3-493d-b042-e85ee5a7a02f",
      "hubspotUrl": "https://app.hubspot.com/forms/3375779/editor/faee02b8-dbc3-493d-b042-e85ee5a7a02f/edit/form",
      "band": "dead",
      "pageCount": 1,
      "submissions": 1,
      "views": 28,
      "conversion": 3.57,
      "lastSubmitted": "2025-03-31",
      "daysAgoLabel": "556d ago",
      "pages": [
        {
          "url": "https://www.roller.software/school-vacation-optimization-guide",
          "path": "/school-vacation-optimization-guide",
          "role": "School vacation guide download"
        }
      ],
      "status": "Dormant",
      "pill": "bad"
    },
    {
      "name": "2025 - Water park trends report",
      "id": "28a500f2-3d72-45f2-9b6d-10d3f87270b4",
      "hubspotUrl": "https://app.hubspot.com/forms/3375779/editor/28a500f2-3d72-45f2-9b6d-10d3f87270b4/edit/form",
      "band": "cold",
      "pageCount": 1,
      "submissions": 1,
      "views": 21,
      "conversion": 4.76,
      "lastSubmitted": "2025-10-07",
      "daysAgoLabel": "366d ago",
      "pages": [
        {
          "url": "https://www.roller.software/2025-water-park-trends-report",
          "path": "/2025-water-park-trends-report",
          "role": "Water Park Trends Report download"
        }
      ],
      "status": "Stale",
      "pill": "warn"
    },
    {
      "name": "French version get started",
      "id": "bd568951-5b7d-4042-8742-a934edbb0622",
      "hubspotUrl": "https://app.hubspot.com/forms/3375779/editor/bd568951-5b7d-4042-8742-a934edbb0622/edit/form",
      "band": "fresh",
      "pageCount": 1,
      "submissions": 1,
      "views": 652,
      "conversion": 0.15,
      "lastSubmitted": "2026-08-25",
      "daysAgoLabel": "44d ago",
      "pages": [
        {
          "url": "https://www.roller.software/fr/commencer",
          "path": "/fr/commencer",
          "role": "FR demo request (Commencer)"
        }
      ],
      "status": "Active",
      "pill": "ok"
    }
  ],
  "hubspotAsOf": "3 September 2026"
};
