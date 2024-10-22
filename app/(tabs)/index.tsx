import {
  Image,
  StyleSheet,
  Platform,
  SafeAreaView,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>Welcome to SO.</Text>
      </SafeAreaView>
      <View
        style={{
          flexDirection: `column`,
          marginTop: 14,
          alignItems: `center`,
        }}
      >
        <Text style={styles.logins}>Login with Google</Text>
        <Text style={styles.logins}>Login with Apple</Text>
        <Text style={styles.logins}>Login with Facebook</Text>
      </View>
      <Text
        style={{
          textAlign: `center`,
        }}
      >
        or by email
      </Text>
      <View
        style={{
          marginVertical: 20,
        }}
      >
        <TextInput
          style={styles.input}
          // onChangeText={onChangeText}
          keyboardType="email-address"
          placeholder="enter email"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          // onChangeText={onChangeText}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <Text
          style={{
            marginLeft: 190,
            marginTop: -17,
          }}
        >
          forget password?
        </Text>

        <TouchableOpacity style={styles.button} activeOpacity={0.4}>
          <Text style={{ color: `white`, fontWeight: '400' }}>Click me</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 13, textAlign: "center", marginTop: 10 }}>
          Don,t Have an account{" "}
          <Text
            style={{
              color: `#3B82F6`,
              fontWeight: '900',
              textDecorationLine: `underline`,
            }}
          >
            ?Create an account
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
flex: 1,
flexDirection: `column`,
// padding: 10,
justifyContent: `center`,
// marginVertical: 300,
  },
  title: {
    fontSize: 20,
    textDecorationLine: `underline`,
    fontWeight: '700',
    textAlign: `center`,
  },
  logins: {
    width: 200,
    // flex: 0.3,
    // marginHorizontal: 340,
    marginVertical: 10,
    padding: 10,
    gap: 30,
    backgroundColor: `white`,
    borderRadius: 10,
  },
  input: {
    justifyContent: `center`,
    alignItems: `center`,
    width: 200,
    height: 40,
    marginHorizontal:93,

    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    // marginHorizontal: 130,
    borderRadius: 10,
    backgroundColor: `white`,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#3B82F6",
    // padding: 10,
    width: 200,
    textAlign: `center`,
    // flex: 1,
    padding: 20,
    justifyContent: 'center',
    marginHorizontal: 93,
    borderRadius: 10,
    marginTop: 30,
    color: `white`,
  },
});








// import {
//   Image,
//   StyleSheet,
//   Platform,
//   SafeAreaView,
//   Text,
//   View,
//   TextInput,
//   Button,
//   TouchableOpacity,
// } from "react-native";

// export default function HomeScreen() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View>
//         <Text style={styles.title}>Welcome to SO.</Text>
//       </View>
      
//       <View style={styles.loginOptions}>
//         <TouchableOpacity style={styles.logins}>
//           <Text style={styles.loginText}>Login with Google</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.logins}>
//           <Text style={styles.loginText}>Login with Apple</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.logins}>
//           <Text style={styles.loginText}>Login with Facebook</Text>
//         </TouchableOpacity>
//       </View>
      
//       <Text style={styles.centeredText}>or by email</Text>
      
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           // onChangeText={onChangeText}
//           keyboardType="email-address"
//           placeholder="Enter email"
//           autoCapitalize="none"
//         />
//         <TextInput
//           style={styles.input}
//           // onChangeText={onChangeText}
//           placeholder="Password"
//           autoCapitalize="none"
//           secureTextEntry={true}
//         />
        
//         <Text style={styles.forgotPassword}>Forgot password?</Text>

//         <TouchableOpacity style={styles.button} activeOpacity={0.4}>
//           <Text style={styles.buttonText}>Click me</Text>
//         </TouchableOpacity>

//         <Text style={styles.accountText}>
//           Don't Have an account{" "}
//           <Text style={styles.createAccountText}>?Create an account</Text>
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 24,
//     textDecorationLine: 'underline',
//     fontWeight: '700',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   loginOptions: {
//     flexDirection: 'column',
//     marginTop: 14,
//     alignItems: 'center',
//   },
//   logins: {
//     width: 200,
//     padding: 15,
//     marginVertical: 10,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 5, // Android shadow support
//   },
//   loginText: {
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   centeredText: {
//     textAlign: 'center',
//     marginVertical: 20,
//     fontSize: 16,
//   },
//   inputContainer: {
//     marginVertical: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     paddingHorizontal: 10,
//     borderRadius: 10,
//     backgroundColor: 'white',
//     marginBottom: 20,
//     marginHorizontal: 40,
//   },
//   forgotPassword: {
//     textAlign: 'right',
//     marginRight: 40,
//     marginBottom: 20,
//     color: '#3B82F6',
//   },
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#3B82F6',
//     padding: 10,
//     marginHorizontal: 40,
//     borderRadius: 10,
//     marginTop: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: '700',
//   },
//   accountText: {
//     fontSize: 13,
//     textAlign: 'center',
//     marginTop: 30,
//   },
//   createAccountText: {
//     color: '#3B82F6',
//     fontWeight: '900',
//     textDecorationLine: 'underline',
//   },
// });
