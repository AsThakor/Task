import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Pressable } from 'react-native';
import { fonts } from '../../assets/fonts/fonts';
import { newsData } from "../../assets/data/newsdata";
import Comment from '../components/Comment';

export default function Reaction() {
  const sendComment = () => {
    <Comment />
  }
  console.log("data is ", newsData)
  return (
    <View>
      <Pressable onPress={sendComment}>
        <View style={styles.container}>
          <Image style={styles.mention} source={require("../../assets/images/mentions.png")} />
          <Text style={styles.mentionText}>215</Text>
          <Image style={styles.comments} source={require("../../assets/images/comment.png")} />
          <Text style={styles.commentText}>95k</Text>
          <Image style={styles.topImg} source={require("../../assets/images/top.png")} />
        </View>
        <FlatList
          data={newsData}
          renderItem={({ item, index }) => (
            <View style={styles.listWrapper}>
              <Image style={styles.avtar} source={{ uri: item.imageUrl }} />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          )}
        />
        <View style={{ flexDirection: "row", marginHorizontal: 20, }}>
          <Text style={{ fontSize: 12, color: "#999999", fontFamily: fonts.heading, fontWeight: "400px", marginLeft: 34, marginRight: 100 }}>Add comment...</Text>
          <Image style={styles.imoji} source={require("../../assets/images/smile.png")} />
          <Image style={styles.imoji} source={require("../../assets/images/cry.png")} />
          <Image style={styles.imoji} source={require("../../assets/images/plus.png")} />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20
  },
  mention: {
    height: 21,
    width: 21
  },
  comments: {
    height: 18,
    width: 18,
  },
  mentionText: {
    fontFamily: fonts.heading,
    fontSize: 18,
    color: "#687684",
    fontWeight: "500px",
    marginLeft: 8,
    marginRight: 22
  },
  commentText: {
    fontFamily: fonts.heading,
    fontSize: 18,
    color: "#687684",
    fontWeight: "500px",
    marginLeft: 8
  },
  topImg: {
    alignItems: 'flex-end',
  },
  listWrapper: {
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: "row",
  },
  avtar: {
    height: 34,
    width: 34,
    borderRadius: 40,
    borderColor: "#000000",
    marginRight: 10
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 14,
    color: "#000000",
    fontWeight: "400px"
  },
  description: {
    flex: 1,
    fontFamily: fonts.heading,
    fontSize: 13,
    color: "#000000",
    fontWeight: "400px"
  },
  imoji: {
    height: 25,
    width: 24,
    marginLeft: 10
  }
})