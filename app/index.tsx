import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
	const router = useRouter();
	const [data, setData] = useState();
	const [angka, setAngka] = useState(0);
	const [rubah, setRubah] = useState(0);
	const [quotes, setQuotes] = useState();

	useEffect(() => {
		fetch("https://dummyjson.com/quotes")
			.then((res) => res.json())
			.then((res) => setQuotes(res.quotes[0]));
	}, []);

	console.log(quotes);
	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 30 }}>{angka}</Text>
			<Button
				onPress={() => {
					setAngka(angka + 1);
				}}
				title="+"
			/>
			<Button
				onPress={() => {
					setRubah(rubah + 1);
				}}
				title="Kembali ke 10"
			/>
			<Text style={{ fontSize: 30 }}>{quotes?.author}</Text>
			<Text style={{ fontSize: 30 }}>{quotes?.quote}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		gap: 10,
	},
	box: { backgroundColor: "red", height: 100, width: 100 },
});
