import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import ProfileSection from './components/Profilesection';
import SkillCard from './components/skillcard';
import ProjectCard from './components/ProjectCard';

export default function App() {
  const habilidades = [
    { emoji: '💻', nombre: 'React Native', nivel: 'Básicos' },
    { emoji: '⚛️', nombre: 'React', nivel: 'Intermedio' },
    { emoji: '🎨', nombre: 'TailwindCSS', nivel: 'Intermedio' },
    { emoji: '🖼️', nombre: 'CSS Inline', nivel: 'Intermedio' },
    { emoji: '💭', nombre: 'Express', nivel: 'Intermedio' },
    { emoji: '📱', nombre: 'Expo', nivel: 'Básicos' },
  ];

  const proyectos = [
    {
      emoji: '🎯',
      titulo: 'UrbanStand',
      descripcion: 'App web para vendedores ambulantes, clientes y entidades gubernamentales interesadas.',
      tags: ['React', 'MongoDB', 'Express'],
    },
    {
      emoji: '🌟',
      titulo: 'Portfolio Personal',
      descripcion: 'Aplicación móvil de presentación profesional',
      tags: ['TypeScript', 'Expo'],
    },
    {
      emoji: '🚀',
      titulo: 'App de practicas',
      descripcion: 'Ejercicios practicos para profundizar en lenguajes de programacion',
      tags: ['React','JS', 'SQL Server','React Native','HTML', 'CSS Online'],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Sección de Perfil */}
      <ProfileSection />

      {/* Separador */}
      <View style={styles.separator} />

      {/* Sección de Habilidades */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Mis Habilidades</Text>
        </View>
        {habilidades.map((habilidad, index) => (
          <SkillCard
            key={index}
            emoji={habilidad.emoji}
            nombre={habilidad.nombre}
            nivel={habilidad.nivel}
          />
        ))}
      </View>

      {/* Separador */}
      <View style={styles.separator} />

      {/* Sección de Proyectos */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Mis Proyectos</Text>
        </View>
        {proyectos.map((proyecto, index) => (
          <ProjectCard
            key={index}
            emoji={proyecto.emoji}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            tags={proyecto.tags}
          />
        ))}
      </View>

      {/* Espaciado final */}
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
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
  separator: {
    height: 1,
    backgroundColor: '#e2e8f0',
    marginHorizontal: 20,
    marginVertical: 25,
  },
});