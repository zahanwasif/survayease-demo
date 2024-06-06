import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function App() {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior="height" className="flex">
        <ScrollView>
          <View className="flex flex-row w-screen justify-between border-b-[1px] border-gray-400">
            <Image source={require("./assets/logo.png")} />
            <View className="px-10 gap-5 flex items-center flex-row">
              <TouchableOpacity className="bg-gray-300 p-3 rounded">
                <Text>Existing Projects</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-gray-300 p-3 rounded">
                <Text>Home</Text>
              </TouchableOpacity>
              <Image source={require("./assets/profile.png")} />
            </View>
          </View>
          <View className="flex flex-row w-screen items-center justify-between border-b-[1px] border-gray-400 px-8 h-16">
            <Text className="text-xl font-bold">Create Project Structure</Text>
            <TouchableOpacity className="bg-black p-3 rounded">
              <Text className="text-white">Import Project</Text>
            </TouchableOpacity>
          </View>
          <View className="w-screen px-8 py-5">
            <Text className="text-xl font-bold">Project Name</Text>
            <TextInput
              className="w-full border-[1px] border-gray-400 h-14 mt-2 rounded-lg px-5"
              placeholder="Enter project name"
            />
            <Text className="text-xl font-bold mt-6">Project Type</Text>

            <View className="w-96 border-[1px] border-gray-400 mt-2 rounded-lg px-2">
              <Picker>
                <Picker.Item label="Java" value="java" />
              </Picker>
            </View>

            <View className="flex flex-row mt-8 justify-between items-center">
              <View className="flex flex-row gap-2 items-center">
                <Image source={require("./assets/profile.png")} />
                <View>
                  <Text className="font-bold text-lg">Project Owner</Text>
                  <Text className="text-sm text-gray-500">
                    Select owner from list
                  </Text>
                </View>
              </View>
              <TouchableOpacity className="p-2 rounded border-[1px] border-black">
                <Text className="text-black">Change Owner</Text>
              </TouchableOpacity>
            </View>
            <View className="flex flex-row mt-8 justify-between items-center">
              <View className="flex flex-row gap-3 items-center">
                <Image
                  source={require("./assets/facebook.png")}
                  className="h-7 w-7"
                />
                <View>
                  <Text className="font-bold text-lg">Question 1</Text>
                  <Text className="text-sm text-gray-500">
                    What type of construction project are you planning?
                  </Text>
                </View>
              </View>
              <View>
                <Text className="font-bold text-lg">Location</Text>
                <TextInput
                  className="border-[1px] border-gray-400 h-10 mt-2 rounded-lg px-5 w-60"
                  placeholder="Enter project name"
                />
              </View>
              <View>
                <Text>Project Size</Text>
                <View className="flex flex-row gap-2 mt-1">
                  <TouchableOpacity className="bg-gray-300 p-3 rounded">
                    <Text className="text-black">Small</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="bg-gray-300 p-3 rounded">
                    <Text className="text-black">Medium</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="bg-gray-300 p-3 rounded">
                    <Text className="text-black">Large</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View className="border-t-[1px] border-gray-300 mt-3 w-[450px]"></View>
            <View className="flex flex-row gap-3 items-center mt-3">
              <Image
                source={require("./assets/facebook.png")}
                className="h-7 w-7"
              />
              <View>
                <Text className="font-bold text-lg">Due Date</Text>
                <Text className="text-sm text-gray-500">
                  Set project deadline
                </Text>
              </View>
            </View>
            <View className="border-t-[1px] border-gray-300 mt-3 w-[800px]"></View>
            <View className="flex flex-row px-5 gap-5 w-full mt-3">
              <TouchableOpacity className="flex flex-row gap-4 rounded-lg border-[1px] border-gray-300 h-16 w-60">
                <Image
                  source={require("./assets/facebook.png")}
                  className="h-7 w-7"
                />
                <Text className="text-lg font-bold">Design</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex flex-row gap-4 rounded-lg border-[1px] border-gray-300 h-16 w-60">
                <Image
                  source={require("./assets/facebook.png")}
                  className="h-7 w-7"
                />
                <Text className="text-lg font-bold">Development</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
