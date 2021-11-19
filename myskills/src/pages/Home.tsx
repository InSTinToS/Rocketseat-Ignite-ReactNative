import React, { useState, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
import Button from '../components/Native/Button';
import SkillCard from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

const Home = () => {
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [newSkill, setNewSkill] = useState('');
  const [greeting, setGretting] = useState('');

  const handleRemoveSkill = (id: string) => {
    setMySkills(before => before.filter(({ id: beforeId }) => beforeId !== id));
  };

  const handleAddNewSkill = () => {
    const data = {
      id: new Date().getTime().toString(),
      name: newSkill,
    };

    setMySkills(before => [...before, data]);
  };

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) setGretting('Good Morning');
    else if (currentHour > 18) setGretting('Good Night');
    else setGretting('Good Afternoon');
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hello World</Text>

      <Text style={styles.greeting}>{greeting}</Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        onChangeText={setNewSkill}
        placeholderTextColor="#555"
      />

      <Button title="Add" onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginVertical: 50 }]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: { name, id } }) => (
          <SkillCard skill={name} onPress={() => handleRemoveSkill(id)} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 30,
    backgroundColor: '#121015',
  },
  greeting: {
    fontSize: 15,
    color: '#fcfcfc',
  },
  title: {
    fontSize: 24,
    color: '#fcfcfc',
    fontWeight: 'bold',
  },
  input: {
    fontSize: 18,
    marginTop: 30,
    color: '#fcfcfc',
    backgroundColor: '#1f1e25',
    padding: Platform.OS === 'ios' ? 15 : 10,
  },
});

export default Home;