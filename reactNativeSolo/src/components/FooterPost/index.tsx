import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import { Icon } from 'react-native-elements'

export default function FooterPost() {
  return (
	<View style={styles.footerPost}>
						<View style={styles.votos}>
							<TouchableOpacity style={styles.up}>
								<Icon
									style={styles.icone}
									name="arrow-up-bold-outline"
									type="material-community"
								/>
								<Text>2K+</Text>
							</TouchableOpacity>
							<TouchableOpacity>
							<Icon
								style={styles.icone}
								name="arrow-down-bold-outline"
								type="material-community"
							/>
							</TouchableOpacity>
							<TouchableOpacity style={styles.comentarios}>
								<Text style={styles.comentariosValor}>1k+</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.recompensas}>
							<TouchableOpacity style={styles.award}>
								<Icon style={styles.icone} name="award" type="font-awesome-5"/>
							</TouchableOpacity>
							<TouchableOpacity style={styles.share}>
								<Icon style={styles.icone} name="share-outline" type="material-community"/>
								<Text style={styles.textShare}>0</Text>
							</TouchableOpacity>
						</View>
					</View>
  )
}