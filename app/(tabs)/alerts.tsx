import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  Alert,
  Platform
} from 'react-native';
import { mockRisks } from '@/data/mockRisks';
import { countryHazards } from '@/data/countryHazards';
import { diseasePredictions } from '@/data/diseasePredictions';
import { Risk, CountryHazard, Hazard, DiseasePrediction } from '@/types';
import RiskCard from '@/components/RiskCard';
import CountrySelector from '@/components/CountrySelector';
import CountryMapCard from '@/components/CountryMapCard';
import HazardCard from '@/components/HazardCard';
import HazardDetailModal from '@/components/HazardDetailModal';
import DiseasePredictionCard from '@/components/DiseasePredictionCard';
import DiseasePredictionModal from '@/components/DiseasePredictionModal';
import HealthAlert from '@/components/HealthAlert';
import { TriangleAlert as AlertTriangle, Filter, Bell, BellOff, Globe, Shield, Activity, TrendingUp, ChartBar as BarChart3 } from 'lucide-react-native';

export default function AlertsTab() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | Risk['severity']>('all');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState<CountryHazard | null>(null);
  const [selectedHazard, setSelectedHazard] = useState<Hazard | null>(null);
  const [selectedPrediction, setSelectedPrediction] = useState<DiseasePrediction | null>(null);
  const [hazardModalVisible, setHazardModalVisible] = useState(false);
  const [predictionModalVisible, setPredictionModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'local' | 'country' | 'predictions'>('predictions');
  const [dismissedAlerts, setDismissedAlerts] = useState<string[]>([]);

  const filteredRisks = selectedFilter === 'all' 
    ? mockRisks 
    : mockRisks.filter(risk => risk.severity === selectedFilter);

  const countryPredictions = selectedCountry 
    ? diseasePredictions.filter(p => p.countryId === selectedCountry.id)
    : [];

  // Get high-risk predictions for alerts (>70% and not dismissed)
  const highRiskPredictions = diseasePredictions.filter(
    p => p.riskPercentage > 70 && !dismissedAlerts.includes(p.id)
  );

  // Get primary prediction for selected country or default to Thailand
  const primaryPrediction = selectedCountry 
    ? countryPredictions[0] 
    : diseasePredictions.find(p => p.countryId === 'thailand') || diseasePredictions[0];

  const handleRiskPress = (risk: Risk) => {
    const message = `${risk.title}\n\nSeverity: ${risk.severity.toUpperCase()}\n\n${risk.description}\n\nLocation: ${risk.location.address}\n\nPrevention measures:\n• ${risk.prevention.join('\n• ')}\n\n${risk.symptoms ? `Symptoms to watch for:\n• ${risk.symptoms.join('\n• ')}` : ''}`;
    
    if (Platform.OS === 'web') {
      alert(message);
    } else {
      Alert.alert(
        `${risk.title}`,
        message,
        [
          { text: 'Dismiss', style: 'cancel' },
          { text: 'Get Directions', style: 'default' },
          { text: 'More Info', style: 'default' },
        ]
      );
    }
  };

  const handleHazardPress = (hazard: Hazard) => {
    setSelectedHazard(hazard);
    setHazardModalVisible(true);
  };

  const handlePredictionPress = (prediction: DiseasePrediction) => {
    setSelectedPrediction(prediction);
    setPredictionModalVisible(true);
  };

  const handleAlertDismiss = (predictionId: string) => {
    setDismissedAlerts(prev => [...prev, predictionId]);
  };

  const handleAlertViewDetails = (prediction: DiseasePrediction) => {
    setSelectedPrediction(prediction);
    setPredictionModalVisible(true);
    setActiveTab('predictions');
    // Find and select the country for this prediction
    const country = countryHazards.find(c => c.id === prediction.countryId);
    if (country) {
      setSelectedCountry(country);
    }
  };

  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
    const message = `Push notifications ${!notificationsEnabled ? 'enabled' : 'disabled'}`;
    
    if (Platform.OS === 'web') {
      alert(message);
    } else {
      Alert.alert('Notifications', message, [{ text: 'OK' }]);
    }
  };

  const filterButtons = [
    { key: 'all', label: 'All', count: mockRisks.length },
    { key: 'critical', label: 'Critical', count: mockRisks.filter(r => r.severity === 'critical').length },
    { key: 'high', label: 'High', count: mockRisks.filter(r => r.severity === 'high').length },
    { key: 'medium', label: 'Medium', count: mockRisks.filter(r => r.severity === 'medium').length },
    { key: 'low', label: 'Low', count: mockRisks.filter(r => r.severity === 'low').length },
  ];

  const getTabTitle = () => {
    switch (activeTab) {
      case 'local':
        return `${filteredRisks.length} local alerts`;
      case 'country':
        return selectedCountry 
          ? `${selectedCountry.name} travel risks`
          : 'Select a country to view risks';
      case 'predictions':
        return selectedCountry
          ? `${countryPredictions.length} disease predictions`
          : 'Global disease predictions';
      default:
        return '';
    }
  };

  return (
    <View style={styles.container}>
      {/* Health Alert Banner */}
      {highRiskPredictions.length > 0 && (
        <HealthAlert
          prediction={highRiskPredictions[0]}
          onDismiss={() => handleAlertDismiss(highRiskPredictions[0].id)}
          onViewDetails={() => handleAlertViewDetails(highRiskPredictions[0])}
        />
      )}

      {/* Header */}
      <View style={[
        styles.header,
        highRiskPredictions.length > 0 && styles.headerWithAlert
      ]}>
        <View>
          <Text style={styles.headerTitle}>Risk Alerts</Text>
          <Text style={styles.headerSubtitle}>{getTabTitle()}</Text>
        </View>
        <TouchableOpacity onPress={toggleNotifications} style={styles.notificationButton}>
          {notificationsEnabled ? (
            <Bell size={20} color="#3B82F6" />
          ) : (
            <BellOff size={20} color="#6B7280" />
          )}
        </TouchableOpacity>
      </View>

      {/* Tab Selector */}
      <View style={[
        styles.tabContainer,
        highRiskPredictions.length > 0 && styles.tabContainerWithAlert
      ]}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'local' && styles.activeTab]}
          onPress={() => setActiveTab('local')}
        >
          <AlertTriangle size={16} color={activeTab === 'local' ? '#FFFFFF' : '#6B7280'} />
          <Text style={[styles.tabText, activeTab === 'local' && styles.activeTabText]}>
            Local Alerts
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'country' && styles.activeTab]}
          onPress={() => setActiveTab('country')}
        >
          <Globe size={16} color={activeTab === 'country' ? '#FFFFFF' : '#6B7280'} />
          <Text style={[styles.tabText, activeTab === 'country' && styles.activeTabText]}>
            Country Risks
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'predictions' && styles.activeTab]}
          onPress={() => setActiveTab('predictions')}
        >
          <TrendingUp size={16} color={activeTab === 'predictions' ? '#FFFFFF' : '#6B7280'} />
          <Text style={[styles.tabText, activeTab === 'predictions' && styles.activeTabText]}>
            Predictions
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'local' ? (
        <>
          {/* Filter Bar */}
          <View style={styles.filterContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.filterRow}>
                {filterButtons.map((filter) => (
                  <TouchableOpacity
                    key={filter.key}
                    style={[
                      styles.filterButton,
                      selectedFilter === filter.key && styles.activeFilterButton
                    ]}
                    onPress={() => setSelectedFilter(filter.key as any)}
                  >
                    <Text style={[
                      styles.filterText,
                      selectedFilter === filter.key && styles.activeFilterText
                    ]}>
                      {filter.label} ({filter.count})
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>

          {/* Local Alerts List */}
          <ScrollView style={styles.scrollView}>
            {filteredRisks.length > 0 ? (
              <View style={styles.alertsList}>
                {filteredRisks.map(risk => (
                  <RiskCard 
                    key={risk.id} 
                    risk={risk} 
                    onPress={() => handleRiskPress(risk)}
                  />
                ))}
              </View>
            ) : (
              <View style={styles.emptyState}>
                <AlertTriangle size={48} color="#D1D5DB" />
                <Text style={styles.emptyTitle}>No alerts</Text>
                <Text style={styles.emptyDescription}>
                  No {selectedFilter !== 'all' ? selectedFilter + ' priority ' : ''}alerts found in your area
                </Text>
              </View>
            )}

            {/* Safe Travels Footer */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>Safe travels 🌍 Your health is your first destination.</Text>
            </View>
          </ScrollView>
        </>
      ) : activeTab === 'predictions' ? (
        <ScrollView style={styles.scrollView}>
          {/* Country Selector */}
          <CountrySelector
            countries={countryHazards}
            selectedCountry={selectedCountry}
            onSelectCountry={setSelectedCountry}
          />

          {/* Country Map Card */}
          {selectedCountry && (
            <CountryMapCard country={selectedCountry} />
          )}

          {selectedCountry && countryPredictions.length > 0 && (
            <>
              {/* Disease Predictions */}
              <View style={styles.section}>
                <View style={styles.sectionHeader}>
                  <BarChart3 size={20} color="#8B5CF6" />
                  <Text style={styles.sectionTitle}>Disease Predictions</Text>
                </View>
                {countryPredictions.map(prediction => (
                  <DiseasePredictionCard 
                    key={prediction.id} 
                    prediction={prediction}
                    onPress={() => handlePredictionPress(prediction)}
                  />
                ))}
              </View>
            </>
          )}

          {!selectedCountry && (
            <>
              {/* Global Predictions Overview */}
              <View style={styles.globalOverview}>
                <View style={styles.sectionHeader}>
                  <Globe size={20} color="#3B82F6" />
                  <Text style={styles.sectionTitle}>Global Disease Predictions</Text>
                </View>
                <Text style={styles.globalDescription}>
                  AI-powered risk analysis for disease outbreaks worldwide. Select a country above to view detailed predictions and prevention measures.
                </Text>
              </View>

              {/* High Risk Countries */}
              <View style={styles.section}>
                <Text style={styles.sectionSubtitle}>High Risk Locations</Text>
                {diseasePredictions
                  .filter(p => p.riskPercentage >= 70)
                  .slice(0, 3)
                  .map(prediction => (
                    <DiseasePredictionCard 
                      key={prediction.id} 
                      prediction={prediction}
                      onPress={() => handlePredictionPress(prediction)}
                    />
                  ))}
              </View>
            </>
          )}

          {/* Safe Travels Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Safe travels 🌍 Your health is your first destination.</Text>
          </View>
        </ScrollView>
      ) : (
        <ScrollView style={styles.scrollView}>
          {/* Country Selector */}
          <CountrySelector
            countries={countryHazards}
            selectedCountry={selectedCountry}
            onSelectCountry={setSelectedCountry}
          />

          {/* Country Map Card */}
          {selectedCountry && (
            <CountryMapCard country={selectedCountry} />
          )}

          {selectedCountry && (
            <>
              {/* Health Hazards */}
              {selectedCountry.healthHazards.length > 0 && (
                <View style={styles.section}>
                  <View style={styles.sectionHeader}>
                    <Shield size={20} color="#3B82F6" />
                    <Text style={styles.sectionTitle}>Health Hazards</Text>
                  </View>
                  {selectedCountry.healthHazards.map(hazard => (
                    <HazardCard 
                      key={hazard.id} 
                      hazard={hazard} 
                      onPress={() => handleHazardPress(hazard)}
                    />
                  ))}
                </View>
              )}

              {/* Environmental Hazards */}
              {selectedCountry.environmentalHazards.length > 0 && (
                <View style={styles.section}>
                  <View style={styles.sectionHeader}>
                    <Activity size={20} color="#F59E0B" />
                    <Text style={styles.sectionTitle}>Environmental Hazards</Text>
                  </View>
                  {selectedCountry.environmentalHazards.map(hazard => (
                    <HazardCard 
                      key={hazard.id} 
                      hazard={hazard} 
                      onPress={() => handleHazardPress(hazard)}
                    />
                  ))}
                </View>
              )}

              {/* Travel Tips */}
              {selectedCountry.travelTips.length > 0 && (
                <View style={styles.section}>
                  <View style={styles.sectionHeader}>
                    <Globe size={20} color="#10B981" />
                    <Text style={styles.sectionTitle}>Travel Tips</Text>
                  </View>
                  <View style={styles.tipsContainer}>
                    {selectedCountry.travelTips.map((tip, index) => (
                      <View key={index} style={styles.tipItem}>
                        <Text style={styles.tipBullet}>•</Text>
                        <Text style={styles.tipText}>{tip}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              )}

              {/* Emergency Numbers */}
              <View style={styles.section}>
                <View style={styles.sectionHeader}>
                  <AlertTriangle size={20} color="#EF4444" />
                  <Text style={styles.sectionTitle}>Emergency Numbers</Text>
                </View>
                <View style={styles.emergencyContainer}>
                  {Object.entries(selectedCountry.emergencyNumbers).map(([key, number]) => (
                    <View key={key} style={styles.emergencyItem}>
                      <Text style={styles.emergencyLabel}>
                        {key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </Text>
                      <Text style={styles.emergencyNumber}>{number}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </>
          )}

          {/* Safe Travels Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Safe travels 🌍 Your health is your first destination.</Text>
          </View>
        </ScrollView>
      )}

      {/* Hazard Detail Modal */}
      <HazardDetailModal
        hazard={selectedHazard}
        visible={hazardModalVisible}
        onClose={() => {
          setHazardModalVisible(false);
          setSelectedHazard(null);
        }}
      />

      {/* Disease Prediction Modal */}
      <DiseasePredictionModal
        prediction={selectedPrediction}
        visible={predictionModalVisible}
        onClose={() => {
          setPredictionModalVisible(false);
          setSelectedPrediction(null);
        }}
      />
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
  },
  headerWithAlert: {
    paddingTop: 20,
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
  notificationButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  tabContainerWithAlert: {
    paddingTop: 12,
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginHorizontal: 2,
    backgroundColor: '#F3F4F6',
    gap: 6,
  },
  activeTab: {
    backgroundColor: '#3B82F6',
  },
  tabText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6B7280',
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  filterContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  filterRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 8,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  activeFilterButton: {
    backgroundColor: '#3B82F6',
    borderColor: '#3B82F6',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
  },
  activeFilterText: {
    color: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  alertsList: {
    paddingBottom: 20,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#374151',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyDescription: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    paddingHorizontal: 32,
  },
  globalOverview: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  globalDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginTop: 8,
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
  sectionSubtitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },
  tipsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  tipItem: {
    flexDirection: 'row',
    marginBottom: 8,
    paddingLeft: 8,
  },
  tipBullet: {
    fontSize: 16,
    color: '#10B981',
    fontWeight: '700',
    marginRight: 8,
    width: 16,
  },
  tipText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#374151',
    flex: 1,
  },
  emergencyContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  emergencyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  emergencyLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },
  emergencyNumber: {
    fontSize: 14,
    fontWeight: '700',
    color: '#EF4444',
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