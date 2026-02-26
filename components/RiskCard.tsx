import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Risk } from '@/types';
import { TriangleAlert as AlertTriangle, Droplets, Bug, Waves, Zap } from 'lucide-react-native';

interface RiskCardProps {
  risk: Risk;
  onPress?: () => void;
}

const getRiskIcon = (type: Risk['type']) => {
  const iconProps = { size: 20, strokeWidth: 2 };
  
  switch (type) {
    case 'water_contamination':
      return <Droplets {...iconProps} color="#3B82F6" />;
    case 'parasite':
      return <Bug {...iconProps} color="#F59E0B" />;
    case 'drowning':
      return <Waves {...iconProps} color="#06B6D4" />;
    case 'wildlife':
      return <Zap {...iconProps} color="#8B5CF6" />;
    default:
      return <AlertTriangle {...iconProps} color="#EF4444" />;
  }
};

const getSeverityColor = (severity: Risk['severity']) => {
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

const getSeverityBackground = (severity: Risk['severity']) => {
  switch (severity) {
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

export default function RiskCard({ risk, onPress }: RiskCardProps) {
  const severityColor = getSeverityColor(risk.severity);
  const backgroundColor = getSeverityBackground(risk.severity);

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          {getRiskIcon(risk.type)}
        </View>
        <View style={styles.headerText}>
          <Text style={styles.title}>{risk.title}</Text>
          <Text style={styles.location}>{risk.location.address}</Text>
        </View>
        <View style={[styles.severityBadge, { backgroundColor: severityColor }]}>
          <Text style={styles.severityText}>{risk.severity.toUpperCase()}</Text>
        </View>
      </View>
      
      <Text style={styles.description}>{risk.description}</Text>
      
      <View style={styles.footer}>
        <Text style={styles.distance}>{risk.distance}m away</Text>
        <Text style={styles.updated}>
          Updated {new Date(risk.lastUpdated).toLocaleTimeString()}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    padding: 16,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  headerText: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 2,
  },
  location: {
    fontSize: 14,
    color: '#6B7280',
  },
  severityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  severityText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  description: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  distance: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6B7280',
  },
  updated: {
    fontSize: 12,
    color: '#9CA3AF',
  },
});