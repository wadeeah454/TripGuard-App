import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Modal, 
  ScrollView,
  Dimensions 
} from 'react-native';
import { CountryHazard } from '@/types';
import { ChevronDown, Globe, MapPin, Shield, TriangleAlert as AlertTriangle } from 'lucide-react-native';

interface CountrySelectorProps {
  countries: CountryHazard[];
  selectedCountry: CountryHazard | null;
  onSelectCountry: (country: CountryHazard) => void;
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

export default function CountrySelector({ 
  countries, 
  selectedCountry, 
  onSelectCountry 
}: CountrySelectorProps) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelectCountry = (country: CountryHazard) => {
    onSelectCountry(country);
    setModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.selector}
        onPress={() => setModalVisible(true)}
        activeOpacity={0.7}
      >
        <View style={styles.selectorContent}>
          <View style={styles.selectorLeft}>
            <View style={styles.iconContainer}>
              <Globe size={20} color="#3B82F6" />
            </View>
            <View style={styles.selectorText}>
              <Text style={styles.selectorLabel}>Select Country</Text>
              <Text style={styles.selectorValue}>
                {selectedCountry ? (
                  `${selectedCountry.flag} ${selectedCountry.name}`
                ) : (
                  'Choose a destination'
                )}
              </Text>
            </View>
          </View>
          <ChevronDown size={20} color="#9CA3AF" />
        </View>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modal}>
          <View style={styles.modalHeader}>
            <View>
              <Text style={styles.modalTitle}>Select Country</Text>
              <Text style={styles.modalSubtitle}>Choose a destination to view health & environmental risks</Text>
            </View>
            <TouchableOpacity 
              onPress={() => setModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeButtonText}>Done</Text>
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.modalContent}>
            {countries.map((country) => (
              <TouchableOpacity
                key={country.id}
                style={[
                  styles.countryItem,
                  selectedCountry?.id === country.id && styles.selectedCountryItem
                ]}
                onPress={() => handleSelectCountry(country)}
                activeOpacity={0.7}
              >
                <View style={styles.countryHeader}>
                  <View style={styles.countryInfo}>
                    <Text style={styles.countryFlag}>{country.flag}</Text>
                    <View style={styles.countryDetails}>
                      <Text style={styles.countryName}>{country.name}</Text>
                      <Text style={styles.countryRegion}>{country.region}</Text>
                    </View>
                  </View>
                  <View style={[
                    styles.riskBadge,
                    { backgroundColor: getRiskLevelBackground(country.riskLevel) }
                  ]}>
                    <Text style={[
                      styles.riskBadgeText,
                      { color: getRiskLevelColor(country.riskLevel) }
                    ]}>
                      {country.riskLevel.toUpperCase()} RISK
                    </Text>
                  </View>
                </View>

                <View style={styles.hazardSummary}>
                  <View style={styles.hazardCount}>
                    <Shield size={14} color="#3B82F6" />
                    <Text style={styles.hazardCountText}>
                      {country.healthHazards.length} Health Risks
                    </Text>
                  </View>
                  <View style={styles.hazardCount}>
                    <AlertTriangle size={14} color="#F59E0B" />
                    <Text style={styles.hazardCountText}>
                      {country.environmentalHazards.length} Environmental Risks
                    </Text>
                  </View>
                </View>

                <Text style={styles.lastUpdated}>
                  Updated {new Date(country.lastUpdated).toLocaleDateString()}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  selector: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectorContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  selectorLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EBF8FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  selectorText: {
    flex: 1,
  },
  selectorLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 2,
  },
  selectorValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  modal: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111827',
  },
  modalSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  closeButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#3B82F6',
    borderRadius: 8,
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  modalContent: {
    flex: 1,
    padding: 20,
  },
  countryItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  selectedCountryItem: {
    borderColor: '#3B82F6',
    backgroundColor: '#F8FAFF',
  },
  countryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  countryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  countryFlag: {
    fontSize: 32,
    marginRight: 12,
  },
  countryDetails: {
    flex: 1,
  },
  countryName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 2,
  },
  countryRegion: {
    fontSize: 14,
    color: '#6B7280',
  },
  riskBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  riskBadgeText: {
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
  hazardSummary: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 8,
  },
  hazardCount: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  hazardCountText: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  lastUpdated: {
    fontSize: 12,
    color: '#9CA3AF',
    fontStyle: 'italic',
  },
});