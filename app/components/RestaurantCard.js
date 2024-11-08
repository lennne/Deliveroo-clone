import { Image, Text, TouchableOpacity, View } from "react-native";


const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
}) => {
    return (
        <TouchableOpacity>
            <Image 
             source={{uri:imgUrl}}
            className="h-36 w-64 rounded-sm"
            />
            <View>
                <Text className="font-bold text-lg pt-2"></Text>
            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard;