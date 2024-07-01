import { View, Text, Button } from 'react-native'
import React from 'react'
import ParallaxScrollView from '@/components/ParallaxScrollView'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

export default function accounts() {
  return (
    <SafeAreaView>
        <Link href="/hello">Hello</Link>
    </SafeAreaView>
  )
}