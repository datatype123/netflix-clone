import React from "react";
import { View, Text, StyleSheet, FlatList, Image, Dimensions,TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";


const { width } = Dimensions.get("screen");
const movies = [
    {
        id: "1",
        title: "Carry-On",
        description: "A gripping thriller with 17.4 million views this week.",
        image: "https://m.media-amazon.com/images/M/MV5BNTNkMjQzNmQtNzE4ZC00NDlmLTkyYjAtZDZkYTQ5NjBmYThlXkEyXkFqcGc@._V1_SX300.jpg", // Replace with a valid image URL
    },
    {
        id: "2",
        title: "The Six Triple \nEight",
        description: "A historical drama ranking #2 in movies this week.",
        image: "https://image-link-to-six-triple-eight.jpg", // Replace with a valid image URL
    },
    {
        id: "3",
        title: "Furiosa: A Mad \nMax Saga",
        description: "An action-packed prequel to the Mad Max series.",
        image: "https://image-link-to-furiosa.jpg", // Replace with a valid image URL
    },
    {
        id: "4",
        title: "Horizon: An American \nSaga: Chapter 1",
        description: "A sweeping epic about the American frontier.",
        image: "https://image-link-to-horizon.jpg", // Replace with a valid image URL
    },
];

const List = () => {

    const renderMovie = ({ item }) => (
        <View style={styles.card}>
            <Image 
            source={{uri: item.image}} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.title} ellipsizeMode="clip" numberOfLines={5} adjustsFontSizeToFit>{item.title}</Text>
                <TouchableOpacity onPress={() => console.log(`See details of ${item.title}`)}>
                    <Feather name="info" size={24} color="white" />
                </TouchableOpacity>
                
                {/* <Text style={styles.description}>{item.description}</Text> */}
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Trending Movies</Text>
            <FlatList
                data={movies}
                renderItem={renderMovie}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={true}
                nestedScrollEnabled={true}
                horizontal={true}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        paddingTop: 20,
    },
    header: {
        fontSize: 24,
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10,
    },
    list: {
        paddingHorizontal: 10,
    },
    card: {
        width: width * 0.4,
        backgroundColor: "black",
        borderRadius: 2,
        overflow: "hidden",
        marginHorizontal: width * 0.02,
        marginBottom: 15,
    },
    image: {
        width: "100%",
        height: Dimensions.get("screen").width * 0.5,
        resizeMode: "cover",
    },
    info: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "bold",
    },
    description: {
        fontSize: 14,
        color: "#ccc",
        marginTop: 5,
    },
});

export default List;
