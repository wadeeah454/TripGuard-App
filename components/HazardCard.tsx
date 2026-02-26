import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Hazard } from '@/types';
import { Shield, Bug, Droplets, Wind, Zap, Thermometer, TriangleAlert as AlertTriangle, Activity, Snowflake } from 'lucide-react-native';

interface HazardCardProps {
  hazard: Hazard;
  onPress?: () => void;
}

const getHazardIcon = (type: Hazard['type']) => {
  const iconProps = { size: 20, strokeWidth: 2 };
  
  switch (type) {
    case 'disease':
      return <Bug {...iconProps} color="#EF4444" />;
    case 'contamination':
      return <Droplets {...iconProps} color="#3B82F6" />;
    case 'pollution':
      return <Wind {...iconProps} color="#6B7280" />;
    case 'natural_disaster':
      return <Zap {...iconProps} color="#F59E0B" />;
    case 'climate':
      return <Thermometer {...iconProps} color="#8B5CF6" />;
    case 'wildlife':
      return <Activity {...iconProps} color="#10B981" />;
    default:
      return <AlertTriangle {...iconProps} color="#EF4444" />;
  }
};

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

const getSeverityBackground = (severity: Hazard['severity']) => {
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

const getPrevalenceColor = (prevalence: Hazard['prevalence']) => {
  switch (prevalence) {
    case 'rare':
      return '#10B981';
    case 'low':
      return '#3B82F6';
    case 'moderate':
      return '#F59E0B';
    case 'common':
      return '#EF4444';
    case 'very common':
      return '#DC2626';
    default:
      return '#6B7280';
  }
};

export default function HazardCard({ hazard, onPress }: HazardCardProps) {
  const severityColor = getSeverityColor(hazard.severity);
  const backgroundColor = getSeverityBackground(hazard.severity);
  const prevalenceColor = getPrevalenceColor(hazard.prevalence);

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          {getHazardIcon(hazard.type)}
        </View>
        <View style={styles.headerText}>
          <Text style={styles.title}>{hazard.title}</Text>
          <Text style={styles.seasonality}>{hazard.seasonality}</Text>
        </View>
        <View style={styles.badges}>
          <View style={[styles.severityBadge, { backgroundColor: severityColor }]}>
            <Text style={styles.severityText}>{hazard.severity.toUpperCase()}</Text>
          </View>
          <View style={[styles.prevalenceBadge, { borderColor: prevalenceColor }]}>
            <Text style={[styles.prevalenceText, { color: prevalenceColor }]}>
              {hazard.prevalence.toUpperCase()}
            </Text>
          </View>
        </View>
      </View>
      
      <Text style={styles.description} numberOfLines={3}>
        {hazard.description}
      </Text>
      
      <View style={styles.footer}>
        <View style={styles.preventionCount}>
          <Shield size={14} color="#10B981" />
          <Text style={styles.countText}>
            {hazard.prevention.length} prevention tips
          </Text>
        </View>
        <View style={styles.symptomsCount}>
          <AlertTriangle size={14} color="#EF4444" />
          <Text style={styles.countText}>
            {hazard.symptoms.length} symptoms
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
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
    alignItems: 'flex-start',
    marginBottom: 12,
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
    marginRight: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  seasonality: {
    fontSize: 12,
    color: '#6B7280',
    fontStyle: 'italic',
  },
  badges: {
    alignItems: 'flex-end',
    gap: 4,
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
  prevalenceBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
  },
  prevalenceText: {
    fontSize: 10,
    fontWeight: '600',
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
  preventionCount: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  symptomsCount: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  countText: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
});