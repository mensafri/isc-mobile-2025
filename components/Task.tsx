import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

type Task = {
	id: number;
	title: string;
	description: string;
};

export default function Task({
	item,
	onDelete,
}: {
	item: Task;
	onDelete: () => void;
}) {
	return (
		<View key={item.id}>
			<Text style={{ fontSize: 30 }}>{item.id}</Text>
			<Text style={{ fontSize: 30 }}>{item.title}</Text>
			<Text style={{ fontSize: 30 }}>{item.description}</Text>
			<View
				style={{
					flexDirection: "row",
					gap: 10,
					alignSelf: "center",
					marginTop: 10,
				}}>
				<Button
					title="Hapus"
					onPress={onDelete}
				/>
				<Button
					title="Edit"
					color={"green"}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({});
