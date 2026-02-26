import { DiseasePrediction } from '@/types';

export const diseasePredictions: DiseasePrediction[] = [
  // Thailand Predictions
  {
    id: 'thailand-dengue',
    countryId: 'thailand',
    countryName: 'Thailand',
    countryFlag: '🇹🇭',
    diseaseName: 'Dengue Fever',
    riskPercentage: 73,
    riskLevel: 'high',
    timeframe: 'Next 3 months',
    lastUpdated: '2025-01-27T14:30:00Z',
    description: 'High probability of dengue fever outbreak due to increased rainfall and optimal breeding conditions for Aedes mosquitoes.',
    factors: [
      'Rainy season approaching (May-October)',
      'Rising temperatures creating ideal mosquito breeding conditions',
      'Increased cases reported in neighboring regions',
      'Urban water storage practices contributing to stagnant water'
    ],
    prevention: [
      'Use DEET-based repellent (20-30% concentration)',
      'Eliminate standing water around living areas',
      'Wear long sleeves and pants during dawn/dusk',
      'Use air conditioning or window screens',
      'Seek immediate medical attention for fever symptoms'
    ],
    symptoms: [
      'High fever (40°C/104°F)',
      'Severe headache and eye pain',
      'Muscle and joint pain',
      'Skin rash',
      'Nausea and vomiting'
    ],
    emergencyContacts: ['Tourist Police: 1155', 'Emergency: 191'],
    affectedRegions: ['Bangkok', 'Chiang Mai', 'Phuket', 'Pattaya'],
    peakRiskPeriod: 'June - September 2025'
  },
  {
    id: 'thailand-chikungunya',
    countryId: 'thailand',
    countryName: 'Thailand',
    countryFlag: '🇹🇭',
    diseaseName: 'Chikungunya',
    riskPercentage: 45,
    riskLevel: 'medium',
    timeframe: 'Next 6 months',
    lastUpdated: '2025-01-27T14:30:00Z',
    description: 'Moderate risk of chikungunya outbreak following similar transmission patterns as dengue fever.',
    factors: [
      'Same mosquito vector as dengue (Aedes aegypti)',
      'Seasonal rainfall patterns favor mosquito breeding',
      'Recent cases detected in southern provinces'
    ],
    prevention: [
      'Use mosquito repellent consistently',
      'Remove standing water sources',
      'Install bed nets and window screens',
      'Wear protective clothing outdoors'
    ],
    symptoms: [
      'Sudden onset of fever',
      'Severe joint pain',
      'Muscle pain',
      'Headache',
      'Skin rash'
    ],
    emergencyContacts: ['Emergency: 191'],
    affectedRegions: ['Southern Thailand', 'Koh Samui', 'Krabi'],
    peakRiskPeriod: 'May - August 2025'
  },
  {
    id: 'thailand-zika',
    countryId: 'thailand',
    countryName: 'Thailand',
    countryFlag: '🇹🇭',
    diseaseName: 'Zika Virus',
    riskPercentage: 28,
    riskLevel: 'low',
    timeframe: 'Next 4 months',
    lastUpdated: '2025-01-27T14:30:00Z',
    description: 'Low but present risk of Zika virus transmission, particularly concerning for pregnant travelers.',
    factors: [
      'Endemic presence in Southeast Asia',
      'Mosquito breeding season approaching',
      'Sporadic cases reported annually'
    ],
    prevention: [
      'Pregnant women should consider postponing travel',
      'Use effective mosquito repellent',
      'Practice safe sex or abstain during and after travel',
      'Wear long-sleeved clothing'
    ],
    symptoms: [
      'Mild fever',
      'Skin rash',
      'Conjunctivitis (red eyes)',
      'Joint pain',
      'Headache'
    ],
    emergencyContacts: ['Emergency: 191', 'Tourist Police: 1155'],
    affectedRegions: ['Bangkok Metropolitan', 'Eastern Provinces'],
    peakRiskPeriod: 'April - July 2025'
  },

  // Norway Predictions
  {
    id: 'norway-seasonal-flu',
    countryId: 'norway',
    countryName: 'Norway',
    countryFlag: '🇳🇴',
    diseaseName: 'Seasonal Influenza',
    riskPercentage: 38,
    riskLevel: 'medium',
    timeframe: 'Next 2 months',
    lastUpdated: '2025-01-27T14:30:00Z',
    description: 'Moderate risk of seasonal flu outbreak during winter months with increased indoor gatherings.',
    factors: [
      'Winter season with reduced daylight',
      'Increased indoor gatherings and close contact',
      'Lower humidity levels favor virus survival',
      'Seasonal pattern of influenza circulation'
    ],
    prevention: [
      'Get annual flu vaccination',
      'Wash hands frequently with soap',
      'Avoid close contact with sick individuals',
      'Cover coughs and sneezes',
      'Stay home when feeling unwell'
    ],
    symptoms: [
      'Sudden onset of fever',
      'Cough and sore throat',
      'Body aches and fatigue',
      'Headache',
      'Runny or stuffy nose'
    ],
    emergencyContacts: ['Emergency: 113', 'Medical Advice: 116 117'],
    affectedRegions: ['Oslo', 'Bergen', 'Trondheim', 'Stavanger'],
    peakRiskPeriod: 'February - April 2025'
  },
  {
    id: 'norway-norovirus',
    countryId: 'norway',
    countryName: 'Norway',
    countryFlag: '🇳🇴',
    diseaseName: 'Norovirus',
    riskPercentage: 52,
    riskLevel: 'medium',
    timeframe: 'Next 6 weeks',
    lastUpdated: '2025-01-27T14:30:00Z',
    description: 'Elevated risk of norovirus outbreaks in cruise ships, hotels, and group accommodations during winter travel season.',
    factors: [
      'Peak winter season for norovirus activity',
      'Increased cruise ship and hotel occupancy',
      'Virus survives well in cold, dry conditions',
      'Close quarters in winter accommodations'
    ],
    prevention: [
      'Wash hands thoroughly and frequently',
      'Use alcohol-based hand sanitizer',
      'Avoid raw or undercooked foods',
      'Stay hydrated if symptoms occur',
      'Isolate if experiencing symptoms'
    ],
    symptoms: [
      'Sudden onset of nausea',
      'Vomiting',
      'Diarrhea',
      'Stomach cramps',
      'Low-grade fever'
    ],
    emergencyContacts: ['Emergency: 113'],
    affectedRegions: ['Coastal cruise ports', 'Tourist accommodations'],
    peakRiskPeriod: 'January - March 2025'
  },
  {
    id: 'norway-rsv',
    countryId: 'norway',
    countryName: 'Norway',
    countryFlag: '🇳🇴',
    diseaseName: 'Respiratory Syncytial Virus (RSV)',
    riskPercentage: 31,
    riskLevel: 'low',
    timeframe: 'Next 8 weeks',
    lastUpdated: '2025-01-27T14:30:00Z',
    description: 'Moderate risk of RSV circulation, particularly concerning for travelers with young children or elderly companions.',
    factors: [
      'Winter respiratory virus season',
      'Increased transmission in indoor environments',
      'Vulnerable populations at higher risk'
    ],
    prevention: [
      'Frequent handwashing',
      'Avoid close contact with sick individuals',
      'Clean and disinfect surfaces regularly',
      'Consider masks in crowded indoor spaces',
      'Seek medical attention for breathing difficulties'
    ],
    symptoms: [
      'Runny nose',
      'Decreased appetite',
      'Cough',
      'Sneezing',
      'Fever',
      'Wheezing (in severe cases)'
    ],
    emergencyContacts: ['Emergency: 113', 'Medical Advice: 116 117'],
    affectedRegions: ['Urban centers', 'Childcare facilities'],
    peakRiskPeriod: 'February - April 2025'
  },

  // South Africa Predictions
  {
    id: 'south-africa-malaria',
    countryId: 'south-africa',
    countryName: 'South Africa',
    countryFlag: '🇿🇦',
    diseaseName: 'Malaria',
    riskPercentage: 67,
    riskLevel: 'high',
    timeframe: 'Next 4 months',
    lastUpdated: '2025-01-27T14:30:00Z',
    description: 'High malaria transmission risk in northeastern provinces during summer rainy season.',
    factors: [
      'Summer rainy season creating ideal breeding conditions',
      'Increased mosquito activity in Kruger National Park area',
      'Rising temperatures in KwaZulu-Natal and Mpumalanga',
      'Tourist season coinciding with peak transmission period'
    ],
    prevention: [
      'Take antimalarial prophylaxis as prescribed',
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
    emergencyContacts: ['Emergency: 10177', 'Medical Emergency: 10177'],
    affectedRegions: ['Kruger National Park', 'KwaZulu-Natal', 'Mpumalanga', 'Limpopo'],
    peakRiskPeriod: 'December 2024 - April 2025'
  },
  {
    id: 'south-africa-tuberculosis',
    countryId: 'south-africa',
    countryName: 'South Africa',
    countryFlag: '🇿🇦',
    diseaseName: 'Tuberculosis (MDR-TB)',
    riskPercentage: 42,
    riskLevel: 'medium',
    timeframe: 'Ongoing risk',
    lastUpdated: '2025-01-27T14:30:00Z',
    description: 'Persistent risk of tuberculosis exposure, including drug-resistant strains, particularly in urban areas.',
    factors: [
      'High baseline TB prevalence in population',
      'Increased transmission in crowded areas',
      'Drug-resistant strains circulating',
      'Healthcare facility exposure risk'
    ],
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
    emergencyContacts: ['Emergency: 10177'],
    affectedRegions: ['Cape Town', 'Johannesburg', 'Durban', 'Township areas'],
    peakRiskPeriod: 'Year-round elevated risk'
  },

  // Argentina Predictions
  {
    id: 'argentina-dengue',
    countryId: 'argentina',
    countryName: 'Argentina',
    countryFlag: '🇦🇷',
    diseaseName: 'Dengue Fever',
    riskPercentage: 58,
    riskLevel: 'medium',
    timeframe: 'Next 5 months',
    lastUpdated: '2025-01-27T14:30:00Z',
    description: 'Moderate to high dengue transmission risk in northern provinces during summer season.',
    factors: [
      'Summer season with increased rainfall',
      'Aedes aegypti mosquito activity in northern regions',
      'Cross-border transmission from neighboring countries',
      'Urban areas with inadequate water management'
    ],
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
    emergencyContacts: ['Emergency: 911', 'Medical Emergency: 107'],
    affectedRegions: ['Salta', 'Jujuy', 'Misiones', 'Formosa'],
    peakRiskPeriod: 'December 2024 - April 2025'
  },
  {
    id: 'argentina-hantavirus',
    countryId: 'argentina',
    countryName: 'Argentina',
    countryFlag: '🇦🇷',
    diseaseName: 'Hantavirus',
    riskPercentage: 23,
    riskLevel: 'low',
    timeframe: 'Next 6 months',
    lastUpdated: '2025-01-27T14:30:00Z',
    description: 'Low but persistent risk of hantavirus transmission in rural areas, particularly Patagonia.',
    factors: [
      'Rodent population cycles in rural areas',
      'Agricultural activities increasing exposure',
      'Camping and outdoor recreation in endemic areas',
      'Seasonal patterns of rodent activity'
    ],
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
    emergencyContacts: ['Emergency: 911'],
    affectedRegions: ['Patagonia', 'Northern provinces', 'Rural areas'],
    peakRiskPeriod: 'Spring and summer months'
  },

  // India Predictions
  {
    id: 'india-dengue',
    countryId: 'india',
    countryName: 'India',
    countryFlag: '🇮🇳',
    diseaseName: 'Dengue Fever',
    riskPercentage: 76,
    riskLevel: 'high',
    timeframe: 'Next 4 months',
    lastUpdated: '2025-01-27T14:30:00Z',
    description: 'High dengue transmission risk across multiple states during and after monsoon season.',
    factors: [
      'Post-monsoon period with optimal breeding conditions',
      'Urban water stagnation in major cities',
      'High population density facilitating transmission',
      'Inadequate vector control measures'
    ],
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
    emergencyContacts: ['Emergency: 112'],
    affectedRegions: ['Delhi', 'Mumbai', 'Kolkata', 'Chennai', 'Bangalore'],
    peakRiskPeriod: 'September - December 2024'
  },
  {
    id: 'india-chikungunya',
    countryId: 'india',
    countryName: 'India',
    countryFlag: '🇮🇳',
    diseaseName: 'Chikungunya',
    riskPercentage: 54,
    riskLevel: 'medium',
    timeframe: 'Next 3 months',
    lastUpdated: '2025-01-27T14:30:00Z',
    description: 'Moderate chikungunya risk following dengue transmission patterns in urban areas.',
    factors: [
      'Same mosquito vector as dengue',
      'Post-monsoon breeding conditions',
      'Urban areas with poor sanitation',
      'Recent outbreak reports in several states'
    ],
    prevention: [
      'Use effective mosquito protection',
      'Eliminate standing water',
      'Wear protective clothing',
      'Use bed nets and screens',
      'Seek early medical attention for joint pain'
    ],
    symptoms: [
      'Sudden onset of fever',
      'Severe joint pain',
      'Muscle pain',
      'Headache',
      'Skin rash'
    ],
    emergencyContacts: ['Emergency: 112'],
    affectedRegions: ['Karnataka', 'Maharashtra', 'Rajasthan', 'Andhra Pradesh'],
    peakRiskPeriod: 'October 2024 - January 2025'
  },
  {
    id: 'india-japanese-encephalitis',
    countryId: 'india',
    countryName: 'India',
    countryFlag: '🇮🇳',
    diseaseName: 'Japanese Encephalitis',
    riskPercentage: 34,
    riskLevel: 'medium',
    timeframe: 'Next 2 months',
    lastUpdated: '2025-01-27T14:30:00Z',
    description: 'Moderate risk in rural areas, particularly rice-growing regions during post-monsoon period.',
    factors: [
      'Post-monsoon period in rural areas',
      'Rice cultivation providing breeding sites',
      'Pig farming areas increasing transmission risk',
      'Limited vaccination coverage in some regions'
    ],
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
    emergencyContacts: ['Emergency: 112'],
    affectedRegions: ['Uttar Pradesh', 'Bihar', 'West Bengal', 'Assam'],
    peakRiskPeriod: 'September - November 2024'
  },

  // Italy Predictions
  {
    id: 'italy-west-nile',
    countryId: 'italy',
    countryName: 'Italy',
    countryFlag: '🇮🇹',
    diseaseName: 'West Nile Virus',
    riskPercentage: 29,
    riskLevel: 'low',
    timeframe: 'Next 3 months',
    lastUpdated: '2025-01-27T14:30:00Z',
    description: 'Low risk of West Nile virus transmission in northern regions during late summer.',
    factors: [
      'Mosquito activity in Po Valley region',
      'Migratory bird patterns affecting virus circulation',
      'Warm weather extending mosquito season',
      'Wetland areas providing breeding sites'
    ],
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
    emergencyContacts: ['Emergency: 112'],
    affectedRegions: ['Po Valley', 'Veneto', 'Emilia-Romagna', 'Lombardy'],
    peakRiskPeriod: 'August - October 2024'
  },
  {
    id: 'italy-tick-borne-encephalitis',
    countryId: 'italy',
    countryName: 'Italy',
    countryFlag: '🇮🇹',
    diseaseName: 'Tick-Borne Encephalitis',
    riskPercentage: 18,
    riskLevel: 'low',
    timeframe: 'Next 4 months',
    lastUpdated: '2025-01-27T14:30:00Z',
    description: 'Low risk in northeastern forested areas during tick season.',
    factors: [
      'Tick activity in forested areas',
      'Hiking and outdoor recreation season',
      'Endemic areas in Trentino-Alto Adige',
      'Wildlife reservoir maintaining virus circulation'
    ],
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
    emergencyContacts: ['Emergency: 112', 'Medical Emergency: 118'],
    affectedRegions: ['Trentino-Alto Adige', 'Veneto', 'Friuli-Venezia Giulia'],
    peakRiskPeriod: 'April - October 2025'
  }
];