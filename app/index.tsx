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
	ScrollView,
	FlatList,
	Alert,
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
			const response = await axios.get("https://api-organiz.my.id/api/tasks");
			setTasks(response.data);
			setTimeout(() => {
				setLoading(false);
			}, 3000);
		}
		getTasks();
	}, []);

	async function deleteTask(id: number) {
		console.log(id);
	}

	console.log(tasks);

	function onDelete(id: number) {
		Alert.alert("Hapus", "Apakah anda yakin ingin menghapus task ini?", [
			{ text: "Batal" },
			{
				text: "Hapus",
				onPress: () => deleteTask(id),
			},
		]);
	}

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
			{/* <ScrollView>
				{tasks.map((task) => (
					<Task
						item={task}
						key={task.id}
					/>
				))}
			</ScrollView> */}
			<FlatList
				data={tasks}
				renderItem={({ item }) => (
					<Task
						item={item}
						onDelete={() => onDelete(item.id)}
					/>
				)}
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
		gap: 10,
	},
	box: { backgroundColor: "red", height: 100, width: 100 },
});
