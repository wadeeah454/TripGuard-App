import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DiseasePrediction } from '@/types';
import { 
  TriangleAlert as AlertTriangle, 
  TrendingUp, 
  Clock, 
  MapPin,
  ChevronRight,
  Activity
} from 'lucide-react-native';

interface DiseasePredictionCardProps {
  prediction: DiseasePrediction;
  onPress?: () => void;
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

const getRiskBackground = (riskLevel: DiseasePrediction['riskLevel']) => {
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

const getPercentageColor = (percentage: number) => {
  if (percentage >= 70) return '#DC2626';
  if (percentage >= 50) return '#EF4444';
  if (percentage >= 30) return '#F59E0B';
  return '#10B981';
};

export default function DiseasePredictionCard({ prediction, onPress }: DiseasePredictionCardProps) {
  const riskColor = getRiskColor(prediction.riskLevel);
  const backgroundColor = getRiskBackground(prediction.riskLevel);
  const percentageColor = getPercentageColor(prediction.riskPercentage);

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.countryInfo}>
          <Text style={styles.countryFlag}>{prediction.countryFlag}</Text>
          <View style={styles.countryDetails}>
            <Text style={styles.countryName}>{prediction.countryName}</Text>
            <Text style={styles.diseaseName}>{prediction.diseaseName}</Text>
          </View>
        </View>
        <View style={styles.riskIndicator}>
          <View style={[styles.riskBadge, { backgroundColor: riskColor }]}>
            <AlertTriangle size={12} color="#FFFFFF" />
            <Text style={styles.riskText}>{prediction.riskLevel.toUpperCase()}</Text>
          </View>
          <ChevronRight size={20} color="#9CA3AF" />
        </View>
      </View>

      {/* Risk Percentage */}
      <View style={styles.percentageSection}>
        <View style={styles.percentageContainer}>
          <Text style={[styles.percentage, { color: percentageColor }]}>
            {prediction.riskPercentage}%
          </Text>
          <View style={styles.percentageBar}>
            <View 
              style={[
                styles.percentageFill, 
                { 
                  width: `${prediction.riskPercentage}%`,
                  backgroundColor: percentageColor 
                }
              ]} 
            />
          </View>
        </View>
        <View style={styles.riskLabel}>
          <TrendingUp size={14} color={percentageColor} />
          <Text style={[styles.riskLabelText, { color: percentageColor }]}>
            Outbreak Risk
          </Text>
        </View>
      </View>

      {/* Description */}
      <Text style={styles.description} numberOfLines={2}>
        {prediction.description}
      </Text>

      {/* Footer Info */}
      <View style={styles.footer}>
        <View style={styles.timeframe}>
          <Clock size={14} color="#6B7280" />
          <Text style={styles.timeframeText}>{prediction.timeframe}</Text>
        </View>
        <View style={styles.regions}>
          <MapPin size={14} color="#6B7280" />
          <Text style={styles.regionsText}>
            {prediction.affectedRegions.length} regions affected
          </Text>
        </View>
      </View>

      {/* Peak Risk Period */}
      <View style={styles.peakRiskContainer}>
        <Activity size={14} color="#8B5CF6" />
        <Text style={styles.peakRiskText}>
          Peak Risk: {prediction.peakRiskPeriod}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 20,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  countryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  countryFlag: {
    fontSize: 28,
    marginRight: 12,
  },
  countryDetails: {
    flex: 1,
  },
  countryName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 2,
  },
  diseaseName: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
  },
  riskIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  riskBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    gap: 4,
  },
  riskText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  percentageSection: {
    marginBottom: 16,
  },
  percentageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 12,
  },
  percentage: {
    fontSize: 32,
    fontWeight: '900',
    minWidth: 80,
  },
  percentageBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  percentageFill: {
    height: '100%',
    borderRadius: 4,
  },
  riskLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  riskLabelText: {
    fontSize: 14,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
    marginBottom: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  timeframe: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  timeframeText: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
  regions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  regionsText: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
  peakRiskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  peakRiskText: {
    fontSize: 12,
    color: '#8B5CF6',
    fontWeight: '600',
    fontStyle: 'italic',
  },
});