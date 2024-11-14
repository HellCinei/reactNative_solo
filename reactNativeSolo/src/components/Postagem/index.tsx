import React from "react";
import { FlatList, Image, Text, View } from "react-native";
import { DataPosts } from "../../Mock/Data";
import FooterPost from "../FooterPost";
import { styles } from "./style";

export default function Postagem() {
	return (
		<FlatList
			data={DataPosts}
			keyExtractor={(dados) => dados.id.toString()}
			renderItem={({ item }) => (
				<View style={styles.cardPost}>
					<View style={styles.container}>
						<View style={styles.perfilPost}>
							<Image
								style={styles.perfilImg}
								source={item.perfil}
							/>
							<Text style={styles.nome}>{item.nome}</Text>
							<Text style={styles.hora}>{item.hora}</Text>
						</View>
						<Text style={styles.txtPost}>{item.texto}</Text>
						{item.conteudo && (
							<Image
								style={styles.imgPost}
								source={item.conteudo}
								alt="Post img"
							/>
						)}
						<FooterPost />
					</View>
				</View>
			)}
		/>
	);
}
