import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
	const router = useRouter();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isLogin, setIslogin] = useState(false);
	const [message, setMessage] = useState("");

	function login() {
		if (username == "admin" && password == "admin") {
			console.log("berhasil login");
			setMessage("berhasil login");
			setIslogin(true);
			router.push("/kedua?nama=budi&umur=20");
			router.push(`/kedua?nama=${username}&umur=${password}`);
		} else {
			console.log("gagal login");
			setMessage("gagal login");
			setIslogin(true);
		}
	}

	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 30 }}>Login Form</Text>
			<TextInput
				value={username}
				onChangeText={setUsername}
				placeholder={"placeholder"}
				style={{ borderWidth: 1, padding: 10, width: 200 }}
			/>
			<TextInput
				secureTextEntry={true}
				value={password}
				onChangeText={setPassword}
				placeholder="Password"
				style={{ borderWidth: 1, padding: 10, width: 200 }}
			/>
			<Button
				title="Login"
				onPress={login}
			/>
			{isLogin ? (
				<Text style={{ fontSize: 20, backgroundColor: "red" }}>{message}</Text>
			) : null}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		gap: 10,
	},
	box: { backgroundColor: "red", height: 100, width: 100 },
});
