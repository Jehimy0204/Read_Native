import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProfileSection() {
  return (
    <>
      {/* Header con gradiente */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>MI APP PERSONAL</Text>
      </View>

      {/* Avatar circular */}
      <View style={styles.avatarContainer}>
        <Image
          source={require('../img/cata.jpg')}
          style={styles.avatar}
        />
      </View>

      {/* Nombre y profesión */}
      <View style={styles.infoContainer}>
        <Text style={styles.nombre}>Catalina Perez</Text>
        <Text style={styles.profesion}>Desarrolladora</Text>
      </View>

      {/* Info de contacto */}
      <View style={styles.contactCard}>
        <View style={styles.contactItem}>
          <Text style={styles.contactEmoji}>📧</Text>
          <Text style={styles.contactText}>cp131537@gmail.com</Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactEmoji}>📍</Text>
          <Text style={styles.contactText}>Bogotá, Colombia</Text>
        </View>
        <View style={styles.contactItem}>
          <Text style={styles.contactEmoji}>🔗</Text>
          <Text style={styles.contactText}>https://github.com/CatalinaP19</Text>
        </View>
      </View>

      {/* Sobre Mí */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Sobre Mí</Text>
        </View>
        <Text style={styles.bioText}>
          Apasionada por el desarrollo de aplicaciones móviles innovadoras. 
          Me especializo en crear experiencias de usuario intuitivas y eficientes 
          utilizando las últimas tecnologías. Siempre en búsqueda de nuevos 
          desafíos y oportunidades para crecer profesionalmente.
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 180,
    backgroundColor: '#FBF7E6',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E0D976',
    letterSpacing: 2,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: -60,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 5,
    borderColor: '#fff',
  },
  infoContainer: {
    alignItems: 'center',
    marginTop: 15,
    paddingHorizontal: 20,
  },
  nombre: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#E0D976',
    marginBottom: 5,
  },
  profesion: {
    fontSize: 16,
    color: '#3971B8',
    fontWeight: '500',
  },
  contactCard: {
    backgroundColor: '#FBF7E6',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 15,
    padding: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  contactEmoji: {
    fontSize: 20,
    marginRight: 12,
  },
  contactText: {
    fontSize: 15,
    color: '#000',
    fontWeight: '500',
  },
  section: {
    paddingHorizontal: 20,
    marginTop: 25,
  },
  sectionHeader: {
    borderLeftWidth: 4,
    borderLeftColor: '#E0D976',
    paddingLeft: 12,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3971B8',
  },
  bioText: {
    fontSize: 15,
    color: '#4a5568',
    lineHeight: 24,
    textAlign: 'justify',
  },
});