/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {H1} from '../../../../components/Typography/Headings';
import {TextInput} from 'react-native';
import theme from '../../../../constants/theme';
import Layout from '../../../../components/UI/Layout';
import Button from '../../../../components/UI/Button';
import {HomeParamList} from 'typings/Navigation';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {ParagraphSmall} from '../../../../components/Typography/Paragraph';
import {insertPlayer} from '../../../../actions/insertPlayer';
import {getPlayers} from '../../../../actions/getPlayers';
import {AppContext} from '../../../../context/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NameInputContainer = styled.View`
  flex: 1;
  gap: ${theme.spacing20};
  justify-content: center;
  align-items: center;
`;

const NameInputWrapper = styled.View`
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing20};
`;

const Heading = styled(H1)``;

const InputName = styled(TextInput)`
  border: 1px solid ${theme.lightGreen};
  padding: ${theme.spacing10} ${theme.spacing20};
  border-radius: ${theme.borderRadius15};
  font-family: ${theme.UrbanistRegular};
  color: ${theme.lightGreen};
  width: 300px;
`;

const InputPassword = styled(TextInput)`
  border: 1px solid ${theme.lightGreen};
  padding: ${theme.spacing10} ${theme.spacing20};
  border-radius: ${theme.borderRadius15};
  font-family: ${theme.UrbanistRegular};
  color: ${theme.lightGreen};
  width: 300px;
`;

const ButtonWrapper = styled.View`
  width: 50%;
  justify-content: center;
  align-items: center;
`;

const Info = styled(ParagraphSmall)`
  color: ${theme.lightGreen};
  font-family: ${theme.UrbanistRegular};
  text-align: center;
  opacity: 0.4;
  width: 250px;
`;

export default function Login() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    token: '',
  });
  const navigation = useNavigation<NavigationProp<HomeParamList>>();
  const {setPlayers, setUser, players, user} = useContext(AppContext);

  useEffect(() => {
    getPlayers().then(data => {
      if (data) {
        setPlayers(data);
      }
    });
  }, []);

  useEffect(() => {
    if (user !== null) {
      navigation.navigate('Home');
    }
  }, [user]);

  const login = async () => {
    try {
      if (!players) {
        console.error('Error fetching players');
        return;
      }

      const existingPlayer = players.find(
        player =>
          player.name === formData.name &&
          player.password === formData.password &&
          player.token === `${formData.name}:${formData.password}`,
      );

      if (!existingPlayer) {
        const newtoken = `${formData.name}:${formData.password}`;
        formData.token = newtoken;
        // console.log('Inserting player:', formData);
        await insertPlayer({playerData: formData});
        setUser(formData);
      } else {
        // console.log('Existing player:', existingPlayer);
        AsyncStorage.setItem('token', existingPlayer?.token!);
        setUser(existingPlayer);
      }
      navigation.navigate('Home');
    } catch (error) {
      // console.error('Unexpected error:', error);
      // Handle unexpected errors
    }
  };
  return (
    <Layout>
      <NameInputContainer>
        <NameInputWrapper>
          <Heading>What is your name?</Heading>
          <InputName
            placeholder="Enter your name"
            onChangeText={text => setFormData({...formData, name: text})}
            testID="name-input"
            placeholderTextColor={theme.lightGreen}
            inputMode="text"
          />
          <InputPassword
            placeholder="Enter your password"
            testID="password-input"
            onChangeText={text => setFormData({...formData, password: text})}
            placeholderTextColor={theme.lightGreen}
            secureTextEntry
          />
          <Info>
            Password is just used to keep users with the same name separate. The
            password and name are used to keep track of your score.
          </Info>
        </NameInputWrapper>
        <ButtonWrapper>
          <Button center onPress={() => login()} label="Submit" />
        </ButtonWrapper>
      </NameInputContainer>
    </Layout>
  );
}
