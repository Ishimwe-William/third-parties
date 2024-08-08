import React, {useState} from "react";
import {ScrollView, Text} from 'react-native';
import axios from "axios";
import {CircleLogo} from "../components/CircleLogo";
import {UserInput} from "../components/UserInput";
import {SubmitButton} from "../components/SubmitButton";
import {TermsPolicyLink} from "../components/TermsPolicyLink";
import {SignupWith3rdPartiesButton} from "../components/SignupWith3rdPartiesButton";
import {LineTextLine} from "../components/LineTextLine";
import {TermsPolicyModal} from "../components/TermsPolicyModal";
import {SafeAreaView} from "react-native-safe-area-context";

export const SignupScreen = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isHidden, setIsHidden] = useState(true);
    const [isTermsVisible, setIsTermsVisible] = useState(false);

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
            })
            console.log("SIGN IN SUCCESS => ", data);
            alert("Sign up successful");
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <SafeAreaView>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: "center",
                }}>
                <CircleLogo source={require('../images/icon_image.png')} />
                <Text style={{fontSize:34, textAlign:"center"}}>Sign Up</Text>
                <UserInput
                    name="NAME"
                    value={name}
                    setValue={setName}
                    autoCapitalize={"words"}
                />
                <UserInput
                    name="EMAIL"
                    value={email}
                    setValue={setEmail}
                    autoComplete={'email'}
                    keyboardType={"email-address"}
                />
                <UserInput
                    name="PASSWORD"
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
                    handleSubmit={() => console.log('google signup')}
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
                onAgree={()=> {
                    setIsTermsVisible(false);
                    console.log('Agreed terms');
                }}
            />
        </SafeAreaView>
    )
}
