import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Pressable, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (   

    <ThemedView style={styles.container}>
    <ThemedView style={styles.titleContainer}>
      <ThemedText type="title">Minute To Win It!🥇 </ThemedText>
      <ThemedView style={{height:40}}/>
    </ThemedView>

    <ThemedView style={styles.stepContainer}>
      <ThemedText>
This program is targeted towards kids in elementary school to help them improve on their mathematic skills. This is part B of my Week 7 Project. Enjoy.
        </ThemedText>
        </ThemedView>

    <Pressable onPress={() => console.log('Addition')}>
    <ThemedView style={styles.stepContainer}>
      <ThemedText type="subtitle">Addition</ThemedText>
      <ThemedText>
        You will have 60 seconds to test your addition skills. Think you can solve 60 addition questions in 60 seconds? Click Here
        </ThemedText>
        </ThemedView>
        </Pressable>

  <Pressable onPress={() => console.log('Subtraction')}>
    <ThemedView style={styles.stepContainer}>
      <ThemedText type="subtitle">Subtraction</ThemedText>
      <ThemedText>
        {`Think Fast! What's 11 - 6? Do you think you can beat our high score? Click here to play more.`}
      </ThemedText>
    </ThemedView>
  </Pressable>  

  <Pressable onPress={() => console.log('Multiplication')}>
    <ThemedView style={styles.stepContainer}>
      <ThemedText type="subtitle">Multiplication</ThemedText>
      <ThemedText>
        {`This one is only for the brave. 60 speed questions in 1 minute. Dare to play? Click Here`}
      </ThemedText>
    </ThemedView>
   </Pressable> </ThemedView>

  );

}
const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 30,
    gap:16,
    justifyContent: 'center'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 40,
    marginTop: 40,

  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
