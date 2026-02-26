import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  RefreshControl, 
  TouchableOpacity,
  Alert,
  Platform
} from 'react-native';
import { useLocation } from '@/hooks/useLocation';
import { mockRisks } from '@/data/mockRisks';
import { Risk } from '@/types';
import { calculateDistance } from '@/utils/distance';
import LocationStatus from '@/components/LocationStatus';
import RiskCard from '@/components/RiskCard';
import { RefreshCw, CircleAlert as AlertCircle, MapPin, List, Map } from 'lucide-react-native';

export default function MapTab() {
  const { location, isLoading, error, refetch } = useLocation();
  const [nearbyRisks, setNearbyRisks] = useState<Risk[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [viewMode, setViewMode] = useState<'map' | 'list'>('list');
  const [locationName, setLocationName] = useState<string>('');

  // Calculate nearby risks when location changes
  useEffect(() => {
    if (location) {
      try {
        const risksWithDistance = mockRisks.map(risk => ({
          ...risk,
          distance: Math.round(calculateDistance(
            location.latitude,
            location.longitude,
            risk.location.latitude,
            risk.location.longitude
          ))
        })).sort((a, b) => a.distance - b.distance);

        setNearbyRisks(risksWithDistance);
        
        // Reverse geocode to get location name
        reverseGeocode(location.latitude, location.longitude);
      } catch (err) {
        console.error('Error calculating distances:', err);
      }
    }
  }, [location]);

  const reverseGeocode = async (lat: number, lon: number) => {
    try {
      // Using a simple approach to determine location based on coordinates
      // For San Francisco area (demo purposes)
      if (lat >= 37.7 && lat <= 37.8 && lon >= -122.6 && lon <= -122.3) {
        setLocationName('San Francisco, California, USA');
      } else {
        // Fallback to coordinates if we can't determine the location
        setLocationName(`${lat.toFixed(4)}, ${lon.toFixed(4)}`);
      }
    } catch (err) {
      console.error('Error reverse geocoding:', err);
      setLocationName('Unknown Location');
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      await refetch();
    } catch (err) {
      console.error('Error refreshing:', err);
    } finally {
      setRefreshing(false);
    }
  };

  const handleRiskPress = (risk: Risk) => {
    const message = `${risk.title} - ${risk.severity.toUpperCase()} RISK\n\n${risk.description}\n\nDistance: ${risk.distance}m\n\nPrevention:\n${risk.prevention.join('\n• ')}`;
    
    if (Platform.OS === 'web') {
      alert(message);
    } else {
      Alert.alert(
        `${risk.title} - ${risk.severity.toUpperCase()} RISK`,
        `${risk.description}\n\nDistance: ${risk.distance}m\n\nPrevention:\n${risk.prevention.join('\n• ')}`,
        [
          { text: 'Got it', style: 'default' },
          { text: 'Get Directions', style: 'default' },
        ]
      );
    }
  };

  const criticalRisks = nearbyRisks.filter(risk => 
    risk.severity === 'critical' && risk.distance < 1000
  );

  const highRisks = nearbyRisks.filter(risk => 
    risk.severity === 'high' && risk.distance < 2000
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>TripGuard</Text>
          <Text style={styles.headerSubtitle}>Stay safe while traveling</Text>
        </View>
        <View style={styles.headerControls}>
          <TouchableOpacity onPress={refetch} style={styles.refreshButton}>
            <RefreshCw size={20} color="#3B82F6" />
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => setViewMode(viewMode === 'map' ? 'list' : 'map')} 
            style={styles.viewToggle}
          >
            {viewMode === 'map' ? (
              <List size={20} color="#3B82F6" />
            ) : (
              <Map size={20} color="#3B82F6" />
            )}
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView 
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {/* Current Location Display */}
        <View style={styles.locationCard}>
          <View style={styles.locationHeader}>
            <MapPin size={24} color="#3B82F6" />
            <Text style={styles.locationTitle}>Current Location</Text>
          </View>
          
          {isLoading ? (
            <Text style={styles.locationText}>Detecting your location...</Text>
          ) : error ? (
            <View style={styles.errorContainer}>
              <AlertCircle size={16} color="#EF4444" />
              <Text style={styles.errorText}>{error}</Text>
            </View>
          ) : locationName ? (
            <Text style={styles.locationText}>{locationName}</Text>
          ) : (
            <Text style={styles.locationText}>Location not available</Text>
          )}
          
          {location && (
            <Text style={styles.coordinatesText}>
              {location.latitude.toFixed(6)}, {location.longitude.toFixed(6)}
            </Text>
          )}
        </View>

        {/* Location Status */}
        <LocationStatus 
          isLocationEnabled={!!location && !error}
          accuracy={location?.accuracy}
          address={locationName || undefined}
        />

        {/* Critical Alerts */}
        {criticalRisks.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <AlertCircle size={20} color="#DC2626" />
              <Text style={styles.sectionTitle}>Critical Alerts</Text>
            </View>
            {criticalRisks.map(risk => (
              <RiskCard 
                key={risk.id} 
                risk={risk} 
                onPress={() => handleRiskPress(risk)}
              />
            ))}
          </View>
        )}

        {/* High Priority Risks */}
        {highRisks.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <AlertCircle size={20} color="#EF4444" />
              <Text style={styles.sectionTitle}>High Priority Risks</Text>
            </View>
            {highRisks.map(risk => (
              <RiskCard 
                key={risk.id} 
                risk={risk} 
                onPress={() => handleRiskPress(risk)}
              />
            ))}
          </View>
        )}

        {/* All Nearby Risks */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <MapPin size={20} color="#6B7280" />
            <Text style={styles.sectionTitle}>All Nearby Risks</Text>
          </View>
          {nearbyRisks.length > 0 ? (
            nearbyRisks.map(risk => (
              <RiskCard 
                key={risk.id} 
                risk={risk} 
                onPress={() => handleRiskPress(risk)}
              />
            ))
          ) : (
            <View style={styles.noRisksContainer}>
              <Text style={styles.noRisksText}>
                {location ? 'No risks detected in your area' : 'Enable location to see nearby risks'}
              </Text>
            </View>
          )}
        </View>

        {/* Safe Travels Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Safe travels 🌍 Your health is your first destination.</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    zIndex: 1000,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111827',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },
  headerControls: {
    flexDirection: 'row',
    gap: 8,
  },
  refreshButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
  },
  viewToggle: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  locationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  locationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  locationTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginLeft: 8,
  },
  locationText: {
    fontSize: 16,
    color: '#374151',
    fontWeight: '600',
    marginBottom: 8,
  },
  coordinatesText: {
    fontSize: 14,
    color: '#6B7280',
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  errorText: {
    fontSize: 14,
    color: '#EF4444',
    flex: 1,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginLeft: 8,
  },
  noRisksContainer: {
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  noRisksText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
  footer: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});