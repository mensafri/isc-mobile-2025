import { Stack } from "expo-router";

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="kedua/index"
				options={{ title: "Halaman Dua" }}
			/>
		</Stack>
	);
}
