import React, {useState} from "react";
import MyInput from "./input/MyInput";
import MyButton from "./button/MyButton";

const PostForm = () => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        createImageBitmap(newPost)
        setPost({title: '', body: ''})
    }


    return (
            <form>
                <Myinput 
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    type="text"
                    placeholder="Название поста"
                />
                <Myinput 
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    type="text" 
                    placeholder="Описание поста"
                />
                  <MyButton>onClick={addNewPost}&gt;Создать пост</MyButton>
            </form>
    );
};

export default PostForm;