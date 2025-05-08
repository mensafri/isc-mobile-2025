import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function HalamanDua() {
	const { nama, umur } = useLocalSearchParams();
	return (
		<View>
			<Text style={{ fontSize: 30 }}>{nama}</Text>
			<Text style={{ fontSize: 30 }}>{umur}</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
