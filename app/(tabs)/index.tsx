import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const rapArtist = [
    {rapper: 'Jay Z'},
    {rapper: '50 Cent'},
    {rapper: 'Lil Wayne'},
    {rapper: 'Meek Mill'}
  ]



  const [unhidden, hidden] = useState(Array(rapArtist.length).fill(null))
  const clicked = (index) => {
    const nextRapper = [...unhidden];
    nextRapper[index] = rapArtist[index].rapper;
    hidden(nextRapper);
  };


  return (   
    <ThemedView style={styles.container}>
    <ThemedView style={[styles.titleContainer, {backgroundColor : '#313131'}]}>
      <ThemedText style={{color: '#ff7c1e'}} type="title">Guess My Top 4 Rappers! </ThemedText>
      <ThemedView style={{height:40}}/>
    </ThemedView>

    <ThemedView style={[styles.titleContainer, {backgroundColor : '#313131'}, {marginBottom : 5}]}>
      <ThemedText style={{color: '#ff9f5b'}} > 
This program is very simple. I had trouble trying to convey my original idea, so I decided to scrap the math game and create something easier. Enjoy.
        </ThemedText>
        </ThemedView>

    <Pressable 
    onPress={() => clicked(0)}
      style ={({pressed}) => [
        styles.stepContainer,
        {
          backgroundColor: pressed ? '#9d87ff' : 'transparent',
        }
      ]}
    >
      <ThemedText style={{color: '#ff7c1e'}}type="subtitle">Song Cry</ThemedText>
      <ThemedText style={{color: '#ff9f5b'}} >
         This artist released his hit song "Song Cry" in 2001 on his album titled "The Blueprint". Click Here To Find Out Who
        </ThemedText>
        {unhidden[0] && <ThemedText style={{color: '#ff7c1e', fontWeight: 'bold'}}>{unhidden[0]}</ThemedText>}
  
        </Pressable>

        <Pressable 
    onPress={() => clicked(1)}
      style ={({pressed}) => [
        styles.stepContainer,
        {
          backgroundColor: pressed ? '#9d87ff' : 'transparent',
        }
      ]}
    >
      <ThemedText style={{color: '#ff7c1e'}} type="subtitle">Power Universe</ThemedText>
      <ThemedText style={{color: '#ff9f5b'}} >
      This artist is known for surviving getting shot 9 times and becoming a television producer for various hit shows on the Starz native app. Click Here To Find Out Who
        </ThemedText>
        {unhidden[1] && <ThemedText style={{color: '#ff7c1e', fontWeight: 'bold'}}>{unhidden[1]}</ThemedText>}
  
        </Pressable>


        <Pressable 
    onPress={() => clicked(2)}
      style ={({pressed}) => [
        styles.stepContainer,
        {
          backgroundColor: pressed ? '#9d87ff' : 'transparent',
        }
      ]}
    >
      <ThemedText style={{color: '#ff7c1e'}} type="subtitle">YMCMB</ThemedText>
      <ThemedText style={{color: '#ff9f5b'}} >
      This artist carried the hip hop game on his back from 2006-2013. He's also known as his alias name "Weezy F Baby". Click Here To Find Out Who
        </ThemedText>
        {unhidden[2] && <ThemedText style={{color: '#ff7c1e', fontWeight: 'bold'}}>{unhidden[2]}</ThemedText>}
        </Pressable>

        <Pressable 
    onPress={() => clicked(3)}
      style ={({pressed}) => [
        styles.stepContainer,
        {
          backgroundColor: pressed ? '#9d87ff' : 'transparent',
        }
      ]}
    >
      <ThemedText style={{color: '#ff7c1e'}} type="subtitle">Dreams and Nightmares</ThemedText>
      <ThemedText style={{color: '#ff9f5b'}} >
      This artist is notoriously known for his close association with P Diddy. Despite his recent allegations, his talent is unmatched. Click Here To Find Out Who
        </ThemedText>
  
        </Pressable>
        {unhidden[3] && <ThemedText style={{color: '#ff7c1e', fontWeight: 'bold'}}>{unhidden[3]}</ThemedText>}
        </ThemedView>

);
  
  }


const styles = StyleSheet.create({
  background: {
    flex:1,
    resizeMode: 'cover',
  },
  container: {
    flex:1,
    padding: 30,
    gap:16,
    justifyContent: 'center',
    backgroundColor: '#313131'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,


  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    padding: 10,
    borderRadius: 8,
    borderColor: '#ff7c1e',
    borderWidth: 2,
  },
});
