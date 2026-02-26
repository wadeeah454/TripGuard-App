import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DiseasePrediction } from '@/types';
import { TriangleAlert as AlertTriangle, X } from 'lucide-react-native';

interface HealthAlertProps {
  prediction: DiseasePrediction;
  onDismiss: () => void;
  onViewDetails: () => void;
}

export default function HealthAlert({ prediction, onDismiss, onViewDetails }: HealthAlertProps) {
  return (
    <View style={styles.container}>
      <View style={styles.alertContent}>
        <View style={styles.iconContainer}>
          <AlertTriangle size={20} color="#FFFFFF" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.alertText}>
            ⚠️ Health Alert: {prediction.diseaseName} risk in {prediction.countryName} is now {prediction.riskPercentage}%. Review prevention tips.
          </Text>
          <TouchableOpacity onPress={onViewDetails} style={styles.detailsButton}>
            <Text style={styles.detailsText}>View Details</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={onDismiss} style={styles.dismissButton}>
          <X size={18} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: '#DC2626',
    paddingTop: 60,
    paddingHorizontal: 16,
    paddingBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  alertContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  alertText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '600',
    lineHeight: 18,
    marginBottom: 6,
  },
  detailsButton: {
    alignSelf: 'flex-start',
  },
  detailsText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '700',
    textDecorationLine: 'underline',
    opacity: 0.9,
  },
  dismissButton: {
    padding: 4,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
});