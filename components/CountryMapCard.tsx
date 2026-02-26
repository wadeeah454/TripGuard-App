import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { CountryHazard } from '@/types';
import { MapPin, Globe, Shield, Activity } from 'lucide-react-native';

interface CountryMapCardProps {
  country: CountryHazard;
}

const { width } = Dimensions.get('window');

const getRiskLevelColor = (riskLevel: string) => {
  switch (riskLevel) {
    case 'low':
      return '#10B981';
    case 'medium':
      return '#F59E0B';
    case 'high':
      return '#EF4444';
    case 'critical':
      return '#DC2626';
    default:
      return '#6B7280';
  }
};

const getRiskLevelBackground = (riskLevel: string) => {
  switch (riskLevel) {
    case 'low':
      return '#ECFDF5';
    case 'medium':
      return '#FFFBEB';
    case 'high':
      return '#FEF2F2';
    case 'critical':
      return '#FEF2F2';
    default:
      return '#F9FAFB';
  }
};

// Map images - using Pexels URLs for country maps
const getMapImageSource = (countryName: string) => {
  const mapImages: { [key: string]: any } = {
    'Thailand': { uri: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800' },
    'Norway': { uri: 'https://images.pexels.com/photos/1559821/pexels-photo-1559821.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800' },
    'South Africa': { uri: 'https://images.pexels.com/photos/259447/pexels-photo-259447.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800' },
    'Argentina': { uri: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800' },
    'India': { uri: 'https://images.pexels.com/photos/1603650/pexels-photo-1603650.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800' },
    'Italy': { uri: 'https://images.pexels.com/photos/2064827/pexels-photo-2064827.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800' },
  };

  return mapImages[countryName] || { uri: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800' };
};

export default function CountryMapCard({ country }: CountryMapCardProps) {
  const riskColor = getRiskLevelColor(country.riskLevel);
  const backgroundColor = getRiskLevelBackground(country.riskLevel);
  const mapImageSource = getMapImageSource(country.name);

  return (
    <View style={styles.container}>
      {/* Map Image */}
      <View style={styles.mapContainer}>
        <Image 
          source={mapImageSource}
          style={styles.mapImage}
          resizeMode="cover"
        />
        
        {/* Map Overlay */}
        <View style={styles.mapOverlay}>
          <View style={styles.locationBadge}>
            <MapPin size={14} color="#FFFFFF" />
            <Text style={styles.locationText}>{country.name}</Text>
          </View>
          <View style={[styles.riskBadge, { backgroundColor: riskColor }]}>
            <Text style={styles.riskBadgeText}>{country.riskLevel.toUpperCase()} RISK</Text>
          </View>
        </View>
        
        {/* Gradient Overlay for Better Text Readability */}
        <View style={styles.gradientOverlay} />
      </View>

      {/* Country Information Card */}
      <View style={[styles.infoCard, { backgroundColor }]}>
        {/* Header */}
        <View style={styles.cardHeader}>
          <View style={styles.countryInfo}>
            <Text style={styles.countryFlag}>{country.flag}</Text>
            <View style={styles.countryDetails}>
              <Text style={styles.countryName}>{country.name}</Text>
              <Text style={styles.countryRegion}>{country.region}</Text>
            </View>
          </View>
          <View style={styles.riskIndicator}>
            <Globe size={16} color={riskColor} />
            <Text style={[styles.riskLevel, { color: riskColor }]}>
              {country.riskLevel.toUpperCase()}
            </Text>
          </View>
        </View>

        {/* Risk Summary */}
        <View style={styles.riskSummary}>
          <View style={styles.riskItem}>
            <Shield size={16} color="#3B82F6" />
            <Text style={styles.riskText}>
              {country.healthHazards.length} Health Risks
            </Text>
          </View>
          <View style={styles.riskItem}>
            <Activity size={16} color="#F59E0B" />
            <Text style={styles.riskText}>
              {country.environmentalHazards.length} Environmental Risks
            </Text>
          </View>
        </View>

        {/* Last Updated */}
        <View style={styles.footer}>
          <Text style={styles.lastUpdated}>
            Updated {new Date(country.lastUpdated).toLocaleDateString()}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 8,
  },
  mapContainer: {
    position: 'relative',
    height: 240,
    width: '100%',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
  mapOverlay: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 10,
  },
  locationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(59, 130, 246, 0.95)',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 24,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  locationText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  riskBadge: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  riskBadgeText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  infoCard: {
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  countryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  countryFlag: {
    fontSize: 32,
    marginRight: 16,
  },
  countryDetails: {
    flex: 1,
  },
  countryName: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 4,
  },
  countryRegion: {
    fontSize: 16,
    color: '#6B7280',
  },
  riskIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  riskLevel: {
    fontSize: 14,
    fontWeight: '700',
  },
  riskSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  riskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  riskText: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  footer: {
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  lastUpdated: {
    fontSize: 12,
    color: '#9CA3AF',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});