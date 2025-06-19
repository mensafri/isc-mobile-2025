import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import axios from "axios";

type Task = {
	title: string;
	description: string;
};

export default function PostDetailPage() {
	const { id } = useLocalSearchParams();
	const router = useRouter();

	const [task, setTask] = useState<Task>({
		title: "",
		description: "",
	});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function getTask() {
			const response = await axios.get(
				`https://api-organiz.my.id/api/tasks/${id}`,
			);
			setTask(response.data);
			setIsLoading(false);
		}
		getTask();
	}, []);

	async function saveTask() {
		await axios.put(`https://api-organiz.my.id/api/tasks/${id}`, task);
		router.push("/");
	}

	console.log(task);

	if (isLoading) {
		return <Text>Loading...</Text>;
	}
	return (
		<View>
			<Text>Title</Text>
			<TextInput
				value={task?.title}
				style={styles.textinput}
				onChangeText={(text) => {
					setTask({ ...task, title: text });
				}}
			/>

			<Text>Deskripsi</Text>

			<TextInput
				style={styles.textinput}
				value={task.description}
				onChangeText={(text) => {
					setTask({ ...task, description: text });
				}}
			/>

			<Button
				title="Simpan"
				onPress={saveTask}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	textinput: {
		width: "100%",
		height: 40,
		borderWidth: 1,
		marginBottom: 10,
		padding: 10,
		borderRadius: 10,
		borderColor: "#ccc",
		fontSize: 16,
		color: "#333",
		backgroundColor: "#fff",
	},
});
