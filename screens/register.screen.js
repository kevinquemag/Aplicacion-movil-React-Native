import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  AuthBackground,
  AuthButton,
  AuthInput,
  AuthCover,
} from '../components/Auth/auth.styles';
import {Title, SpacerBottom, DefaultText} from '../constants';

export const RegisterScreen = ({navigation}) => {
  return (
    <AuthBackground>
      <AuthCover>
        <Title> Registro </Title>
        <SpacerBottom />
        <AuthInput
          label="Usuario"
          textContentType="User-Name"
          keyboardType="User-Name"
          autoCapitalize="none"
        />
        <AuthInput label="Contraseña" secureTextEntry />
        <AuthInput label="Confirmar Contraseña" secureTextEntry />
        <SpacerBottom />
        <AuthButton onPress={() => navigation.navigate('Login')}>
          {' '}
          Registrarse
        </AuthButton>
        <SpacerBottom />
        <DefaultText>
          Usted ya tiene cuenta?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text> Login </Text>
          </TouchableOpacity>{' '}
        </DefaultText>
      </AuthCover>
    </AuthBackground>
  );
};
