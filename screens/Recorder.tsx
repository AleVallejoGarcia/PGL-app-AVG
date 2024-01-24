import { Animated, ImageBackground, StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native'
import { colors } from '../assets/color/Color';
import React, { useEffect } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { saveRecord, removeRecord, getRecords } from '../services/storeService';
export default function Recorder() {

  const [recording, setRecording] = React.useState<Audio.Recording>();
  const [recordings, setRecordings] = React.useState([]);
  const [message, setMessage] = React.useState("");
  const [fadeAnim, setFadeAnim] = React.useState(new Animated.Value(0));
 
  type RecordFile = {
    duration: string,
    uri: string
  }

  React.useEffect(() => {
    const reloadRecords = async () => {
      const records = await getRecords()
      if (records != null) {
        setRecordings(JSON.parse(records))
      }
    }
    reloadRecords()
  }, [])
  
  async function startRecording() {
    {fadeAnimation()}
    try {
      const permission = await Audio.requestPermissionsAsync();
      if (permission.status === "granted") {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true
        });
        const { recording } = await Audio.Recording.createAsync(
          Audio.RecordingOptionsPresets.HIGH_QUALITY
        );
        setRecording(recording);
      } else {
        setMessage("Please grant permission to app to access microphone");
      }

    } catch (error) {
      console.log(error);
    }
  }

  async function stopRecording() {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
  
    let updatedRecordings = [...recordings];
    updatedRecordings.push({
      duration: getDurationFormatted((await recording.getStatusAsync()).durationMillis),
      uri: recording.getURI()
    });  
    setRecordings(updatedRecordings);
    console.log(updatedRecordings);
      
    saveRecord(JSON.stringify(updatedRecordings))
  }
  
  function getDurationFormatted(millis) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  }
  
  
  const playRecordFile = async (recordFile: RecordFile) : Promise<void> => {
    const playbackObject = new Audio.Sound();
    await playbackObject.loadAsync({uri: recordFile.uri})
    await playbackObject.playAsync();
  }
  
  function removeAll() {
    removeRecord();
    setRecordings([])
    saveRecord(JSON.stringify(recording))
  }

  function removeThisRecord(item) {
    let updateRecords = recordings.filter((data) => {
      if (item != data) {
        return data
      } 
    })
    setRecordings(updateRecords)
  }

  const fadeAnimation = () => {
    {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true
        })
        
      ]).start(() => {
        fadeAnimation();
      })
    }
  }
  
  function getRecordingLines() {
    return recordings.map((recordingLine, index) => {
      return (
        <View key={index} style={styles.row}>
          <Pressable onPress={() => {removeThisRecord(recordingLine)}}>
            <MaterialCommunityIcons name={"delete"} size={30} color={colors.Dun} />
          </Pressable>
          <Text style={{...styles.fill, ...styles.text}}>Recording {index + 1} - {recordingLine.duration}</Text>
          <Pressable onPress={() => playRecordFile(recordingLine)}>
            <MaterialCommunityIcons name={"play"} size={30} color={colors.Dun}/>
          </Pressable>
        </View>
      );
    });
  }
  return (
    
    <View style={styles.container}>
      <ImageBackground source={require('./../assets/images/fondoLogged.jpg')} resizeMode="cover" style={styles.image}>
        <View style={styles.textContainer}>
          {recording ? (
            <View>
                <Image style={styles.gif} source={require('./../assets/images/dancing-toothless-tothless.gif')}></Image>
            </View>
          ) : 
            <View>
                <Image source={require('./../assets/images/dragon.png')}></Image>
            </View>
          }
          <View style={styles.recordContainer}> 
            <Pressable style={styles.button} onPress={recording ? stopRecording : startRecording}>
              {recording ? (
                <View>
                  <Animated.Text style={{...styles.buttonText, opacity: fadeAnim}} >Stop recording</Animated.Text>
                </View>
              ) : (
                <Text style={styles.buttonText}>Start Recording</Text>
              )}
            </Pressable>
            {recordings.length > 0 ? (
              <View>
                <Pressable style={styles.button} onPress={() => removeAll()}>
                  <Text style={styles.buttonText}>
                    Delete all
                  </Text>
                </Pressable>
                <ScrollView style={styles.skillList}>
                  {getRecordingLines()}
                </ScrollView>
              </View> 
            ) : (
              <Text style={styles.text} >No records to show</Text>
            )}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 20,
  },
  imagen: {
    marginTop: -20
  },
  recordContainer: {
    height: 300,
    marginTop: 30
  },
  textContainer: {
    width: '70%',
    height: 520,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: colors.Cordovan,
    justifyContent: 'center'
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  gif: {
    width: 78,
    height: 78,
  },
  text: {
    color: colors.Dun,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', 
    marginTop: 20
  },
  skillList: {
    width: 230,
    textAlign: "center",
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fill: {
    flex: 1,
    margin: 14
  },
  button: {
    backgroundColor: colors.Dun,
    color: colors.Black,
    padding: 13,
    alignItems: 'center',
    borderRadius: 15,
    width: '65%',
    alignSelf: 'center',
    marginTop: 10
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16
  }
});