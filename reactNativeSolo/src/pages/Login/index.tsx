import React, { useState } from "react";
import {
	Keyboard,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { Icon } from "react-native-elements";
import { ButtonComponent } from "../../components/ButtonComponent";
import { TextInputField } from "../../components/TextInput";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

export function Login() {
	const navigate = useNavigation();

	const goHome = () => {
		navigate.navigate("Home");
	};

	const [email, setEmail] = useState<string>("");
	const [senha, setSenha] = useState<string>("");

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={styles.container}>
				<Text style={styles.titulo}>Log in</Text>
				<Text style={styles.privacy}>
					By continuing, you agree to our
					<Text style={styles.link}> User Agrrment </Text>
					and
					<Text style={styles.link}> Privacy Policy</Text>.
				</Text>

				<View style={styles.login}>
					<TouchableOpacity style={styles.botao} activeOpacity={0.5}>
						<Icon
							name="google"
							type="font-awesome"
							size={30}
							style={styles.botaoIcone}
						/>
						<Text style={styles.botaoTexto}>
							Continue with Google
						</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.botao} activeOpacity={0.5}>
						<Icon
							name="apple"
							type="font-awesome"
							size={30}
							style={styles.botaoIcone}
						/>
						<Text style={styles.botaoTexto}>
							Continue with Apple
						</Text>
					</TouchableOpacity>

					<View style={styles.divisor}>
						<View style={styles.linha} />
						<Text style={styles.textDiv}> OR </Text>
						<View style={styles.linha} />
					</View>

					<TextInputField
						placeHolder={"Usuário"}
						valueInput={email}
					/>
					<TextInputField
						placeHolder={"Senha"}
						valueInput={senha}
						typeInput={true}
					/>
				</View>

				<Text style={styles.info}>
					Forgot your
					<Text style={styles.link}> username </Text>
					or
					<Text style={styles.link}> password</Text>?
				</Text>

				<ButtonComponent handleFunction={goHome} texto="Log in" />

				<Text style={styles.info}>
					New to Reddit?
					<Text style={styles.link}> Sign Up </Text>
				</Text>
			</View>
		</TouchableWithoutFeedback>
	);
}
