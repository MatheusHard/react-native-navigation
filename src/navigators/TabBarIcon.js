/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

function TabBarIcon(props)
{
    let badgeCount = 5;
    let imgSource = null;

    switch(props.name){
        case 'TabHome':
            imgSource = require('../assets/home.png');
        break;
        case 'TabAbout':
            imgSource = require('../assets/interface.png')
        break; 
    }
    return(

        <View>

               <Image source={imgSource} style={styles.icon}/>
                {badgeCount > 0 &&
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{badgeCount}</Text>
                </View>
                }
        </View>
    ) 
    
    }

    const styles = StyleSheet.create({

        icon: {
            width: 24, height: 24

        },
        badge: {
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: '#FF0000',
            width: 15,
            height: 15,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center'
        },
        badgeText:{
            color: '#FFF',
            fontSize: 10
        }
    })
export default TabBarIcon;