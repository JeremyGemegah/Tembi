import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Onboarding = () => {
  return (
    <>
    <Stack>
        <Stack.Screen
            name="onboarding-screens"
            options={{
                headerShown: false
            }}
            
        />
    </Stack>
    </>
  )
}

export default Onboarding