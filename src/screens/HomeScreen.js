import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { askOpenAI } from "../services/openai";

export default function HomeScreen() {
  const [text, setText] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = async () => {
    const res = await askOpenAI(text);
    setReply(res.choices[0].message.content);
  };

  return (
    <View style={{ padding: 20, marginTop: 60 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Wantok-AI
      </Text>

      <TextInput
        placeholder="Ask in Tok Pisin or English..."
        value={text}
        onChangeText={setText}
        style={{ borderWidth: 1, marginTop: 20, padding: 10 }}
      />

      <Button title="Send" onPress={sendMessage} />

      <Text style={{ marginTop: 20 }}>{reply}</Text>
    </View>
  );
}
