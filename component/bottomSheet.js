import React, { forwardRef } from "react";
import { SafeAreaView } from 'react-native';
import RBSheet from "react-native-raw-bottom-sheet";



const BottomSheet = forwardRef(({ children, height }, ref) => {
  return (
    <RBSheet
      ref={ref}
      closeOnDragDown
      closeOnPressMask
      keyboardAvoidingViewEnabled
      dragFromTopOnly
      animationType="fade"
      height={height ? height : 320}
      customStyles={{
        wrapper: { backgroundColor: 'rgba(0, 0, 0, 0.2)' },
        container: {
          backgroundColor: "#fff",
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20
        },
        draggableIcon: { backgroundColor: "#000" }
      }}>
      <SafeAreaView style={{ justifyContent: 'center', height: '100%' }}>
        {children}
      </SafeAreaView>
    </RBSheet>
  );
})

export default BottomSheet;