import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MapPin, Wifi, WifiOff } from 'lucide-react-native';

interface LocationStatusProps {
  isLocationEnabled: boolean;
  accuracy?: number;
  address?: string;
}

export default function LocationStatus({ 
  isLocationEnabled, 
  accuracy, 
  address 
}: LocationStatusProps) {
  return (
    <View style={styles.container}>
      <View style={styles.statusRow}>
        <View style={styles.locationInfo}>
          <MapPin size={16} color={isLocationEnabled ? '#10B981' : '#EF4444'} />
          <Text style={[
            styles.statusText,
            { color: isLocationEnabled ? '#10B981' : '#EF4444' }
          ]}>
            {isLocationEnabled ? 'Location Active' : 'Location Disabled'}
          </Text>
        </View>
        
        <View style={styles.connectionInfo}>
          {isLocationEnabled ? (
            <Wifi size={16} color="#10B981" />
          ) : (
            <WifiOff size={16} color="#EF4444" />
          )}
        </View>
      </View>
      
      {isLocationEnabled && address && (
        <Text style={styles.address}>{address}</Text>
      )}
      
      {isLocationEnabled && accuracy && (
        <Text style={styles.accuracy}>
          Accuracy: ±{Math.round(accuracy)}m
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  locationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 6,
  },
  connectionInfo: {
    opacity: 0.7,
  },
  address: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  accuracy: {
    fontSize: 11,
    color: '#9CA3AF',
    marginTop: 2,
  },
});