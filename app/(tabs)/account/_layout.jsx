
import { useFocusEffect,Stack, router, useSegments } from "expo-router";
import { useCallback } from "react";


const AccountLayout = () => {
    const segments = useSegments();

  useFocusEffect(
    useCallback(() => {
      const isAtNestedRoute = segments[1] !== "account"; // check if deeper than /account

      if (isAtNestedRoute) {
        // Navigate to root of the account tab
        router.replace("/account");
      }
    }, [segments])
  );
    return(
        <Stack screenOptions={{
            headerShown: false
        
        }}/>
    )
}

export default AccountLayout