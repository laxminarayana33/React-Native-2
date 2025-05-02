import { View, Text, Image,  StyleSheet, Platform, ImageSourcePropType } from 'react-native';

const getTypeDetails = (type: string) => {
    switch (type.toLowerCase()) {
      case "electric":
        return { borderColor: "#FFD700", emoji: "⚡️" };
      case "water":
        return { borderColor: "#6493EA", emoji: "💧" };
      case "fire":
        return { borderColor: "#FF5733", emoji: "🔥" };
      case "grass":
        return { borderColor: "#66CC66", emoji: "🌿" };
      default:
        return { borderColor: "#A0A0A0", emoji: "❓" };
    }
  };

  type PokemonCardProps = {
    name: string;
    image: ImageSourcePropType;
    type: string;
    hp: number;
    moves: string[];
    weaknesses: string[];
  };
  
export default function PokemanCard({
    name,
    image,
    type,
    hp,
    moves,
    weaknesses,
  }: PokemonCardProps) {
    const {borderColor , emoji} = getTypeDetails(type)
    return(
        <View style={styles.card}>
            <View style={styles.nameContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.hp}>❤️ HP:{hp}</Text>
            </View>
            <Image style={styles.image} source={image} accessibilityLabel={`${name} pokeman`} resizeMode='contain'/>
            <View style={styles.typeContainer}>
                <View style ={[styles.badge, {borderColor}]}>
                    <Text style={styles.emoji}>{emoji}</Text>
                    <Text style={styles.typeText}>{type}</Text>
                </View>
            </View>
            <View style={styles.movesContainer}>
                <Text style={styles.movesText}>Moves: {moves.join(', ')}</Text>
            </View>
            <View style={styles.weaknessContainer}>
                <Text style={styles.weaknessText}>Weaknesses: {weaknesses.join(', ')}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    card:{
        backgroundColor : "white",
        borderRadius : 20,
        borderWidth : 3,
        padding : 16,
        margin : 20,
        ...Platform.select({
            ios:{
                shadowOffset: {width : 2, height : 2},
                shadowcolor: "#333",
                shadowOpacity : 0.3,
                shadowRadius :2
            },
            android:{
                elevation: 5,
            }
        })
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent : "space-between",
        marginBottom: 30
    },
    name :{
        fontSize: 30,
        fontWeight : "bold",
    },
    hp: {
        fontSize : 20,
    },
    image: {
        width: "100%",
        height:250,
    },
    typeContainer :{
        alignItems:"center",
        marginBottom:30,
    },
    badge:{
        flexDirection: "row",
        alignItems:"center",
        paddingHorizontal :12,
        paddingVertical: 6, 
        borderRadius: 20,
        borderWidth:5,
    },
    emoji: {
        fontSize: 30,
        marginRight: 12
    },
    typeText:{
        fontSize: 22,
        fontWeight: "bold",
    }, 
    movesContainer: {
        marginBottom: 20,
    },
    movesText:{
        fontSize: 22,
        fontWeight: "bold",
    },
    weaknessContainer:{
        marginBottom: 20,
    },
    weaknessText:{
        fontSize: 20,
        fontWeight: "bold",
    }
})
