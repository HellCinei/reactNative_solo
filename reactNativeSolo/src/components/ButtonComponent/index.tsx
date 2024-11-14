import { TouchableOpacity, Text } from "react-native";
import { styles } from "./style";

interface PropsButton {
	texto: string | number;
	corFundo?: string;
	handleFunction?: () => void; 
}

export const ButtonComponent = ({texto, corFundo, handleFunction}: PropsButton) => {
	 

	return (
		<TouchableOpacity
			activeOpacity={0.5}
			style={[styles.botao, {
				backgroundColor: corFundo ? corFundo : "orange"
			}]}
			onPress={handleFunction}
		>
			<Text style={styles.texto}>
				{texto}
			</Text>

		</TouchableOpacity>
	);
};