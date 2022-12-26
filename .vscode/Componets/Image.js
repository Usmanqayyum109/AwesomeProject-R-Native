import React from 'react'
import { ImageBackground, SafeAreaView, View } from 'react-native'

const Image34 = () => {

  const img = {uri : "https://www.t20worldcup.com/news/2907860"};
  return (
    <SafeAreaView>
      <View>
        <ImageBackground source={img} resizeMode = "cover">

        </ImageBackground>
      </View>
    </SafeAreaView>
      
  
  )
}

export default Image34
