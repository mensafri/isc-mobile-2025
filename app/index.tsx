import Komponen from "@/components/Komponen";
import Task from "@/components/Task";
import axios from "axios";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
	ActivityIndicator,
	Button,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";

type Task = {
	id: number;
	title: string;
	description: string;
};

export default function Index() {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function getTasks() {
			const response = await axios.get(
				"https://d217-114-10-4-212.ngrok-free.app/tasks",
			);
			setTasks(response.data);
			setTimeout(() => {
				setLoading(false);
			}, 3000);
		}
		getTasks();
	}, []);

	console.log(tasks);

	if (loading) {
		return (
			<View style={styles.container}>
				<ActivityIndicator
					size="large"
					color="#0000ff"
				/>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<Komponen
				nama="Sapri"
				umur={12}
			/>
			<Text style={{ fontSize: 30 }}>Tasks</Text>
			{tasks.map((task) => (
				<Task item={task} />
			))}
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
