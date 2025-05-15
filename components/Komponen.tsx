import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Komponen({ nama, umur }) {
	return (
		<View>
			<Text>Komponen</Text>
			<Text>Nama: {nama}</Text>
			<Text>Umur: {umur}</Text>
		</View>
	);
}

const styles = StyleSheet.create({});
