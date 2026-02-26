import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafetyGuide } from '@/types';
import { Shield, ChevronRight } from 'lucide-react-native';

interface SafetyGuideCardProps {
  guide: SafetyGuide;
  onPress?: () => void;
}

export default function SafetyGuideCard({ guide, onPress }: SafetyGuideCardProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Shield size={20} color="#3B82F6" strokeWidth={2} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.category}>{guide.category}</Text>
          <Text style={styles.title}>{guide.title}</Text>
        </View>
        <ChevronRight size={20} color="#9CA3AF" />
      </View>
      
      <Text style={styles.content} numberOfLines={2}>
        {guide.content}
      </Text>
      
      <View style={styles.footer}>
        <Text style={styles.tipsCount}>
          {guide.tips.length} prevention tips
        </Text>
        <Text style={styles.emergencyCount}>
          {guide.emergency_actions.length} emergency actions
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
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
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EBF8FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  category: {
    fontSize: 12,
    fontWeight: '600',
    color: '#3B82F6',
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  content: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tipsCount: {
    fontSize: 12,
    color: '#10B981',
    fontWeight: '600',
  },
  emergencyCount: {
    fontSize: 12,
    color: '#EF4444',
    fontWeight: '600',
  },
});