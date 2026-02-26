import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  Switch,
  Alert,
  Platform
} from 'react-native';
import { User, Bell, MapPin, Shield, CircleHelp as HelpCircle, Settings, ChevronRight, Phone, Mail, Info } from 'lucide-react-native';

export default function ProfileTab() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(true);
  const [highRiskOnly, setHighRiskOnly] = useState(false);

  const handleToggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleToggleLocation = () => {
    setLocationEnabled(!locationEnabled);
  };

  const handleToggleHighRisk = () => {
    setHighRiskOnly(!highRiskOnly);
  };

  const handleContactSupport = () => {
    const message = 'How would you like to contact our support team?\n\nEmail: support@tripguard.com\nPhone: +1 (555) 123-4567';
    
    if (Platform.OS === 'web') {
      alert(message);
    } else {
      Alert.alert(
        'Contact Support',
        'How would you like to contact our support team?',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Email', onPress: () => Alert.alert('Email', 'support@tripguard.com') },
          { text: 'Phone', onPress: () => Alert.alert('Phone', '+1 (555) 123-4567') },
        ]
      );
    }
  };

  const handleAbout = () => {
    const message = 'TripGuard v1.0.0\n\nTripGuard helps travelers stay safe by providing real-time alerts about health and environmental risks based on your location.\n\nDeveloped with safety in mind.';
    
    if (Platform.OS === 'web') {
      alert(message);
    } else {
      Alert.alert('About TripGuard', message, [{ text: 'OK' }]);
    }
  };

  const menuItems = [
    {
      icon: Bell,
      title: 'Push Notifications',
      subtitle: 'Receive alerts for nearby risks',
      action: 'toggle',
      value: notificationsEnabled,
      onToggle: handleToggleNotifications,
    },
    {
      icon: MapPin,
      title: 'Location Services',
      subtitle: 'Allow location access for risk detection',
      action: 'toggle',
      value: locationEnabled,
      onToggle: handleToggleLocation,
    },
    {
      icon: Shield,
      title: 'High Risk Alerts Only',
      subtitle: 'Only show critical and high priority risks',
      action: 'toggle',
      value: highRiskOnly,
      onToggle: handleToggleHighRisk,
    },
    {
      icon: Phone,
      title: 'Contact Support',
      subtitle: 'Get help or report issues',
      action: 'press',
      onPress: handleContactSupport,
    },
    {
      icon: HelpCircle,
      title: 'About TripGuard',
      subtitle: 'App information and version',
      action: 'press',
      onPress: handleAbout,
    },
  ];

  const generalTravelTips = [
    {
      icon: Phone,
      title: 'Keep Emergency Contacts Handy',
      description: 'Save important numbers in your phone and write them down separately.',
      color: '#EF4444'
    },
    {
      icon: Shield,
      title: 'Carry a Small Medical Kit',
      description: 'Pack basic medications, bandages, and any prescription drugs you need.',
      color: '#10B981'
    },
    {
      icon: User,
      title: 'Register with Your Embassy Abroad',
      description: 'Register with your country\'s embassy when traveling internationally.',
      color: '#3B82F6'
    }
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Profile</Text>
          <Text style={styles.headerSubtitle}>Manage your preferences</Text>
        </View>
        <View style={styles.avatarContainer}>
          <User size={24} color="#3B82F6" />
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* User Info */}
        <View style={styles.section}>
          <View style={styles.userCard}>
            <View style={styles.userAvatar}>
              <User size={32} color="#3B82F6" />
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>Travel User</Text>
              <Text style={styles.userEmail}>user@example.com</Text>
            </View>
          </View>
        </View>

        {/* Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settings</Text>
          <View style={styles.settingsContainer}>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.settingItem,
                  index === menuItems.length - 1 && styles.lastSettingItem
                ]}
                onPress={item.action === 'press' ? item.onPress : undefined}
                activeOpacity={item.action === 'press' ? 0.7 : 1}
              >
                <View style={styles.settingLeft}>
                  <View style={styles.settingIconContainer}>
                    <item.icon size={20} color="#6B7280" />
                  </View>
                  <View style={styles.settingTextContainer}>
                    <Text style={styles.settingTitle}>{item.title}</Text>
                    <Text style={styles.settingSubtitle}>{item.subtitle}</Text>
                  </View>
                </View>
                <View style={styles.settingRight}>
                  {item.action === 'toggle' ? (
                    <Switch
                      value={item.value}
                      onValueChange={item.onToggle}
                      trackColor={{ false: '#D1D5DB', true: '#3B82F6' }}
                      thumbColor={'#FFFFFF'}
                    />
                  ) : (
                    <ChevronRight size={20} color="#9CA3AF" />
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* General Travel Tips */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Info size={20} color="#8B5CF6" />
            <Text style={styles.sectionTitle}>General Travel Tips</Text>
          </View>
          <View style={styles.tipsContainer}>
            {generalTravelTips.map((tip, index) => (
              <View key={index} style={styles.tipCard}>
                <View style={[styles.tipIconContainer, { backgroundColor: `${tip.color}15` }]}>
                  <tip.icon size={20} color={tip.color} />
                </View>
                <View style={styles.tipContent}>
                  <Text style={styles.tipTitle}>{tip.title}</Text>
                  <Text style={styles.tipDescription}>{tip.description}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Stats */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Safety Stats</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Risks Avoided</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>3</Text>
              <Text style={styles.statLabel}>Countries Visited</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>7</Text>
              <Text style={styles.statLabel}>Days Safe</Text>
            </View>
          </View>
        </View>

        {/* Emergency Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Emergency Information</Text>
          <View style={styles.emergencyCard}>
            <Text style={styles.emergencyTitle}>Important Numbers</Text>
            <View style={styles.emergencyItem}>
              <Text style={styles.emergencyLabel}>Emergency Services</Text>
              <Text style={styles.emergencyNumber}>911</Text>
            </View>
            <View style={styles.emergencyItem}>
              <Text style={styles.emergencyLabel}>TripGuard Support</Text>
              <Text style={styles.emergencyNumber}>+1 (555) 123-4567</Text>
            </View>
          </View>
        </View>

        {/* Safe Travels Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Safe travels 🌍 Your health is your first destination.</Text>
        </View>
      </ScrollView>
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
  avatarContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#EBF8FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    padding: 16,
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
    marginBottom: 12,
    marginLeft: 8,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  userAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#EBF8FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 16,
    color: '#6B7280',
  },
  settingsContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  lastSettingItem: {
    borderBottomWidth: 0,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  settingTextContainer: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  settingRight: {
    marginLeft: 12,
  },
  tipsContainer: {
    gap: 12,
  },
  tipCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tipIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  tipDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 18,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statDivider: {
    width: 1,
    backgroundColor: '#E5E7EB',
    marginHorizontal: 20,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '800',
    color: '#3B82F6',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  emergencyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  emergencyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },
  emergencyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  emergencyLabel: {
    fontSize: 14,
    color: '#6B7280',
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