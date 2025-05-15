import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Task({ item }) {
	return (
		<View key={item.id}>
			<Text style={{ fontSize: 30 }}>{item.id}</Text>
			<Text style={{ fontSize: 30 }}>{item.title}</Text>
			<Text style={{ fontSize: 30 }}>{item.description}</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
