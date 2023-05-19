import React, {FC, useEffect, useState} from 'react';
import {View} from "react-native";
import ApplicationListItem from "@Components/ApplicationListItem/ApplicationListItem";
import {Center} from "@Components/Layout/Center";
import {Icon, Text} from "@react-native-material/core";
import Spinner from "@Components/Spinner";


interface AppsProps {
    loadCount?: number
}

const Apps: FC<AppsProps> = ({loadCount}) => {
    const [state, setState] = useState({response: null, loading: false, error: false});
    useEffect(() => {
        setState({...state, loading: true});
        fetch('https://kabeers-papers-pdf2image.000webhostapp.com/kabeer-chats-storage/tests/appstore/deployment/api/src/search/apps?l=5').then(res => res.ok ? res.json() : null).then(response => {
            setState({...state, response, error: !response, loading: false});
            // console.log(response)
        }).catch((e) => {
            // console.log(e)
            setState({...state, error: true, response: null, loading: false})
        });
    }, []);
    return (
        <View contentContainerStyle={{flexGrow: 1}}>
            {(state.response && !state.loading && !state.error) && [...state.response].map((a) => <ApplicationListItem
                secondary={a.developerName} overline={`${Math.round(parseFloat(a.score) * 10) / 10} Stars`}
                title={a.name} icon={a.icon} key={Math.random()} id={a.id}/>)}
            {(!state.loading && state.error) && (
                <Center><Icon size={50} name={'error'}/><Text style={{marginTop: 20}} color={"red"} variant={"body1"}>Error
                    loading apps</Text></Center>)}
            {(state.loading && !state.error && !state.response) && (<Center><Spinner/></Center>)}
        </View>
    );
}

export default Apps;
