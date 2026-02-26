import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity,
  Modal 
} from 'react-native';
import { safetyGuides } from '@/data/safetyGuides';
import { SafetyGuide } from '@/types';
import SafetyGuideCard from '@/components/SafetyGuideCard';
import { Shield, X, TriangleAlert as AlertTriangle, Phone, Info, MapPin, Heart, Users } from 'lucide-react-native';

export default function SafetyTab() {
  const [selectedGuide, setSelectedGuide] = useState<SafetyGuide | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleGuidePress = (guide: SafetyGuide) => {
    setSelectedGuide(guide);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedGuide(null);
  };

  const emergencyContacts = [
    { label: 'Emergency Services', number: '911' },
    { label: 'Poison Control', number: '1-800-222-1222' },
    { label: 'Coast Guard', number: '1-800-542-8657' },
  ];

  const generalTravelTips = [
    {
      icon: Phone,
      title: 'Keep Emergency Contacts Handy',
      description: 'Save important numbers in your phone and write them down separately. Include local emergency services, your embassy, and family contacts.',
      color: '#EF4444'
    },
    {
      icon: Heart,
      title: 'Carry a Small Medical Kit',
      description: 'Pack basic medications, bandages, antiseptic, and any prescription drugs you need. Include a thermometer and pain relievers.',
      color: '#10B981'
    },
    {
      icon: Users,
      title: 'Register with Your Embassy Abroad',
      description: 'Register with your country\'s embassy or consulate when traveling internationally. This helps them assist you in emergencies.',
      color: '#3B82F6'
    }
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Safety Guides</Text>
          <Text style={styles.headerSubtitle}>Essential travel safety information</Text>
        </View>
        <View style={styles.iconContainer}>
          <Shield size={24} color="#10B981" />
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Emergency Contacts */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Phone size={20} color="#EF4444" />
            <Text style={styles.sectionTitle}>Emergency Contacts</Text>
          </View>
          <View style={styles.emergencyContainer}>
            {emergencyContacts.map((contact, index) => (
              <View key={index} style={styles.emergencyItem}>
                <Text style={styles.emergencyLabel}>{contact.label}</Text>
                <Text style={styles.emergencyNumber}>{contact.number}</Text>
              </View>
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
                  <tip.icon size={24} color={tip.color} />
                </View>
                <View style={styles.tipContent}>
                  <Text style={styles.tipTitle}>{tip.title}</Text>
                  <Text style={styles.tipDescription}>{tip.description}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Additional Safety Reminders */}
        <View style={styles.section}>
          <View style={styles.reminderCard}>
            <View style={styles.reminderHeader}>
              <MapPin size={20} color="#F59E0B" />
              <Text style={styles.reminderTitle}>Before You Travel</Text>
            </View>
            <View style={styles.reminderList}>
              <Text style={styles.reminderItem}>• Research your destination's health and safety risks</Text>
              <Text style={styles.reminderItem}>• Check visa and vaccination requirements</Text>
              <Text style={styles.reminderItem}>• Inform your bank about travel plans</Text>
              <Text style={styles.reminderItem}>• Make copies of important documents</Text>
              <Text style={styles.reminderItem}>• Purchase comprehensive travel insurance</Text>
              <Text style={styles.reminderItem}>• Share your itinerary with trusted contacts</Text>
            </View>
          </View>
        </View>

        {/* Safety Guides */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Shield size={20} color="#3B82F6" />
            <Text style={styles.sectionTitle}>Safety Guides</Text>
          </View>
          <View style={styles.guidesList}>
            {safetyGuides.map(guide => (
              <SafetyGuideCard 
                key={guide.id} 
                guide={guide}
                onPress={() => handleGuidePress(guide)}
              />
            ))}
          </View>
        </View>

        {/* Safe Travels Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Safe travels 🌍 Your health is your first destination.</Text>
        </View>
      </ScrollView>

      {/* Guide Detail Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={closeModal}
      >
        {selectedGuide && (
          <View style={styles.modal}>
            <View style={styles.modalHeader}>
              <View>
                <Text style={styles.modalCategory}>{selectedGuide.category}</Text>
                <Text style={styles.modalTitle}>{selectedGuide.title}</Text>
              </View>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <X size={24} color="#6B7280" />
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.modalContent}>
              <Text style={styles.modalDescription}>{selectedGuide.content}</Text>

              <View style={styles.modalSection}>
                <View style={styles.modalSectionHeader}>
                  <Shield size={18} color="#10B981" />
                  <Text style={styles.modalSectionTitle}>Prevention Tips</Text>
                </View>
                {selectedGuide.tips.map((tip, index) => (
                  <View key={index} style={styles.listItem}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.listText}>{tip}</Text>
                  </View>
                ))}
              </View>

              <View style={styles.modalSection}>
                <View style={styles.modalSectionHeader}>
                  <AlertTriangle size={18} color="#EF4444" />
                  <Text style={styles.modalSectionTitle}>Emergency Actions</Text>
                </View>
                {selectedGuide.emergency_actions.map((action, index) => (
                  <View key={index} style={styles.listItem}>
                    <Text style={styles.bulletRed}>•</Text>
                    <Text style={styles.listText}>{action}</Text>
                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        )}
      </Modal>
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
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#ECFDF5',
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
    marginLeft: 8,
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
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
  emergencyNumber: {
    fontSize: 16,
    fontWeight: '700',
    color: '#EF4444',
  },
  tipsContainer: {
    gap: 16,
  },
  tipCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tipIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  tipContent: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  tipDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  reminderCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  reminderHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  reminderTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginLeft: 8,
  },
  reminderList: {
    gap: 8,
  },
  reminderItem: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
  guidesList: {
    paddingBottom: 20,
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
  modal: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  modalCategory: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3B82F6',
    textTransform: 'uppercase',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111827',
    marginTop: 4,
  },
  closeButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#F3F4F6',
  },
  modalContent: {
    flex: 1,
    padding: 16,
  },
  modalDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: '#374151',
    marginBottom: 24,
  },
  modalSection: {
    marginBottom: 24,
  },
  modalSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  modalSectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginLeft: 8,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 8,
    paddingLeft: 8,
  },
  bullet: {
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
});