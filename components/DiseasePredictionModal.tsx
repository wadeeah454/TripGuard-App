import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Modal, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';
import { DiseasePrediction } from '@/types';
import { X, Shield, TriangleAlert as AlertTriangle, Activity, Phone, Clock, TrendingUp, MapPin, Calendar, ChartBar as BarChart3 } from 'lucide-react-native';

interface DiseasePredictionModalProps {
  prediction: DiseasePrediction | null;
  visible: boolean;
  onClose: () => void;
}

const getRiskColor = (riskLevel: DiseasePrediction['riskLevel']) => {
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

const getPercentageColor = (percentage: number) => {
  if (percentage >= 70) return '#DC2626';
  if (percentage >= 50) return '#EF4444';
  if (percentage >= 30) return '#F59E0B';
  return '#10B981';
};

export default function DiseasePredictionModal({ 
  prediction, 
  visible, 
  onClose 
}: DiseasePredictionModalProps) {
  if (!prediction) return null;

  const riskColor = getRiskColor(prediction.riskLevel);
  const percentageColor = getPercentageColor(prediction.riskPercentage);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View style={styles.modal}>
        <View style={styles.modalHeader}>
          <View style={styles.headerContent}>
            <View style={styles.countrySection}>
              <Text style={styles.countryFlag}>{prediction.countryFlag}</Text>
              <View style={styles.headerText}>
                <Text style={styles.modalTitle}>{prediction.diseaseName}</Text>
                <Text style={styles.modalSubtitle}>
                  {prediction.countryName} • {prediction.riskLevel.toUpperCase()} RISK
                </Text>
              </View>
            </View>
            <View style={styles.riskPercentage}>
              <Text style={[styles.percentageText, { color: percentageColor }]}>
                {prediction.riskPercentage}%
              </Text>
              <Text style={styles.percentageLabel}>Risk</Text>
            </View>
          </View>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <X size={24} color="#6B7280" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.modalContent}>
          {/* Risk Overview */}
          <View style={styles.section}>
            <View style={styles.riskOverview}>
              <View style={styles.riskBar}>
                <View 
                  style={[
                    styles.riskBarFill, 
                    { 
                      width: `${prediction.riskPercentage}%`,
                      backgroundColor: percentageColor 
                    }
                  ]} 
                />
              </View>
              <View style={styles.riskStats}>
                <View style={styles.statItem}>
                  <Clock size={16} color="#6B7280" />
                  <Text style={styles.statText}>{prediction.timeframe}</Text>
                </View>
                <View style={styles.statItem}>
                  <Calendar size={16} color="#8B5CF6" />
                  <Text style={styles.statText}>{prediction.peakRiskPeriod}</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Description */}
          <View style={styles.section}>
            <Text style={styles.description}>{prediction.description}</Text>
          </View>

          {/* Risk Factors */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <BarChart3 size={18} color="#F59E0B" />
              <Text style={styles.sectionTitle}>Contributing Risk Factors</Text>
            </View>
            {prediction.factors.map((factor, index) => (
              <View key={index} style={styles.listItem}>
                <Text style={styles.bulletOrange}>•</Text>
                <Text style={styles.listText}>{factor}</Text>
              </View>
            ))}
          </View>

          {/* Affected Regions */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <MapPin size={18} color="#3B82F6" />
              <Text style={styles.sectionTitle}>Affected Regions</Text>
            </View>
            <View style={styles.regionsContainer}>
              {prediction.affectedRegions.map((region, index) => (
                <View key={index} style={styles.regionChip}>
                  <Text style={styles.regionText}>{region}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Prevention */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Shield size={18} color="#10B981" />
              <Text style={styles.sectionTitle}>Prevention Measures</Text>
            </View>
            {prediction.prevention.map((tip, index) => (
              <View key={index} style={styles.listItem}>
                <Text style={styles.bulletGreen}>•</Text>
                <Text style={styles.listText}>{tip}</Text>
              </View>
            ))}
          </View>

          {/* Symptoms */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <AlertTriangle size={18} color="#EF4444" />
              <Text style={styles.sectionTitle}>Symptoms to Watch For</Text>
            </View>
            {prediction.symptoms.map((symptom, index) => (
              <View key={index} style={styles.listItem}>
                <Text style={styles.bulletRed}>•</Text>
                <Text style={styles.listText}>{symptom}</Text>
              </View>
            ))}
          </View>

          {/* Emergency Contacts */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Phone size={18} color="#DC2626" />
              <Text style={styles.sectionTitle}>Emergency Contacts</Text>
            </View>
            {prediction.emergencyContacts.map((contact, index) => (
              <View key={index} style={styles.emergencyItem}>
                <Text style={styles.emergencyText}>{contact}</Text>
              </View>
            ))}
          </View>

          {/* Last Updated */}
          <View style={styles.section}>
            <Text style={styles.lastUpdated}>
              Last updated: {new Date(prediction.lastUpdated).toLocaleString()}
            </Text>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerContent: {
    flex: 1,
    marginRight: 16,
  },
  countrySection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  countryFlag: {
    fontSize: 32,
    marginRight: 12,
  },
  headerText: {
    flex: 1,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 4,
  },
  modalSubtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  riskPercentage: {
    alignItems: 'center',
    marginTop: 8,
  },
  percentageText: {
    fontSize: 36,
    fontWeight: '900',
  },
  percentageLabel: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  closeButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
  },
  modalContent: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 24,
  },
  riskOverview: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  riskBar: {
    height: 12,
    backgroundColor: '#E5E7EB',
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 16,
  },
  riskBarFill: {
    height: '100%',
    borderRadius: 6,
  },
  riskStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statText: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
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
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#374151',
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 8,
    paddingLeft: 8,
  },
  bulletGreen: {
    fontSize: 16,
    color: '#10B981',
    fontWeight: '700',
    marginRight: 8,
    width: 16,
  },
  bulletRed: {
    fontSize: 16,
    color: '#EF4444',
    fontWeight: '700',
    marginRight: 8,
    width: 16,
  },
  bulletOrange: {
    fontSize: 16,
    color: '#F59E0B',
    fontWeight: '700',
    marginRight: 8,
    width: 16,
  },
  listText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#374151',
    flex: 1,
  },
  regionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  regionChip: {
    backgroundColor: '#EBF8FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#BFDBFE',
  },
  regionText: {
    fontSize: 14,
    color: '#1D4ED8',
    fontWeight: '600',
  },
  emergencyItem: {
    backgroundColor: '#FEF2F2',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#EF4444',
  },
  emergencyText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#DC2626',
  },
  lastUpdated: {
    fontSize: 12,
    color: '#9CA3AF',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});