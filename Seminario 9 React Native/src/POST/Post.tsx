import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { IPost } from '../models/post';

interface CreatePostProps {
    updatePostList: () => void;
}

interface FormErrors {
    [key: string]: string;
}

const CreatePost: React.FC<CreatePostProps> = ({ updatePostList }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [errors, setErrors] = useState<FormErrors>({});

    const Submit = () => {
            const post: IPost = {
                title: title,
                content: content,
                author: author
            };
            axios.post("http://localhost:3000/post", post)
                .then(result => {
                    console.log(result);
                    updatePostList();
                    setTitle('');
                    setContent('');
                    setAuthor('');
                })
                .catch(err => console.error(err));
        
    };

    return (
        <View style={styles.container}>
            <View>
                <TextInput 
                    placeholder="Title"
                    value={title} 
                    style={styles.input} 
                    onChangeText={setTitle}
                />
            </View>
            <View>
                <TextInput 
                    placeholder="Content"
                    value={content} 
                    style={styles.input} 
                    onChangeText={setContent}
                />
            </View>
            <View>
                <TextInput 
                    placeholder="Author"
                    value={author} 
                    style={styles.input} 
                    onChangeText={setAuthor}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Submit" onPress={Submit} color="#007bff" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        width: '100%',
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
    },
    buttonContainer: {
        width: '100%',
        marginTop: 10,
    },
    errorText: {
        color: 'red',
        marginTop: 10,
    },
});

export default CreatePost;
