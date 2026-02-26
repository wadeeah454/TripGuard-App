export interface Risk {
  id: string;
  type: 'water_contamination' | 'parasite' | 'drowning' | 'wildlife' | 'disease' | 'environmental';
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  distance: number; // in meters
  lastUpdated: string;
  prevention: string[];
  symptoms?: string[];
  emergencyContacts?: string[];
}

export interface UserLocation {
  latitude: number;
  longitude: number;
  accuracy: number;
}

export interface SafetyGuide {
  id: string;
  category: string;
  title: string;
  content: string;
  tips: string[];
  emergency_actions: string[];
}

export interface CountryHazard {
  id: string;
  name: string;
  flag: string;
  region: string;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  lastUpdated: string;
  healthHazards: Hazard[];
  environmentalHazards: Hazard[];
  travelTips: string[];
  emergencyNumbers: {
    [key: string]: string;
  };
}

export interface Hazard {
  id: string;
  type: 'disease' | 'contamination' | 'pollution' | 'natural_disaster' | 'climate' | 'wildlife';
  title: string;
  description: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  prevalence: 'rare' | 'low' | 'moderate' | 'common' | 'very common';
  seasonality: string;
  prevention: string[];
  symptoms: string[];
  treatment: string;
  emergencyContacts: string[];
}

export interface DiseasePrediction {
  id: string;
  countryId: string;
  countryName: string;
  countryFlag: string;
  diseaseName: string;
  riskPercentage: number;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  timeframe: string;
  lastUpdated: string;
  description: string;
  factors: string[];
  prevention: string[];
  symptoms: string[];
  emergencyContacts: string[];
  affectedRegions: string[];
  peakRiskPeriod: string;
}