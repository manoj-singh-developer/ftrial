import React, { Component } from 'react';
import { AsyncStorage } from 'AsyncStorage';

export const KEY = "rickyfiguresitout";

 

export const onSignIn = () => AsyncStorage.setItem(KEY, "true");
// set storage to hold key as TRUE

export const setStorage = (data) => AsyncStorage.setItem('data', JSON.stringify(data));
export const setStorages = (data) => AsyncStorage.setItem('data', data);
// set storage to hold user data

export const onSignOut = () => AsyncStorage.getItem('userId').then(data => {
			
            AsyncStorage.removeItem(KEY);
			AsyncStorage.removeItem('userId');
		 
        });
//if user signs out, remove TRUE key



export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(KEY)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};