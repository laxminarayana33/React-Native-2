import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";
import PokemanCard from "./components/pokemanCard/pokemanCard";

export default function Index() {
  
//pokemans data 

const charmanderData = {
  name : "Charmander", 
  image: require("../assets/images/salamander.png"),
  type: "fire",
  hp: 39,
  moves : ["Scratch", "Ember", "Growl", "Leer"],
  weaknesses : ["water", "rock"],
};
const squirtleData = {
  name: "Squirtle",
  image: require("../assets/images/water.jpg"), // Replace with the actual image path
  type: "Water",
  hp: 44,
  moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
  weaknesses: ["Electric", "Grass"],
};

const bulbasaurData = {
  name: "Bulbasaur",
  image: require("../assets/images/lighting.png"), // Replace with the actual image path
  type: "Grass",
  hp: 45,
  moves: ["Tackle", "Vine Whip", "Growl", "Leech Seed"],
  weaknesses: ["Fire", "Ice", "Flying", "Psychic"],
};

const pikachuData = {
  name: "Pikachu",
  image: require("../assets/images/Pikachu.png"), // Replace with the actual image path
  type: "Electric",
  hp: 35,
  moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
  weaknesses: ["Ground"],
};

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#e5d1b8'
      }}
    >
      {/* <Text>Edit app/index.tsx to edit this screen.</Text> */}
      <ScrollView>
      <PokemanCard {...charmanderData}/>
      <PokemanCard {...squirtleData}/>
      <PokemanCard {...bulbasaurData}/>
      <PokemanCard {...pikachuData}/>
      </ScrollView>
    </SafeAreaView>
  );
}
