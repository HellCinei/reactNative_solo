import React from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { styles } from "./style";

export function NavBar() {
	return (
		<View style={styles.container}>
			<View>
				<Icon name="home" type="Entypo" size={30} />
				<Text style={styles.txtIcon}>Início</Text>
			</View>

			<View>
				<Icon name="person-circle-outline" type="ionicon" size={30} />
				<Text style={styles.txtIcon}>Comunidade</Text>
			</View>

			<View>
				<Icon name="plus" type="antdesign" size={30} />
				<Text style={styles.txtIcon}>Criar</Text>
			</View>

			<View>
				<Icon
					name="chatbubble-ellipses-outline"
					type="ionicon"
					size={30}
				/>
				<Text style={styles.txtIcon}>Bate-papo</Text>
			</View>
			
			<View>
				<Icon name="bell" type="octicon" size={30} />
				<Text style={styles.txtIcon}>Notificação</Text>
			</View>
		</View>
	);
}
