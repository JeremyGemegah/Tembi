import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import RideItem from '../../components/Rideitem'
import RideDetails from '../../components/Ridedetails'
import CircleTimer from '../../components/circleTimer'


const Rides = () => {

  const [modalVisible, setModalVisible] = useState(false)
  const [selectedRide, setSelectedRide] = useState('')

  const onClose = () => {
    setModalVisible(false)
  }

  const openModal = (name) => {
    setSelectedRide(name)
    setModalVisible(true)
  }

  const rides = [{
    name: 'Parade Grounds Station'
    ,price: 0.76
    ,date: '3 Feb'
    ,time: '03:29 pm'
  },{
    name: 'Engineering Station'
    ,price: 0.65
    ,date: '2 Feb'
    ,time: '03:29 pm'
  },{
    name: 'KSB Station'
    ,price: 0.58
    ,date: '30 Jan'
    ,time: '03:29 pm'
  },{
    name: 'Parade Grounds Station'
    ,price: 0.86
    ,date: '30 Jan'
    ,time: '03:29 pm'
  },{
    name: 'Brunei Station'
    ,price: 0.26
    ,date: '30 Jan'
    ,time: '03:29 pm'
  },{
    name: 'KSB Station'
    ,price: 1.08
    ,date: '29 Jan'
    ,time: '03:29 pm'
  },{
    name: 'Brunei Station'
    ,price: 0.36
    ,date: '28 Jan'
    ,time: '03:29 pm'
  },{
    name: 'KSB Station'
    ,price: 0.77
    ,date: '27 Jan'
    ,time: '03:29 pm'
  },{
    name: 'Pharmacy Building Station'
    ,price: 0.41
    ,date: '27 Jan'
    ,time: '03:29 pm'
  },{
    name: 'Brunei Station'
    ,price: 0.91
    ,date: '27 Jan'
    ,time: '03:29 pm'
  }]

  const yesterday = rides.slice(0,2)
  const later = rides.slice(2,5)
  const older = rides.slice(5)
  return (
   
    <SafeAreaView>
      <ScrollView className="bg-neutral-10 h-full">
        <View style={{flex:1}} className='px-[16px] pb-[100]' >
          <View className='pb-[8px] mb-[21px]'><Text className='font-pregular text-[18px] text-secondary-950 pt-[21px] '>Rides</Text></View>
          
          <View>
            
            
            <View className="gap-[8px]">
              <View className='px-[8px]'><Text className='font-pregular text-[14px] text-neutral-70'>Yesterday</Text></View>
              {yesterday.map((item,index) => (
                <RideItem key={index} place={item.name} time={item.time} date={item.date} price={item.price} onPress={()=> openModal(item.name)} />
              ))}
            </View>
            
            
            <View className="gap-[8px]">
              <View className='px-[8px]'><Text className='font-pregular text-[14px] text-neutral-70'>Last 7 Days</Text></View>
              {later.map((item,index) => (
                <RideItem key={index} place={item.name} time={item.time} date={item.date} price={item.price} onPress={()=> openModal(item.name)}/>
              ))}
            </View>
            
            
            <View className="gap-[8px]">
              <View className='px-[8px]'><Text className='font-pregular text-[14px] text-neutral-70'>Older</Text></View>
              {older.map((item,index) => (
                <RideItem key={index} place={item.name} time={item.time} date={item.date} price={item.price} onPress={()=> openModal(item.name)}/>
              ))}
            </View>
          
          </View>
        </View>
        <RideDetails visibility={modalVisible} onClose={onClose} title={selectedRide} />
      </ScrollView>
    </SafeAreaView>
   
  )
}

export default Rides