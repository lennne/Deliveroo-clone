import { ScrollView, Text, View } from "react-native";
import CategoryCard from './CategoryCard.js';

const Categories = () => {
    return (
        <ScrollView 
        contentContainerStyle={{
            paddingHorizontal:15,
            paddingTop:10
        }}
        style={{backgroundColor:"brown"}}
        horizontal
        showsHorizontalScrollIndicator={false}
        >
            {/* Categories */}
            <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing1"/>
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title="Testing2"/>
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title="Testing3"/>
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title="Testing3"/>
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title="Testing3"/>
            <CategoryCard imgUrl='https://links.papareact.com/gn7' title="Testing3"/>
            
            
        </ScrollView>
    );
}

export default Categories;