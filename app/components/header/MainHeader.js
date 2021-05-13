import React from 'react'
import {View} from 'react-native'
import {Header} from 'react-native-elements'
import MenuToggle from './MenuToggle'
import HeaderTitle from './HeaderTitle'
import HeaderRightIcon from './HeaderRightIcon'


const MainHeader = () => {
  return (
    <View>
      <Header
        placement="left"
        leftComponent={<MenuToggle />}
        centerComponent={<HeaderTitle text="Checkout"/>  }
        rightComponent={<HeaderRightIcon />}
        containerStyle={{
          backgroundColor: '#26B1B1',
        }}
      />
    </View>
  )
}

export default MainHeader
