import { TouchableOpacity, Text } from "react-native";
import { styles } from "./style";

interface PropsButton {
	texto: string | number;
	corFundo?: string;
}

export const ButtonComponent = ({texto, corFundo, }: PropsButton) => {
	 

	return (
		<TouchableOpacity
			activeOpacity={0.5}
			style={[styles.botao, {
				backgroundColor: corFundo ? corFundo : "orange"
			}]}
		>
			<Text style={styles.texto}>
				{texto}
			</Text>

		</TouchableOpacity>
	);
};