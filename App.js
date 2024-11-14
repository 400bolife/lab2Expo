import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, RefreshControl } from 'react-native';
import LanguageItem from './LanguageItem';

const languages = [
  {
    name: 'JavaScript',
    experience: '2 years of experience',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
  },
  {
    name: 'Python',
    experience: '1 year of experience',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
  },
  {
    name: 'C++',
    experience: '6 months of experience',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg',
  },
];


export default function App() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Здесь можно выполнить асинхронную операцию, например, обновить данные
    setTimeout(() => setRefreshing(false), 2000); // Имитация задержки
  };

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {languages.map((lang, index) => (
          <LanguageItem
            key={index}
            name={lang.name}
            experience={lang.experience}
            logo={lang.logo}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
