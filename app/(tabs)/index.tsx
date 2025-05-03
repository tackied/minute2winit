import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Pressable, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (   
    <ThemedView style={styles.container}>
    <ThemedView style={[styles.titleContainer, {backgroundColor : '#313131'}]}>
      <ThemedText style={{color: '#ff7c1e'}} type="title">Guess My Top 5 Rappers! </ThemedText>
      <ThemedView style={{height:40}}/>
    </ThemedView>

    <ThemedView style={[styles.titleContainer, {backgroundColor : '#313131'}, {marginBottom : 70}]}>
      <ThemedText style={{color: '#ff9f5b'}} > 
This program is very simple. I had trouble trying to convey my original idea, so I decided to scrap the math game and create something else to show my understanding of React Native. Enjoy.
        </ThemedText>
        </ThemedView>

    <Pressable 
    onPress={() => console.log('Addition')}
      style ={({pressed}) => [
        styles.stepContainer,
        {
          backgroundColor: pressed ? '#9d87ff' : 'transparent',
        }
      ]}
    >
      <ThemedText style={{color: '#ff7c1e'}}type="subtitle">Addition</ThemedText>
      <ThemedText style={{color: '#ff9f5b'}} >
        You will have 60 seconds to test your addition skills. Think you can solve 60 addition questions in 60 seconds? Click Here To Start
        </ThemedText>
  
        </Pressable>

        <Pressable 
    onPress={() => console.log('Subtraction')}
      style ={({pressed}) => [
        styles.stepContainer,
        {
          backgroundColor: pressed ? '#9d87ff' : 'transparent',
        }
      ]}
    >
      <ThemedText style={{color: '#ff7c1e'}} type="subtitle">Subtraction</ThemedText>
      <ThemedText style={{color: '#ff9f5b'}} >
        You will have 60 seconds to test your addition skills. Think you can solve 60 addition questions in 60 seconds? Click Here To Start
        </ThemedText>
  
        </Pressable>


        <Pressable 
    onPress={() => console.log('Multiplication')}
      style ={({pressed}) => [
        styles.stepContainer,
        {
          backgroundColor: pressed ? '#9d87ff' : 'transparent',
        }
      ]}
    >
      <ThemedText style={{color: '#ff7c1e'}} type="subtitle">Multiplication</ThemedText>
      <ThemedText style={{color: '#ff9f5b'}} >
        You will have 60 seconds to test your addition skills. Think you can solve 60 addition questions in 60 seconds? Click Here To Start
        </ThemedText>
  
        </Pressable>
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
