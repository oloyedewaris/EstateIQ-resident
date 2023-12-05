import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Container } from '../helper';


const SelectDropdown = ({ error, onChangeText, text, value, data, placeholder, keyboardType, editable, style, ...rest }) => {

  return (
    <Container marginTop={2}>
      <Container width={85}>
        <Container marginBottom={1}>
          <Text>{text}</Text>
        </Container>
        <Dropdown
          style={style || {
            height: 45,
            width: "100%",
            backgroundColor: "#FFFFFF",
            borderRadius: 2,
            paddingLeft: 10,
            borderColor: error ? "#D00000" : "#D9D9D9",
            borderWidth: 1,
          }}
          selectedTextStyle={styles.selectedTextStyle}
          placeholderStyle={{ opacity: 0.5 }}
          data={data}
          maxHeight={500}
          labelField="label"
          valueField="value"
          placeholder={placeholder}
          value={value}
          onChange={onChangeText}
        // {...rest}
        />
        {error && <Text style={{ fontSize: 10, color: '#D00000', fontWeight: '300' }}>{error}</Text>}
      </Container>
    </Container>
  );
};

export default SelectDropdown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});