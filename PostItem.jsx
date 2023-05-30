import React from 'react';

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.posts.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
                <div className="post__btns">
                <MyButton onClick={() => props.remove(props.post)}>
                    Удалить
                </MyButton>
                <Link to={`/posts/${props.post.id}`}>
                    <MyButton post={props}>
                            Открыть
                        </MyButton>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PostItem;