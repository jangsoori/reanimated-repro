import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import Animated, { FadeIn, useAnimatedStyle } from "react-native-reanimated";

const Item = ({ index }) => {
  const reaStyles = useAnimatedStyle(() => {
    return {
      //Remove transform to fix
      transform: [{ translateX: 0 }],
    };
  });

  return (
    <Animated.View
      // Duration or delay can make it more visible for debugging purposes
      entering={FadeIn.duration(1500)}
      style={[
        {
          height: 60,
          width: "100%",
          backgroundColor: "red",
        },
        reaStyles,
      ]}
    >
      <Text>Item {index}</Text>
    </Animated.View>
  );
};

export default function App() {
  const [items, setItems] = useState<any[]>([]);
  const clear = () => {
    setItems([]);
  };

  const add = () => {
    setItems((prev) => [{ id: prev.length + 1 }, ...prev]);
  };

  return (
    <View style={styles.container}>
      <Button title="Clear" onPress={clear} />
      <Button title="Add" onPress={add} />
      {/* {items[0] && <Item index={0} />} */}
      <FlatList
        style={{ width: "100%" }}
        contentContainerStyle={{ columnGap: 10 }}
        data={items}
        renderItem={({ item }) => {
          return <Item index={item.id} />;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    flex: 1,
    backgroundColor: "#c0c0c0",
    alignItems: "center",
    justifyContent: "center",
  },
});
