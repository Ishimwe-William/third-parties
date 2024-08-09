import React, {useEffect, useState} from "react";
import {Button, ScrollView, Text, StyleSheet} from 'react-native';
import axios from "axios";
import {CircleLogo} from "../components/CircleLogo";
import {UserInput} from "../components/UserInput";
import {SubmitButton} from "../components/SubmitButton";
import {TermsPolicyLink} from "../components/TermsPolicyLink";
import {SignupWith3rdPartiesButton} from "../components/SignupWith3rdPartiesButton";
import {LineTextLine} from "../components/LineTextLine";
import {TermsPolicyModal} from "../components/TermsPolicyModal";
import {SafeAreaView} from "react-native-safe-area-context";
import {
    GoogleSignin,
} from "@react-native-google-signin/google-signin";
import {ErrorPopupMessage} from "../components/ErrorPopupMessage";

export const SignupScreen = ({navigation}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isHidden, setIsHidden] = useState(true);
    const [isTermsVisible, setIsTermsVisible] = useState(false);
    const [error, setError] = useState();
    const [userInfo, setUserInfo] = useState({});
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        GoogleSignin.configure({
            webClientId:
                "336810376008-pam92g8uktfqvno2hvraer45763a5687.apps.googleusercontent.com",
        });
    }, []);

    const signin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const user = await GoogleSignin.signIn();
            setUserInfo(user);
        } catch (e) {
            setError(e);
        }
    };

    const logout = () => {
        setUserInfo({});
        GoogleSignin.revokeAccess();
        GoogleSignin.signOut();
    };

    useEffect(() => {
        if (error) {
            setShowError(true);
        }
        setTimeout(() => {
            setShowError(false);
        }, 7000);
    }, [error])



    const handleSubmit = async () => {
        setIsLoading(true);

        if (!name || !email || !password) {
            alert("All fields are required");
            setIsLoading(false);
            return;
        }

        try {
            const {data} = await axios.post("http://localhost:8000/api/signup", {
                name,
                email,
                password,
            });
            console.log("SIGN IN SUCCESS => ", data);
            alert("Sign up successful");
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <ErrorPopupMessage text={JSON.stringify(error)} visible={showError}/>
            <ScrollView
                contentContainerStyle={styles.scrollViewContainer}>
                <CircleLogo source={require('../images/icon_image.png')}/>
                <Text style={styles.headerText}>Sign Up</Text>
                {userInfo && <Text>{JSON.stringify(userInfo.user)}</Text>}
                <UserInput
                    name="Name"
                    value={name}
                    setValue={setName}
                    autoCapitalize={"words"}
                />
                <UserInput
                    name="Email"
                    value={email}
                    setValue={setEmail}
                    autoComplete={'email'}
                    keyboardType={"email-address"}
                />
                <UserInput
                    name="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={isHidden}
                    autoComplete={"new-password"}
                    setIsHidden={setIsHidden}
                    isHidden={isHidden}
                />

                <SubmitButton title={"Sign Up"} handleSubmit={handleSubmit} loading={isLoading}/>
                <LineTextLine text={'Or'}/>
                <SignupWith3rdPartiesButton
                    source={require('../images/google-logo-6278331_640.png')}
                    title={'Sign up with Google'}
                    handleSubmit={signin}
                    loading={false}
                />
                <SignupWith3rdPartiesButton
                    source={require('../images/github-6980894_640.png')}
                    title={'Sign up with Github'}
                    handleSubmit={() => console.log('github signup')}
                    loading={false}
                />
                <TermsPolicyLink title={'Terms & Policy'} onClick={() => setIsTermsVisible(true)}/>
            </ScrollView>
            <TermsPolicyModal
                visible={isTermsVisible}
                onClose={() => setIsTermsVisible(false)}
                onAgree={() => {
                    setIsTermsVisible(false);
                    console.log('Agreed terms');
                }}
            />
            {userInfo && (
                <Button title="Logout" onPress={logout}/>
            )}
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: "center",
    },
    headerText: {
        fontSize: 34,
        textAlign: "center",
        marginBottom: 20,
    }
});
