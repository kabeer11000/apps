import {View} from "react-native";
import React, {Fragment, useEffect, useState} from "react";
import ApplicationListItem from "@Components/ApplicationListItem/ApplicationListItem";

export interface SimilarAppsProps {
    id: string
}

const ChunkArray = (inputArray: Array<any>, perChunk: number = 2) => inputArray.reduce((resultArray: Array<any>, item: any, index: number) => {
    const chunkIndex = Math.floor(index/perChunk)

    if(!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [] // start a new chunk
    }

    resultArray[chunkIndex].push(item)

    return resultArray
}, [])
export default function SimilarApps({id}: SimilarAppsProps) {
    const [state, setState] = useState({response: null, error: false, loading: false});
    useEffect(() => {
        setState({...state, loading: true});
        fetch('https://kabeers-papers-pdf2image.000webhostapp.com/kabeer-chats-storage/tests/appstore/deployment/api/src/similar/' + id + '?cache=&l=4').then(res => res.ok ? res.json() : null).then(response => {
            setState({...state, response, error: !response, loading: false});
        }).catch(() => setState({...state, error: true, response: null, loading: false}));
    }, []);
    return (
        <View>
            {(state.response && !state.loading && !state.error) && (
                <Fragment>
                    {ChunkArray(state.response).map(([a, b], index) => (
                        <View key={index + a.id + b.id} style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
                            <View style={{width: '50%'}}><ApplicationListItem secondary={a.developerName} overline={`${Math.round(parseFloat(a.score) * 10) / 10} Stars`} title={a.name} icon={a.icon} id={a.id}/></View>
                            <View style={{width: '50%'}}><ApplicationListItem secondary={b.developerName} overline={`${Math.round(parseFloat(b.score) * 10) / 10} Stars`} title={b.name} icon={b.icon} id={b.id}/></View>
                        </View>
                    ))}
                </Fragment>
            )}
        </View>
    )
}