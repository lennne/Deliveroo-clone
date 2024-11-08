import { Image, ScrollView, Text, View } from "react-native"
import { ArrowRightIcon } from "react-native-heroicons/outline"
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({title,description}) => {
    //will have restaurants
    return(
        <View>
            <View className=" flex-row px-4 justify-between mt-4">
                <Text className="font-bold text-lg ">
                    {title}
                </Text>
                <ArrowRightIcon color={"#00CCBB"}/>
            </View>
            <Text className="text-xs text-gray-500 px-4">{description}</Text>
           
           <ScrollView
           horizontal
           contentContainerStyle={{
            paddingHorizontal:15
           }}
           showsHorizontalScrollIndicator={false}
           className="pt-4"
           >
                {/* List of Restaurants */}
                <RestaurantCard 
                            id = {123}
                            imgUrl = "https://links.papareact.com/gn7"
                            title = "Nandos"
                            rating = {4.5}
                            genre = "Japanese"
                            address = "123 Main Street"
                            short_description = "This is a short description"
                            dishes = {[]}
                            long = {20}
                            lat = {0}
                />
                <RestaurantCard 
                            id = {123}
                            imgUrl = "https://links.papareact.com/gn7"
                            title = "Nandos"
                            rating = {4.5}
                            genre = "Japanese"
                            address = "123 Main Street"
                            short_description = "This is a short description"
                            dishes = {[]}
                            long = {20}
                            lat = {0}
                />
                <RestaurantCard 
                            id = {123}
                            imgUrl = "https://links.papareact.com/gn7"
                            title = "Nandos"
                            rating = {4.5}
                            genre = "Japanese"
                            address = "123 Main Street"
                            short_description = "This is a short description"
                            dishes = {[]}
                            long = {20}
                            lat = {0}
                />
           </ScrollView>
            
        </View>
 
    )
}
export default FeaturedRow;