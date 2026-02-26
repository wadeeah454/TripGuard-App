import { Risk } from '@/types';

export const mockRisks: Risk[] = [
  {
    id: '1',
    type: 'water_contamination',
    title: 'E. Coli Contamination',
    description: 'High levels of E. coli bacteria detected in local water supply',
    severity: 'high',
    location: {
      latitude: 37.7749,
      longitude: -122.4194,
      address: 'Golden Gate Park Lake, San Francisco'
    },
    distance: 250,
    lastUpdated: '2025-01-27T10:30:00Z',
    prevention: [
      'Avoid drinking or swimming in contaminated water',
      'Use bottled or boiled water for drinking',
      'Wash hands frequently with soap'
    ],
    symptoms: ['Diarrhea', 'Stomach cramps', 'Nausea', 'Fever'],
    emergencyContacts: ['911', 'Poison Control: 1-800-222-1222']
  },
  {
    id: '2',
    type: 'parasite',
    title: 'Schistosomiasis Risk',
    description: 'Parasitic worms present in freshwater areas',
    severity: 'medium',
    location: {
      latitude: 37.7849,
      longitude: -122.4094,
      address: 'Stow Lake, Golden Gate Park'
    },
    distance: 180,
    lastUpdated: '2025-01-27T09:15:00Z',
    prevention: [
      'Avoid swimming in freshwater lakes and rivers',
      'Dry off immediately after water contact',
      'Seek medical attention if symptoms appear'
    ],
    symptoms: ['Fever', 'Chills', 'Cough', 'Muscle aches']
  },
  {
    id: '3',
    type: 'drowning',
    title: 'Strong Rip Currents',
    description: 'Dangerous rip currents reported along this beach section',
    severity: 'critical',
    location: {
      latitude: 37.7849,
      longitude: -122.5094,
      address: 'Ocean Beach, San Francisco'
    },
    distance: 420,
    lastUpdated: '2025-01-27T11:00:00Z',
    prevention: [
      'Swim only in designated safe areas',
      'Stay close to lifeguards',
      'Never swim alone',
      'Check current conditions before entering water'
    ],
    emergencyContacts: ['911', 'Coast Guard: 1-800-542-8657']
  },
  {
    id: '4',
    type: 'wildlife',
    title: 'Mountain Lion Activity',
    description: 'Increased mountain lion sightings reported in hiking areas',
    severity: 'medium',
    location: {
      latitude: 37.8049,
      longitude: -122.4394,
      address: 'Presidio Trails, San Francisco'
    },
    distance: 650,
    lastUpdated: '2025-01-27T08:45:00Z',
    prevention: [
      'Make noise while hiking',
      'Travel in groups',
      'Keep children close',
      'Do not run if you encounter wildlife'
    ]
  },
  {
    id: '5',
    type: 'disease',
    title: 'Mosquito-Borne Illness',
    description: 'West Nile Virus detected in local mosquito population',
    severity: 'low',
    location: {
      latitude: 37.7649,
      longitude: -122.4294,
      address: 'Mission District, San Francisco'
    },
    distance: 800,
    lastUpdated: '2025-01-27T07:30:00Z',
    prevention: [
      'Use insect repellent',
      'Wear long sleeves and pants at dawn/dusk',
      'Remove standing water around accommodation',
      'Use window screens'
    ],
    symptoms: ['Fever', 'Headache', 'Body aches', 'Skin rash']
  }
];