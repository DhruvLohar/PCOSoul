import React, { useState } from "react";

import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { COLORS, LAYOUTS, TYPOGRAPHY } from "../../../theme/theme";
import { ArrowLeft2, ShoppingCart } from "iconsax-react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import ShowMoreLess from "../../../components/ShowMoreLess";
import Button from "../../../components/Button";
import QuantityButton from "../../../components/QuantityButtons";

const Images = [
	{
		id: 1,
		imageUrl:
			"https://rukminim2.flixcart.com/image/850/1000/xif0q/protein-supplement/0/e/f/protein-bars-bar-daily-choco-classic-healthy-protein-snack-no-original-imagt2znwsznkku3.jpeg",
	},
	{
		id: 2,
		imageUrl:
			"https://rukminim2.flixcart.com/image/850/1000/xif0q/protein-supplement/0/e/f/protein-bars-bar-daily-choco-classic-healthy-protein-snack-no-original-imagt2znwsznkku3.jpeg",
	},
	{
		id: 3,
		imageUrl:
			"https://rukminim2.flixcart.com/image/850/1000/xif0q/protein-supplement/0/e/f/protein-bars-bar-daily-choco-classic-healthy-protein-snack-no-original-imagt2znwsznkku3.jpeg",
	},
	{
		id: 4,
		imageUrl:
			"https://maxprotein.in/cdn/shop/products/3_6799c4fd-f423-4a09-96ff-bb1f83eaaeab.jpg?v=1677498307",
	},
];

//static sources for the images right now

export default () => {
	const url =
		"https://rukminim2.flixcart.com/image/850/1000/xif0q/protein-supplement/0/e/f/protein-bars-bar-daily-choco-classic-healthy-protein-snack-no-original-imagt2znwsznkku3.jpeg";

	const [largeImage, setLargeImage] = useState(url);

	const data = [
		{ id: "1", title: "Flavour", data: "Choco Classic" },
		{ id: "2", title: "Quantity", data: "300gm" },
		{ id: "3", title: "Maximum Shelf Life", data: "275 days" },
		{ id: "4", title: "Brand", data: "XYZ Brand" },
		{ id: "5", title: "Protein Content per Serving", data: "20g" },
		{ id: "6", title: "Total Fat per Serving", data: "5g" },
		{ id: "7", title: "Carbohydrates per Serving", data: "25g" },
		{ id: "8", title: "Dietary Fiber per Serving", data: "3g" },
		{ id: "9", title: "Sugars per Serving", data: "10g" },
	];

	const route = useRouter();
	return (
		<SafeAreaView
			style={[
				LAYOUTS.flexStart,
				LAYOUTS.screenView,
				{ backgroundColor: COLORS.primaryLight },
			]}
		>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Text style={[TYPOGRAPHY.Card.Muted, { marginBottom: 5 }]}>
					1,122 Ratings and 8 Reviews
				</Text>
				<Image
					style={{
						width: "100%",
						height: 270,
						marginTop: 5,
						resizeMode: "contain",
						borderRadius: 20,
					}}
					source={{
						uri: largeImage,
					}}
				/>
				<View
					style={[
						LAYOUTS.flexRowCenter,
						{
							justifyContent: "space-between",
							marginTop: 10,
						},
					]}
				>
					{Images.map((image, idx) => {
						return (
							<TouchableOpacity
								key={idx}
								onPress={() => setLargeImage(image.imageUrl)}
							>
								<Image
									key={image.id}
									style={{
										width: 60,
										height: 60,
										resizeMode: "contain",
										borderRadius: 10,
									}}
									source={{ uri: image.imageUrl }}
								/>
							</TouchableOpacity>
						);
					})}
				</View>

				<Text style={[TYPOGRAPHY.SubTitle, { marginVertical: 10 }]}>
					Max Protein Bar Pack of 6 ( 6 x 10)
				</Text>
				<View
					style={[LAYOUTS.flexRowCenter, { justifyContent: "space-between" }]}
				>
					<Text style={[TYPOGRAPHY.Heading, { fontSize: 30 }]}>Rs. 299</Text>
					<QuantityButton />
				</View>
				<Text style={[TYPOGRAPHY.Card.Muted, { marginTop: 20, flex: 1 }]}>
					RiteBite Daily Choco Classic bar is made from tasty and delightful
					chocolate to make everyday more pleasant. It is the perfect bar for
					daily consumption whenever you need a boost Need to quell small
					hungers? This bar has just the balanced mix nutrients to keep you
					going This bar has sufficient protein (10gm) and fiber (4gm) to fill
					your daily nutritional gap This prebiotic bar is 100% vegetarian and
					contains 21 Vitamins & Minerals, Electrolytes, Omega 3 You can even
					consume it before your yoga sessions.
				</Text>

				<Text style={[TYPOGRAPHY.Heading, { marginVertical: 25 }]}>
					Product Info
				</Text>
				<ShowMoreLess items={data} />
				
				{/* <Text style={[TYPOGRAPHY.Heading, { marginVertical: 25 }]}>
					Ratings & Reviews
				</Text> */}
				<Button
					title={"Add to Card"}
					type={"outline"}
					PrefixIcon={ShoppingCart}
					style={{ backgroundColor: COLORS.primary, borderWidth: 0 }}
					onPress={() => route.push("/store/cart")}
				></Button>
			</ScrollView>
		</SafeAreaView>
	);
};
