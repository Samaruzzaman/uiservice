// import React from 'react';
import axios from 'axios';
import { ApiConfig } from './ApiConfig'

export default class Api {
    apiUrl: ApiConfig;
    constructor() {
        this.apiUrl = new ApiConfig();
    }
    async getTest() {
        const url = this.apiUrl.testApi;
        return await axios.get(url).then((response)=> {
            console.log(' response >> ', response.data);
            return response.data;
            // return Promise.resolve(response.data);
        }).catch((error)=>{
            console.log(' error >> ', error);
            return error;
            // return Promise.reject(error);
        });
    }

    async signIn(): Promise<any>{
        const url = this.apiUrl.signinApi;
        const data = {
            "userEmailId": 'example@ttt.com',
            "password": '12345@2022'
        }
        try {
            const response = await axios.post(url, data);
            console.log(' response : signIn ', response);
            return Promise.resolve(response.data);
        }
        catch (error) {
            console.log(' error : signIn', error);
            return Promise.reject(error);
        }
        // const response = await axios.post(url, data).then((response)=> {
        //     console.log(' response >> ', response.data);
        //     return response.data;
        //     // return Promise.resolve(response.data);
        // }).catch((error)=>{
        //     console.log(' error >> ', error);
        //     return error;
        //     // return Promise.reject(error);
        // });
    }
}