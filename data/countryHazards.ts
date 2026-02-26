import { CountryHazard } from '@/types';

export const countryHazards: CountryHazard[] = [
  {
    id: 'thailand',
    name: 'Thailand',
    flag: '🇹🇭',
    region: 'Southeast Asia',
    riskLevel: 'medium',
    lastUpdated: '2025-01-27T12:00:00Z',
    healthHazards: [
      {
        id: 'dengue-fever',
        type: 'disease',
        title: 'Dengue Fever',
        description: 'Mosquito-borne viral infection common throughout Thailand, especially during rainy season (May-October)',
        severity: 'high',
        prevalence: 'common',
        seasonality: 'Year-round, peak during rainy season',
        prevention: [
          'Use DEET-based insect repellent (20-30% concentration)',
          'Wear long-sleeved shirts and long pants, especially at dawn and dusk',
          'Stay in air-conditioned or well-screened areas',
          'Remove standing water around accommodation',
          'Use bed nets if sleeping in open areas'
        ],
        symptoms: [
          'High fever (40°C/104°F)',
          'Severe headache',
          'Pain behind the eyes',
          'Muscle and joint pain',
          'Skin rash',
          'Nausea and vomiting'
        ],
        treatment: 'No specific treatment - supportive care, avoid aspirin',
        emergencyContacts: ['Tourist Police: 1155', 'Emergency: 191']
      },
      {
        id: 'malaria',
        type: 'disease',
        title: 'Malaria',
        description: 'Present in rural and forested areas, particularly near borders with Cambodia, Laos, and Myanmar',
        severity: 'high',
        prevalence: 'moderate',
        seasonality: 'Year-round, higher risk during rainy season',
        prevention: [
          'Take antimalarial medication as prescribed',
          'Use insect repellent containing DEET',
          'Sleep under insecticide-treated bed nets',
          'Wear protective clothing at night',
          'Stay in air-conditioned or screened accommodations'
        ],
        symptoms: [
          'Fever and chills',
          'Headache',
          'Muscle aches',
          'Fatigue',
          'Nausea and vomiting',
          'Diarrhea'
        ],
        treatment: 'Immediate medical attention required - antimalarial drugs',
        emergencyContacts: ['Emergency: 191', 'Tourist Police: 1155']
      },
      {
        id: 'japanese-encephalitis',
        type: 'disease',
        title: 'Japanese Encephalitis',
        description: 'Viral infection transmitted by mosquitoes, more common in rural agricultural areas',
        severity: 'high',
        prevalence: 'low',
        seasonality: 'May to October (rainy season)',
        prevention: [
          'Get vaccinated before travel (recommended for stays >1 month)',
          'Use mosquito repellent and protective clothing',
          'Avoid outdoor activities at dawn and dusk',
          'Stay away from pig farms and rice paddies'
        ],
        symptoms: [
          'Fever',
          'Headache',
          'Neck stiffness',
          'Confusion',
          'Seizures',
          'Paralysis'
        ],
        treatment: 'No specific treatment - supportive care in hospital',
        emergencyContacts: ['Emergency: 191']
      },
      {
        id: 'food-poisoning',
        type: 'contamination',
        title: 'Foodborne Illness',
        description: 'Common risk from street food, contaminated water, and poor food hygiene practices',
        severity: 'medium',
        prevalence: 'very common',
        seasonality: 'Year-round, higher risk in hot weather',
        prevention: [
          'Eat only thoroughly cooked food served hot',
          'Avoid raw or undercooked seafood, meat, and eggs',
          'Choose busy street vendors with high turnover',
          'Drink only bottled or boiled water',
          'Avoid ice unless made from safe water',
          'Peel fruits yourself'
        ],
        symptoms: [
          'Nausea and vomiting',
          'Diarrhea',
          'Stomach cramps',
          'Fever',
          'Dehydration'
        ],
        treatment: 'Stay hydrated, oral rehydration salts, seek medical care if severe',
        emergencyContacts: ['Tourist Police: 1155']
      }
    ],
    environmentalHazards: [
      {
        id: 'air-pollution',
        type: 'pollution',
        title: 'Air Pollution',
        description: 'High levels of PM2.5 and smog in Bangkok and major cities, especially during dry season',
        severity: 'medium',
        prevalence: 'common',
        seasonality: 'Worst during dry season (November-April)',
        prevention: [
          'Check daily air quality index (AQI)',
          'Wear N95 or P2 masks when AQI >150',
          'Limit outdoor activities during high pollution days',
          'Stay indoors with air purifiers when possible',
          'Avoid exercising outdoors during peak pollution'
        ],
        symptoms: [
          'Coughing',
          'Throat irritation',
          'Eye irritation',
          'Shortness of breath',
          'Chest tightness'
        ],
        treatment: 'Move to clean air environment, use inhaler if prescribed',
        emergencyContacts: ['Emergency: 191']
      },
      {
        id: 'flooding',
        type: 'natural_disaster',
        title: 'Seasonal Flooding',
        description: 'Annual monsoon flooding affects many areas, particularly Bangkok and central plains',
        severity: 'medium',
        prevalence: 'seasonal',
        seasonality: 'Rainy season (May-October), peak August-September',
        prevention: [
          'Monitor weather forecasts and flood warnings',
          'Avoid low-lying areas during heavy rains',
          'Keep emergency supplies and important documents waterproof',
          'Know evacuation routes from your accommodation',
          'Avoid walking or driving through flood water'
        ],
        symptoms: [
          'Property damage',
          'Transportation disruption',
          'Increased disease risk from contaminated water'
        ],
        treatment: 'Follow local evacuation orders, seek higher ground',
        emergencyContacts: ['Emergency: 191', 'Tourist Police: 1155']
      },
      {
        id: 'heat-exhaustion',
        type: 'climate',
        title: 'Extreme Heat & Humidity',
        description: 'High temperatures (30-40°C) with extreme humidity can cause heat-related illness',
        severity: 'medium',
        prevalence: 'common',
        seasonality: 'Year-round, worst March-May',
        prevention: [
          'Stay hydrated - drink water regularly',
          'Avoid prolonged sun exposure during 10am-4pm',
          'Wear lightweight, light-colored, loose-fitting clothing',
          'Use sunscreen SPF 30+ and reapply frequently',
          'Take frequent breaks in air-conditioned areas',
          'Avoid strenuous outdoor activities during hottest hours'
        ],
        symptoms: [
          'Heavy sweating',
          'Weakness or fatigue',
          'Dizziness',
          'Nausea',
          'Headache',
          'Muscle cramps'
        ],
        treatment: 'Move to cool area, drink fluids, apply cool cloths, seek medical help if severe',
        emergencyContacts: ['Emergency: 191']
      },
      {
        id: 'tsunami-risk',
        type: 'natural_disaster',
        title: 'Tsunami Risk',
        description: 'Coastal areas, especially Andaman Sea coast, are at risk from Indian Ocean tsunamis',
        severity: 'high',
        prevalence: 'rare',
        seasonality: 'Year-round risk',
        prevention: [
          'Learn tsunami evacuation routes at coastal accommodations',
          'Recognize natural warning signs (earthquake, ocean recession)',
          'Follow official tsunami warnings immediately',
          'Stay informed about seismic activity in Indian Ocean',
          'Choose higher-floor rooms in coastal hotels'
        ],
        symptoms: [
          'Ground shaking (earthquake)',
          'Ocean water rapidly receding',
          'Loud ocean roar',
          'Wall of water approaching shore'
        ],
        treatment: 'Immediately move to higher ground or inland, follow evacuation orders',
        emergencyContacts: ['Emergency: 191', 'Disaster Prevention: 1784']
      }
    ],
    travelTips: [
      'Get vaccinated for Hepatitis A, Hepatitis B, and Japanese Encephalitis',
      'Carry comprehensive travel insurance',
      'Register with your embassy upon arrival',
      'Keep copies of important documents in multiple locations',
      'Learn basic Thai phrases for emergencies',
      'Respect local customs and dress codes, especially at temples'
    ],
    emergencyNumbers: {
      police: '191',
      fire: '199',
      medical: '1669',
      tourist_police: '1155',
      tourist_hotline: '1672'
    }
  },
  {
    id: 'norway',
    name: 'Norway',
    flag: '🇳🇴',
    region: 'Northern Europe',
    riskLevel: 'low',
    lastUpdated: '2025-01-27T12:00:00Z',
    healthHazards: [
      {
        id: 'tick-borne-encephalitis',
        type: 'disease',
        title: 'Tick-Borne Encephalitis (TBE)',
        description: 'Viral infection transmitted by ticks, found in forested areas of southern Norway',
        severity: 'medium',
        prevalence: 'low',
        seasonality: 'April to October (tick season)',
        prevention: [
          'Get TBE vaccination before travel if hiking in endemic areas',
          'Wear long pants and long-sleeved shirts in forests',
          'Use insect repellent containing DEET',
          'Perform daily tick checks after outdoor activities',
          'Stay on marked trails when possible',
          'Wear light-colored clothing to spot ticks easily'
        ],
        symptoms: [
          'Fever',
          'Headache',
          'Muscle aches',
          'Fatigue',
          'Neck stiffness',
          'Confusion (in severe cases)'
        ],
        treatment: 'No specific treatment - supportive care, immediate medical attention',
        emergencyContacts: ['Emergency: 113', 'Medical Emergency: 113']
      },
      {
        id: 'lyme-disease',
        type: 'disease',
        title: 'Lyme Disease',
        description: 'Bacterial infection transmitted by ticks, present throughout Norway\'s forested regions',
        severity: 'medium',
        prevalence: 'moderate',
        seasonality: 'May to September (peak tick activity)',
        prevention: [
          'Wear protective clothing in wooded areas',
          'Use tick repellent on skin and clothing',
          'Check for ticks daily, especially in hair, armpits, and groin',
          'Remove ticks promptly with fine-tipped tweezers',
          'Shower within 2 hours of outdoor activities'
        ],
        symptoms: [
          'Bull\'s-eye rash around tick bite',
          'Fever and chills',
          'Headache',
          'Fatigue',
          'Joint and muscle aches',
          'Swollen lymph nodes'
        ],
        treatment: 'Antibiotics - early treatment prevents complications',
        emergencyContacts: ['Emergency: 113']
      },
      {
        id: 'hypothermia-risk',
        type: 'climate',
        title: 'Hypothermia & Frostbite',
        description: 'Risk of cold-related injuries, especially in northern regions and during winter months',
        severity: 'high',
        prevalence: 'seasonal',
        seasonality: 'October to April (winter months)',
        prevention: [
          'Dress in layers with moisture-wicking base layers',
          'Wear waterproof outer shell and insulated boots',
          'Keep extremities covered - hat, gloves, warm socks',
          'Stay dry and change wet clothing immediately',
          'Carry emergency shelter and warm drinks',
          'Inform others of your travel plans',
          'Check weather conditions before outdoor activities'
        ],
        symptoms: [
          'Shivering',
          'Confusion',
          'Slurred speech',
          'Drowsiness',
          'Loss of coordination',
          'Weak pulse'
        ],
        treatment: 'Gradual rewarming, warm drinks, immediate medical attention for severe cases',
        emergencyContacts: ['Emergency: 113', 'Mountain Rescue: 113']
      }
    ],
    environmentalHazards: [
      {
        id: 'avalanche-risk',
        type: 'natural_disaster',
        title: 'Avalanche Risk',
        description: 'Significant avalanche danger in mountainous regions, especially during and after snowfall',
        severity: 'high',
        prevalence: 'seasonal',
        seasonality: 'December to May (snow season)',
        prevention: [
          'Check avalanche forecasts at varsom.no before backcountry travel',
          'Carry avalanche safety equipment (beacon, probe, shovel)',
          'Travel with experienced guides in avalanche terrain',
          'Take avalanche safety courses before backcountry skiing',
          'Avoid steep slopes during high avalanche danger',
          'Travel one at a time in avalanche terrain'
        ],
        symptoms: [
          'Burial under snow',
          'Difficulty breathing',
          'Hypothermia',
          'Trauma from debris'
        ],
        treatment: 'Immediate rescue and medical attention - time critical',
        emergencyContacts: ['Emergency: 113', 'Mountain Rescue: 113']
      },
      {
        id: 'polar-night',
        type: 'climate',
        title: 'Polar Night & Seasonal Depression',
        description: 'Extended darkness in northern Norway can affect mental health and circadian rhythms',
        severity: 'low',
        prevalence: 'seasonal',
        seasonality: 'November to January (polar night period)',
        prevention: [
          'Use light therapy lamps (10,000 lux) for 30 minutes daily',
          'Maintain regular sleep schedule',
          'Get outdoor light exposure when available',
          'Take vitamin D supplements',
          'Stay physically active',
          'Maintain social connections'
        ],
        symptoms: [
          'Fatigue',
          'Depression',
          'Sleep disturbances',
          'Difficulty concentrating',
          'Changes in appetite',
          'Social withdrawal'
        ],
        treatment: 'Light therapy, counseling, medical consultation if severe',
        emergencyContacts: ['Mental Health Crisis: 116 117']
      },
      {
        id: 'midnight-sun',
        type: 'climate',
        title: 'Midnight Sun Sleep Disruption',
        description: '24-hour daylight in summer can disrupt sleep patterns and cause fatigue',
        severity: 'low',
        prevalence: 'seasonal',
        seasonality: 'May to July (midnight sun period)',
        prevention: [
          'Use blackout curtains or eye masks',
          'Maintain consistent sleep schedule',
          'Limit caffeine and alcohol before bedtime',
          'Use blue light blocking glasses in evening',
          'Create dark, cool sleeping environment'
        ],
        symptoms: [
          'Insomnia',
          'Fatigue during day',
          'Difficulty concentrating',
          'Mood changes',
          'Appetite changes'
        ],
        treatment: 'Sleep hygiene practices, melatonin supplements, medical advice if persistent',
        emergencyContacts: ['Medical Advice: 116 117']
      },
      {
        id: 'extreme-weather',
        type: 'climate',
        title: 'Extreme Weather Events',
        description: 'Sudden weather changes, strong winds, and storms can create dangerous conditions',
        severity: 'medium',
        prevalence: 'seasonal',
        seasonality: 'Year-round, more frequent in winter',
        prevention: [
          'Monitor weather forecasts regularly (yr.no)',
          'Carry emergency communication devices in remote areas',
          'Inform others of travel plans and expected return',
          'Carry extra food, water, and warm clothing',
          'Know how to build emergency shelter',
          'Turn back if weather conditions deteriorate'
        ],
        symptoms: [
          'Exposure to elements',
          'Hypothermia',
          'Dehydration',
          'Exhaustion',
          'Disorientation'
        ],
        treatment: 'Seek immediate shelter, signal for help, emergency medical care',
        emergencyContacts: ['Emergency: 113', 'Sea Rescue: 120']
      },
      {
        id: 'wildlife-encounters',
        type: 'wildlife',
        title: 'Wildlife Encounters',
        description: 'Brown bears, wolves, and aggressive reindeer can pose risks in wilderness areas',
        severity: 'low',
        prevalence: 'rare',
        seasonality: 'Year-round, more active in summer',
        prevention: [
          'Make noise while hiking to avoid surprising animals',
          'Store food properly in bear-safe containers',
          'Keep clean campsite free of food odors',
          'Travel in groups when possible',
          'Carry bear spray in bear country',
          'Respect wildlife viewing distances (minimum 200m for bears)'
        ],
        symptoms: [
          'Animal attack injuries',
          'Lacerations',
          'Puncture wounds',
          'Broken bones',
          'Shock'
        ],
        treatment: 'Immediate first aid, emergency medical evacuation',
        emergencyContacts: ['Emergency: 113']
      }
    ],
    travelTips: [
      'Pack appropriate clothing for extreme weather conditions',
      'Learn basic Norwegian phrases for emergencies',
      'Carry comprehensive travel insurance including mountain rescue coverage',
      'Download offline maps and weather apps',
      'Respect the "Right to Roam" laws and environmental protection',
      'Be prepared for high costs - budget accordingly'
    ],
    emergencyNumbers: {
      emergency: '113',
      police: '112',
      fire: '110',
      medical_advice: '116 117',
      sea_rescue: '120',
      mental_health_crisis: '116 117'
    }
  },
  {
    id: 'south-africa',
    name: 'South Africa',
    flag: '🇿🇦',
    region: 'Southern Africa',
    riskLevel: 'high',
    lastUpdated: '2025-01-27T12:00:00Z',
    healthHazards: [
      {
        id: 'malaria-sa',
        type: 'disease',
        title: 'Malaria',
        description: 'Present in northeastern regions including Kruger National Park, KwaZulu-Natal, and Mpumalanga provinces',
        severity: 'high',
        prevalence: 'moderate',
        seasonality: 'October to May (summer/rainy season)',
        prevention: [
          'Take antimalarial prophylaxis as prescribed by doctor',
          'Use DEET-based insect repellent (20-30%)',
          'Sleep under insecticide-treated bed nets',
          'Wear long sleeves and pants from dusk to dawn',
          'Stay in air-conditioned or well-screened accommodations'
        ],
        symptoms: [
          'High fever and chills',
          'Severe headache',
          'Muscle aches',
          'Nausea and vomiting',
          'Fatigue',
          'Sweating'
        ],
        treatment: 'Immediate medical attention required - antimalarial medication',
        emergencyContacts: ['Emergency: 10177', 'Medical Emergency: 10177']
      },
      {
        id: 'tuberculosis',
        type: 'disease',
        title: 'Tuberculosis (TB)',
        description: 'High TB prevalence, often drug-resistant strains. Risk increased in crowded areas and healthcare settings',
        severity: 'high',
        prevalence: 'very common',
        seasonality: 'Year-round',
        prevention: [
          'Avoid crowded, poorly ventilated spaces',
          'Wear N95 masks in healthcare facilities',
          'Maintain good nutrition and immune system',
          'Avoid close contact with people showing TB symptoms',
          'Get tested if experiencing persistent cough'
        ],
        symptoms: [
          'Persistent cough (>3 weeks)',
          'Coughing up blood',
          'Chest pain',
          'Weight loss',
          'Night sweats',
          'Fever'
        ],
        treatment: 'Immediate medical evaluation and testing required',
        emergencyContacts: ['Emergency: 10177']
      },
      {
        id: 'hiv-aids',
        type: 'disease',
        title: 'HIV/AIDS Risk',
        description: 'South Africa has high HIV prevalence. Risk through unprotected sex, contaminated needles, or blood products',
        severity: 'critical',
        prevalence: 'very common',
        seasonality: 'Year-round',
        prevention: [
          'Practice safe sex - use condoms consistently',
          'Avoid sharing needles or personal care items',
          'Ensure medical procedures use sterile equipment',
          'Consider PrEP if at high risk',
          'Get tested regularly if sexually active'
        ],
        symptoms: [
          'Flu-like symptoms (early infection)',
          'Persistent fatigue',
          'Unexplained weight loss',
          'Recurring infections',
          'Swollen lymph nodes'
        ],
        treatment: 'Immediate medical consultation and testing',
        emergencyContacts: ['Emergency: 10177', 'AIDS Helpline: 0800 012 322']
      }
    ],
    environmentalHazards: [
      {
        id: 'crime-violence',
        type: 'environmental',
        title: 'High Crime Rates',
        description: 'Elevated risk of violent crime, robbery, carjacking, and assault, particularly in urban areas',
        severity: 'high',
        prevalence: 'common',
        seasonality: 'Year-round, higher during holidays',
        prevention: [
          'Avoid displaying valuable items or large amounts of cash',
          'Stay in well-lit, populated areas',
          'Use reputable tour operators and accommodation',
          'Avoid walking alone, especially at night',
          'Keep car doors locked and windows up while driving',
          'Be aware of surroundings at all times'
        ],
        symptoms: [
          'Physical injury from assault',
          'Psychological trauma',
          'Loss of property',
          'Financial loss'
        ],
        treatment: 'Report to police immediately, seek medical attention for injuries',
        emergencyContacts: ['Police: 10111', 'Emergency: 10177']
      }
    ],
    travelTips: [
      'Get vaccinated for Yellow Fever, Hepatitis A/B, and Typhoid',
      'Carry comprehensive travel and medical insurance',
      'Register with your embassy',
      'Avoid tap water - drink bottled water',
      'Be extremely cautious about personal safety',
      'Use reputable tour operators for safari activities'
    ],
    emergencyNumbers: {
      emergency: '10177',
      police: '10111',
      fire: '10177',
      medical: '10177',
      tourist_helpline: '083 123 69 47'
    }
  },
  {
    id: 'argentina',
    name: 'Argentina',
    flag: '🇦🇷',
    region: 'South America',
    riskLevel: 'medium',
    lastUpdated: '2025-01-27T12:00:00Z',
    healthHazards: [
      {
        id: 'dengue-argentina',
        type: 'disease',
        title: 'Dengue Fever',
        description: 'Increasing cases in northern provinces including Salta, Jujuy, and Misiones, especially during summer months',
        severity: 'high',
        prevalence: 'moderate',
        seasonality: 'October to May (summer season)',
        prevention: [
          'Use effective mosquito repellent containing DEET',
          'Wear long sleeves and pants during dawn and dusk',
          'Stay in air-conditioned or screened accommodations',
          'Remove standing water around living areas',
          'Use bed nets in high-risk areas'
        ],
        symptoms: [
          'High fever (40°C/104°F)',
          'Severe headache',
          'Pain behind eyes',
          'Muscle and joint pain',
          'Skin rash',
          'Nausea and vomiting'
        ],
        treatment: 'No specific treatment - supportive care, avoid aspirin',
        emergencyContacts: ['Emergency: 911', 'Medical Emergency: 107']
      },
      {
        id: 'hantavirus',
        type: 'disease',
        title: 'Hantavirus Pulmonary Syndrome',
        description: 'Transmitted by rodents, particularly in rural areas of Patagonia and northern provinces',
        severity: 'high',
        prevalence: 'low',
        seasonality: 'Year-round, peak in spring/summer',
        prevention: [
          'Avoid areas with rodent infestations',
          'Seal food in rodent-proof containers',
          'Clean up potential nesting sites',
          'Wear gloves when cleaning potentially contaminated areas',
          'Ventilate enclosed spaces before entering'
        ],
        symptoms: [
          'Fever and chills',
          'Muscle aches',
          'Headache',
          'Nausea and vomiting',
          'Difficulty breathing',
          'Cough'
        ],
        treatment: 'Immediate medical attention - supportive care in hospital',
        emergencyContacts: ['Emergency: 911']
      },
      {
        id: 'altitude-sickness',
        type: 'climate',
        title: 'Altitude Sickness',
        description: 'Risk in Andean regions above 2,500m, including popular destinations like Salta and Mendoza',
        severity: 'medium',
        prevalence: 'common',
        seasonality: 'Year-round',
        prevention: [
          'Ascend gradually - no more than 500m per day above 3,000m',
          'Stay hydrated and avoid alcohol',
          'Eat light, high-carbohydrate meals',
          'Consider acetazolamide prophylaxis',
          'Recognize early symptoms and descend if severe'
        ],
        symptoms: [
          'Headache',
          'Nausea and vomiting',
          'Fatigue',
          'Dizziness',
          'Difficulty sleeping',
          'Loss of appetite'
        ],
        treatment: 'Descend to lower altitude, oxygen therapy, medical evaluation',
        emergencyContacts: ['Emergency: 911', 'Mountain Rescue: 911']
      }
    ],
    environmentalHazards: [
      {
        id: 'extreme-weather-argentina',
        type: 'climate',
        title: 'Extreme Weather Events',
        description: 'Severe thunderstorms, flash floods, and extreme temperature variations across different regions',
        severity: 'medium',
        prevalence: 'seasonal',
        seasonality: 'Summer storms (December-March), winter cold (June-August)',
        prevention: [
          'Monitor weather forecasts regularly',
          'Avoid low-lying areas during heavy rains',
          'Carry appropriate clothing for temperature extremes',
          'Plan indoor alternatives during severe weather',
          'Stay informed about local weather warnings'
        ],
        symptoms: [
          'Exposure to elements',
          'Hypothermia or heat exhaustion',
          'Injury from severe weather',
          'Transportation disruption'
        ],
        treatment: 'Seek immediate shelter, emergency medical care if injured',
        emergencyContacts: ['Emergency: 911']
      }
    ],
    travelTips: [
      'Get vaccinated for Hepatitis A/B and Yellow Fever (if traveling from endemic areas)',
      'Carry altitude sickness medication if visiting Andean regions',
      'Use bottled water in rural areas',
      'Be prepared for significant climate variations',
      'Learn basic Spanish phrases for emergencies',
      'Carry comprehensive travel insurance'
    ],
    emergencyNumbers: {
      emergency: '911',
      police: '911',
      fire: '911',
      medical: '107',
      tourist_police: '0800 999 5000'
    }
  },
  {
    id: 'india',
    name: 'India',
    flag: '🇮🇳',
    region: 'South Asia',
    riskLevel: 'high',
    lastUpdated: '2025-01-27T12:00:00Z',
    healthHazards: [
      {
        id: 'travelers-diarrhea',
        type: 'contamination',
        title: 'Traveler\'s Diarrhea',
        description: 'Very common due to contaminated food and water, poor sanitation, and different bacterial strains',
        severity: 'medium',
        prevalence: 'very common',
        seasonality: 'Year-round, higher risk during monsoon',
        prevention: [
          'Drink only bottled or boiled water',
          'Avoid ice cubes and raw vegetables',
          'Eat only thoroughly cooked, hot food',
          'Avoid street food and buffets',
          'Use bottled water for brushing teeth',
          'Wash hands frequently with soap'
        ],
        symptoms: [
          'Frequent loose stools',
          'Abdominal cramps',
          'Nausea and vomiting',
          'Fever',
          'Dehydration',
          'Urgency'
        ],
        treatment: 'Stay hydrated, oral rehydration salts, seek medical care if severe',
        emergencyContacts: ['Emergency: 112', 'Medical Emergency: 102']
      },
      {
        id: 'dengue-india',
        type: 'disease',
        title: 'Dengue Fever',
        description: 'Endemic throughout India with seasonal outbreaks, particularly in urban areas during monsoon',
        severity: 'high',
        prevalence: 'common',
        seasonality: 'June to November (monsoon and post-monsoon)',
        prevention: [
          'Use DEET-based mosquito repellent',
          'Wear long sleeves and pants',
          'Stay in air-conditioned or screened rooms',
          'Remove standing water sources',
          'Use mosquito nets while sleeping'
        ],
        symptoms: [
          'High fever',
          'Severe headache',
          'Eye pain',
          'Muscle and joint pain',
          'Skin rash',
          'Bleeding (severe cases)'
        ],
        treatment: 'No specific treatment - supportive care, avoid aspirin',
        emergencyContacts: ['Emergency: 112']
      },
      {
        id: 'japanese-encephalitis-india',
        type: 'disease',
        title: 'Japanese Encephalitis',
        description: 'Mosquito-borne viral infection, endemic in rural areas, especially rice-growing regions',
        severity: 'high',
        prevalence: 'moderate',
        seasonality: 'June to October (monsoon season)',
        prevention: [
          'Get vaccinated before travel (recommended)',
          'Use effective mosquito protection',
          'Avoid outdoor activities at dawn and dusk',
          'Stay away from pig farms and rice paddies',
          'Use bed nets and protective clothing'
        ],
        symptoms: [
          'Fever and headache',
          'Neck stiffness',
          'Confusion',
          'Seizures',
          'Paralysis',
          'Coma (severe cases)'
        ],
        treatment: 'No specific treatment - immediate medical attention required',
        emergencyContacts: ['Emergency: 112']
      }
    ],
    environmentalHazards: [
      {
        id: 'air-pollution-india',
        type: 'pollution',
        title: 'Severe Air Pollution',
        description: 'Extremely high levels of PM2.5 and toxic pollutants in major cities, especially Delhi and Mumbai',
        severity: 'high',
        prevalence: 'very common',
        seasonality: 'Worst during winter months (October-February)',
        prevention: [
          'Wear N95 or P2 masks outdoors',
          'Limit outdoor activities during high pollution days',
          'Stay indoors with air purifiers when possible',
          'Check daily Air Quality Index (AQI)',
          'Avoid exercising outdoors',
          'Consider shorter stays in highly polluted cities'
        ],
        symptoms: [
          'Coughing and throat irritation',
          'Eye irritation and watering',
          'Shortness of breath',
          'Chest tightness',
          'Headaches',
          'Fatigue'
        ],
        treatment: 'Move to clean air environment, use prescribed inhalers, seek medical care',
        emergencyContacts: ['Emergency: 112']
      },
      {
        id: 'extreme-heat-india',
        type: 'climate',
        title: 'Extreme Heat Waves',
        description: 'Dangerous heat waves with temperatures exceeding 45°C (113°F), particularly in northern plains',
        severity: 'high',
        prevalence: 'seasonal',
        seasonality: 'April to June (pre-monsoon)',
        prevention: [
          'Stay indoors during peak heat hours (10am-6pm)',
          'Drink water frequently, even if not thirsty',
          'Wear light-colored, loose-fitting clothing',
          'Use sunscreen and wide-brimmed hats',
          'Seek air-conditioned environments',
          'Avoid strenuous outdoor activities'
        ],
        symptoms: [
          'Heavy sweating or stopped sweating',
          'High body temperature',
          'Confusion or altered mental state',
          'Nausea and vomiting',
          'Rapid heartbeat',
          'Unconsciousness'
        ],
        treatment: 'Move to cool area immediately, apply cool water, seek emergency medical care',
        emergencyContacts: ['Emergency: 112']
      }
    ],
    travelTips: [
      'Get comprehensive vaccinations including Hepatitis A/B, Typhoid, Japanese Encephalitis',
      'Carry high-quality water purification tablets',
      'Pack N95 masks for air pollution',
      'Bring oral rehydration salts',
      'Use only reputable medical facilities',
      'Respect local customs and dress codes'
    ],
    emergencyNumbers: {
      emergency: '112',
      police: '100',
      fire: '101',
      medical: '102',
      tourist_helpline: '1363'
    }
  },
  {
    id: 'italy',
    name: 'Italy',
    flag: '🇮🇹',
    region: 'Southern Europe',
    riskLevel: 'low',
    lastUpdated: '2025-01-27T12:00:00Z',
    healthHazards: [
      {
        id: 'tick-borne-encephalitis-italy',
        type: 'disease',
        title: 'Tick-Borne Encephalitis',
        description: 'Present in northeastern regions including Trentino-Alto Adige and parts of Veneto, transmitted by ticks in forested areas',
        severity: 'medium',
        prevalence: 'low',
        seasonality: 'April to October (tick season)',
        prevention: [
          'Get TBE vaccination if hiking in endemic areas',
          'Wear long pants and closed shoes in forests',
          'Use insect repellent containing DEET',
          'Perform daily tick checks after outdoor activities',
          'Stay on marked trails when possible'
        ],
        symptoms: [
          'Fever and headache',
          'Muscle aches',
          'Fatigue',
          'Neck stiffness',
          'Confusion (severe cases)',
          'Paralysis (rare)'
        ],
        treatment: 'No specific treatment - supportive care, immediate medical attention',
        emergencyContacts: ['Emergency: 112', 'Medical Emergency: 118']
      },
      {
        id: 'west-nile-virus-italy',
        type: 'disease',
        title: 'West Nile Virus',
        description: 'Mosquito-borne virus present in northern Italy, particularly Po Valley region during summer months',
        severity: 'medium',
        prevalence: 'low',
        seasonality: 'June to October (mosquito season)',
        prevention: [
          'Use mosquito repellent during outdoor activities',
          'Wear long sleeves and pants at dawn and dusk',
          'Use air conditioning or window screens',
          'Remove standing water around accommodation',
          'Avoid outdoor activities during peak mosquito hours'
        ],
        symptoms: [
          'Fever and headache',
          'Body aches',
          'Joint pain',
          'Vomiting',
          'Diarrhea',
          'Skin rash'
        ],
        treatment: 'No specific treatment - supportive care, rest and fluids',
        emergencyContacts: ['Emergency: 112']
      },
      {
        id: 'heat-related-illness-italy',
        type: 'climate',
        title: 'Heat-Related Illness',
        description: 'Risk of heat exhaustion and heat stroke during summer months, especially in southern regions and cities',
        severity: 'medium',
        prevalence: 'seasonal',
        seasonality: 'June to September (summer)',
        prevention: [
          'Stay hydrated - drink water regularly',
          'Seek shade during peak sun hours (11am-4pm)',
          'Wear lightweight, light-colored clothing',
          'Use sunscreen SPF 30+ and reapply frequently',
          'Take frequent breaks in air-conditioned areas',
          'Avoid strenuous activities during hottest hours'
        ],
        symptoms: [
          'Heavy sweating',
          'Weakness or fatigue',
          'Dizziness',
          'Nausea',
          'Headache',
          'Muscle cramps'
        ],
        treatment: 'Move to cool area, drink fluids, apply cool cloths, seek medical help if severe',
        emergencyContacts: ['Emergency: 112']
      }
    ],
    environmentalHazards: [
      {
        id: 'volcanic-activity',
        type: 'natural_disaster',
        title: 'Volcanic Activity',
        description: 'Active volcanoes including Mount Vesuvius, Etna, and Stromboli pose risks to nearby areas',
        severity: 'medium',
        prevalence: 'rare',
        seasonality: 'Year-round monitoring required',
        prevention: [
          'Monitor volcanic activity reports before visiting volcanic areas',
          'Follow local evacuation orders if issued',
          'Stay informed about restricted zones',
          'Carry dust masks in volcanic regions',
          'Have evacuation plans when near active volcanoes'
        ],
        symptoms: [
          'Respiratory irritation from ash',
          'Eye irritation',
          'Skin irritation',
          'Potential injury from volcanic debris'
        ],
        treatment: 'Follow evacuation procedures, seek medical attention for respiratory issues',
        emergencyContacts: ['Emergency: 112', 'Civil Protection: 112']
      },
      {
        id: 'earthquake-risk',
        type: 'natural_disaster',
        title: 'Seismic Activity',
        description: 'Italy is seismically active with earthquake risk throughout the country, particularly in central and southern regions',
        severity: 'medium',
        prevalence: 'unpredictable',
        seasonality: 'Year-round',
        prevention: [
          'Learn earthquake safety procedures (Drop, Cover, Hold)',
          'Identify safe spots in buildings (under sturdy tables, doorways)',
          'Keep emergency supplies accessible',
          'Know evacuation routes from buildings',
          'Stay informed about local emergency procedures'
        ],
        symptoms: [
          'Potential injuries from falling objects',
          'Trauma from building collapse',
          'Cuts from broken glass',
          'Psychological stress'
        ],
        treatment: 'Follow earthquake safety protocols, seek medical attention for injuries',
        emergencyContacts: ['Emergency: 112', 'Fire Brigade: 115']
      }
    ],
    travelTips: [
      'Standard European vaccinations are sufficient',
      'Carry European Health Insurance Card (EHIC) if EU citizen',
      'Learn basic Italian phrases for emergencies',
      'Be aware of pickpockets in tourist areas',
      'Respect local customs and dress codes at religious sites',
      'Stay hydrated during summer months'
    ],
    emergencyNumbers: {
      emergency: '112',
      police: '113',
      fire: '115',
      medical: '118',
      coast_guard: '1530'
    }
  }
];