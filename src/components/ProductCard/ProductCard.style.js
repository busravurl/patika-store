import { StyleSheet, Dimensions } from 'react-native';


export default StyleSheet.create({
    
    container:{
        flex: 1,
        backgroundColor: '#eceff1',
        margin: 10,
        padding:15,
        borderRadius: 10,
        
    },
    innerContainer: { 
        padding:5,
    },
    
    image:{
        height: Dimensions.get('window').height /4,
        resizeMode: 'contain',
        width: '100%',
        borderRadius: 10,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18,
        //textAlign: 'left',
    },
    price:{
        textAlign: 'left',
        fontSize: 16,
    },
    stock:{
        textAlign: 'left',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 16,
        color: `#ff0000`,
    },

});