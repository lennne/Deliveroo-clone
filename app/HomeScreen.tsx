import { Image, SafeAreaView, StatusBar, Text, TextInput, View } from "react-native";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
  UserIcon
} from "react-native-heroicons/outline";
import Categories from './components/Categories';
import FeaturedRow from './components/FeaturedRow';

const HomeScreen = () => {
    return (
      
        <SafeAreaView style={{ paddingTop:StatusBar.currentHeight}}>
      {/*Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image 
        source={{
          uri:"https://links.papareact.com/wru"
        }}
        className="h-7 w-7 bg-gray-300 p-4 rounded-full" 
        />

        <View style={{marginLeft:5, flex:1}}>
          <Text className="font-bold text-gray-400 text-xs">
            Deliver Now!
          </Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color={"#00CCBB"} />
          </Text>
        </View>
        <UserIcon size={35 } color={"#00CCBB"}/>
       </View>

       {/* Search ----> */}
       <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-1 flex-row space-x-2 bg-gray-200 p-3">
            <MagnifyingGlassIcon size={20} color={"grey"}/>
            <TextInput
             keyboardType="default"
             placeholder="Restaurants and Cuisines"
             />
            
          </View>
          <AdjustmentsVerticalIcon color={"#00CCBB"}/>
       </View>

       {/* Categories-----> */}
        <Categories />

       {/* Featured Rows -----> */}
        <FeaturedRow
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />
        <FeaturedRow
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts"
          featuredCategory="featured"
        />
        <FeaturedRow
          title="Offers near you!"
          description="Why not support your local restaurant tonight!"
          featuredCategory="featured"
        />


      </SafeAreaView>
    )
}
    {/*
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }} */}

export default HomeScreen;