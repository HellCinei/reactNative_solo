import { TextInput } from "react-native";
import { styles } from "./style";

export const TextInputField = ({
	placeHolder,
	typeInput,
	valueInput,
}: PropsInput) => {
	return (
		<TextInput
			style={styles.input}
			placeholder={placeHolder}
			placeholderTextColor={"#999"}
			secureTextEntry={typeInput}
			value={valueInput}
		/>
	);
};
