import { useRouter } from "expo-router";
import { Button, StyleSheet, View } from "react-native";

export default function Index() {
	const router = useRouter();
	return (
		<View style={styles.container}>
			<View style={styles.box}></View>
			<View style={styles.box}></View>
			<View style={styles.box}></View>
			<View style={styles.box}></View>
			<View style={styles.box}></View>
			<View style={styles.box}></View>
			<Button
				title="Pindah Halaman"
				onPress={() => router.push("/kedua")}
			/>
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
