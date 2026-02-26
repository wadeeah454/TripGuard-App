import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Modal, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';
import { Hazard } from '@/types';
import { X, Shield, TriangleAlert as AlertTriangle, Activity, Phone, Clock, TrendingUp } from 'lucide-react-native';

interface HazardDetailModalProps {
  hazard: Hazard | null;
  visible: boolean;
  onClose: () => void;
}

const getSeverityColor = (severity: Hazard['severity']) => {
  switch (severity) {
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

export default function HazardDetailModal({ 
  hazard, 
  visible, 
  onClose 
}: HazardDetailModalProps) {
  if (!hazard) return null;

  const severityColor = getSeverityColor(hazard.severity);

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
            <View style={[styles.severityIndicator, { backgroundColor: severityColor }]} />
            <View style={styles.headerText}>
              <Text style={styles.modalTitle}>{hazard.title}</Text>
              <Text style={styles.modalSubtitle}>
                {hazard.severity.toUpperCase()} RISK • {hazard.prevalence.toUpperCase()}
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <X size={24} color="#6B7280" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.modalContent}>
          {/* Description */}
          <View style={styles.section}>
            <Text style={styles.description}>{hazard.description}</Text>
          </View>

          {/* Seasonality */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Clock size={18} color="#3B82F6" />
              <Text style={styles.sectionTitle}>Seasonality & Timing</Text>
            </View>
            <Text style={styles.sectionContent}>{hazard.seasonality}</Text>
          </View>

          {/* Prevalence */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <TrendingUp size={18} color="#F59E0B" />
              <Text style={styles.sectionTitle}>Risk Level</Text>
            </View>
            <Text style={styles.sectionContent}>
              This hazard is <Text style={styles.highlight}>{hazard.prevalence}</Text> in the region, 
              with a <Text style={[styles.highlight, { color: severityColor }]}>{hazard.severity}</Text> severity rating.
            </Text>
          </View>

          {/* Prevention */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Shield size={18} color="#10B981" />
              <Text style={styles.sectionTitle}>Prevention Measures</Text>
            </View>
            {hazard.prevention.map((tip, index) => (
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
            {hazard.symptoms.map((symptom, index) => (
              <View key={index} style={styles.listItem}>
                <Text style={styles.bulletRed}>•</Text>
                <Text style={styles.listText}>{symptom}</Text>
              </View>
            ))}
          </View>

          {/* Treatment */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Activity size={18} color="#8B5CF6" />
              <Text style={styles.sectionTitle}>Treatment & Response</Text>
            </View>
            <Text style={styles.sectionContent}>{hazard.treatment}</Text>
          </View>

          {/* Emergency Contacts */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Phone size={18} color="#DC2626" />
              <Text style={styles.sectionTitle}>Emergency Contacts</Text>
            </View>
            {hazard.emergencyContacts.map((contact, index) => (
              <View key={index} style={styles.emergencyItem}>
                <Text style={styles.emergencyText}>{contact}</Text>
              </View>
            ))}
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
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  severityIndicator: {
    width: 4,
    height: 40,
    borderRadius: 2,
    marginRight: 12,
  },
  headerText: {
    flex: 1,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 4,
  },
  modalSubtitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
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
  sectionContent: {
    fontSize: 16,
    lineHeight: 24,
    color: '#374151',
  },
  highlight: {
    fontWeight: '700',
    color: '#111827',
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
  listText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#374151',
    flex: 1,
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
});