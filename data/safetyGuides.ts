import { SafetyGuide } from '@/types';

export const safetyGuides: SafetyGuide[] = [
  {
    id: '1',
    category: 'Water Safety',
    title: 'Safe Drinking Water Practices',
    content: 'When traveling, contaminated water is one of the most common health risks. Follow these guidelines to ensure safe drinking water.',
    tips: [
      'Always drink bottled water from sealed containers',
      'Boil water for at least 3 minutes if bottled water unavailable',
      'Use water purification tablets or UV sterilizers',
      'Avoid ice cubes unless made from safe water',
      'Brush teeth with bottled or purified water',
      'Avoid raw fruits and vegetables washed in local water'
    ],
    emergency_actions: [
      'If you suspect water contamination, stop drinking immediately',
      'Seek medical attention if experiencing severe symptoms',
      'Contact local health authorities to report contamination',
      'Keep hydrated with safe water sources only'
    ]
  },
  {
    id: '2',
    category: 'Swimming Safety',
    title: 'Freshwater Swimming Precautions',
    content: 'Freshwater bodies can harbor parasites and dangerous bacteria. Take these precautions before swimming.',
    tips: [
      'Research local water conditions before swimming',
      'Avoid swimming in stagnant or slow-moving water',
      'Do not swim with open wounds',
      'Shower immediately after swimming',
      'Dry off completely with a clean towel',
      'Avoid swallowing water while swimming'
    ],
    emergency_actions: [
      'Exit water immediately if you feel unwell',
      'Seek medical attention for persistent symptoms',
      'Report unusual water conditions to authorities',
      'Monitor for symptoms up to 2 weeks after exposure'
    ]
  },
  {
    id: '3',
    category: 'Ocean Safety',
    title: 'Rip Current Survival',
    content: 'Rip currents are powerful channels of water that can quickly pull swimmers away from shore. Knowing how to escape can save your life.',
    tips: [
      'Learn to identify rip currents before entering water',
      'Always swim near lifeguards when available',
      'Never swim alone',
      'Check local surf and weather conditions',
      'Stay calm if caught in a rip current',
      'Swim parallel to shore to escape the current'
    ],
    emergency_actions: [
      'Do not panic if caught in a rip current',
      'Do not try to swim directly back to shore',
      'Swim parallel to shore until out of current',
      'Once free, swim at an angle back to shore',
      'If unable to swim out, float and call for help',
      'Wave and shout to attract attention'
    ]
  },
  {
    id: '4',
    category: 'Wildlife Encounters',
    title: 'Large Predator Safety',
    content: 'Encounters with large predators like mountain lions or bears require specific responses. Being prepared can prevent dangerous situations.',
    tips: [
      'Make noise while hiking to avoid surprising wildlife',
      'Travel in groups when possible',
      'Keep food properly stored and scented items sealed',
      'Carry bear spray in appropriate areas',
      'Know the difference between defensive and predatory behavior',
      'Keep children close and pets on leash'
    ],
    emergency_actions: [
      'Do not run from large predators',
      'Make yourself appear large by raising arms',
      'Maintain eye contact but avoid staring',
      'Back away slowly while facing the animal',
      'Make loud noises to try to scare the animal',
      'Fight back if attacked by a mountain lion'
    ]
  },
  {
    id: '5',
    category: 'Disease Prevention',
    title: 'Vector-Borne Disease Protection',
    content: 'Mosquitoes, ticks, and other insects can transmit serious diseases. Protect yourself with proper prevention measures.',
    tips: [
      'Use EPA-registered insect repellents',
      'Wear long sleeves and pants during peak biting times',
      'Choose light-colored clothing',
      'Stay in air-conditioned or screened areas when possible',
      'Remove standing water around your accommodation',
      'Check for ticks after outdoor activities'
    ],
    emergency_actions: [
      'Remove ticks promptly with fine-tipped tweezers',
      'Clean bite areas with rubbing alcohol',
      'Monitor for symptoms of vector-borne diseases',
      'Seek medical attention for fever or rash after bites',
      'Keep a record of when and where bites occurred',
      'Contact healthcare provider about preventive medications'
    ]
  }
];