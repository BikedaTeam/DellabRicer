import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { EdgeInsets, useSafeArea } from 'react-native-safe-area-context';
import { Button, Layout, LayoutElement } from '@ui-kitten/components';
import { Formik, FormikProps } from 'formik';
import { InitPassScreenProps } from '../../navigation/auth.navigator';
import { AppRoute } from '../../navigation/app-routes';
import { FormInput } from '../../components/form-input.component';
import { Toolbar } from '../../components/toolbar.component';
import { ResetPasswordData, ResetPasswordSchema } from '../../data/reset-password.model';

export const InitPassScreen = (props: InitPassScreenProps): LayoutElement => {

  const insets: EdgeInsets = useSafeArea();

  const onFormSubmit = (values: ResetPasswordData): void => {
    navigateSignIn();
  };

  const navigateSignIn = (): void => {
    props.navigation.navigate(AppRoute.LOGIN);
  };

  const renderForm = (props: FormikProps<ResetPasswordData>): React.ReactFragment => (
    <React.Fragment>
      <FormInput
        id='id'
        style={styles.formControl}
        placeholder="아이디"
        keyboardType='number-pad'
      />
      <FormInput
        id='phoneNum'
        style={styles.formControl}
        placeholder="휴대폰 번호 ('-'없이)"
        keyboardType='number-pad'
      />
      <Button
        style={styles.button}
        onPress={props.handleSubmit}>
        인증번호 받기
      </Button>
      <FormInput
        id='authNum'
        style={styles.formControl}
        placeholder="인증번호"
        keyboardType='number-pad'
      />

      <Button
        style={styles.button}
        onPress={props.handleSubmit}>
        인증
      </Button>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ImageBackground
        style={[styles.appBar, { paddingTop: insets.top }]}
        source={require('../../assets/image-background.jpeg')}>
        <Toolbar
          appearance='control'
          onBackPress={props.navigation.goBack}
        />
      </ImageBackground>
      <Layout style={styles.formContainer}>
        <Formik
          initialValues={ResetPasswordData.empty()}
          validationSchema={ResetPasswordSchema}
          onSubmit={onFormSubmit}>
          {renderForm}
        </Formik>
      </Layout>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  appBar: {
    height: 192,
  },
  formContainer: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  formControl: {
    marginVertical: 4,
  },
  button: {
    marginVertical: 10,
  },
});
