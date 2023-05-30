import React, {useEffect, useRef, useState} from 'react';
import Counter from "./components/Counter"; 
import ClassCounter from './components/ClassCounter';
import './styles/App.css';
import PostList from './components/PostList';
import PostItem from './components/PostItem';
import PostForm from "./components/PostForm";
import PostFilter from './components/UI/select/PostFilter';
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/MyModal/MyModal";
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';
import {usePageCount, getPagesArray} from "./utils/pages";
import {usePosts} from "./hooks/usePosts";
import { useFetching } from './hooks/useFetching';
import PostService from './components/UI/PostService';
import PostList from './components/PostList';
import Loader from "./components/UI/Loader/Loader";

function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filder.sort, filter.query);

    let pagesArray = getPagesArray(totalPages);
    
    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.date)
        const totalCount = response.headers['x-total-count']
        setTotalCount(getPageCount(totalCount, limit))
      })
    
      useEffect(() => {
        fetchPosts(limit, page)
      }, [])

      const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false)
      }
    
      const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
      }
    
      const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page)
      }
    
    
      const sortedPosts = useMemo(() =>{
        if(selectedSort) {
          return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
          return posts;
      }, [selectedQuerry, posts])
    
      function getSortedPosts() {
        if(selectedSort) {
            return [...posts].sort((a, b ) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts;
      }
    
      async function fetchPosts() {
        setIsPostLoading(true);
        const posts = await PostService.getAll();
        setPosts(posts)
        setIsPostLoading(false);
      }
    
      return (
        <div className="App">
          <button onClick={fetchPosts}>GET POSTS</button>
            <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
              Создать пользователя
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            {postError &&
                <h1>Произошла ошибка ${postError}</h1>
            }
            {isPostsLoading
              ?  <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader /></div>
              :  <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про Js"/>
            }
            <Pagination 
              page={page}
              ChangePage={changePage}
              totalPages={totalPages}
            />
          </div>
      );  
    
            <div className="page__wrapper">
              {pagesArray.map(p => 
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? 'page page__current' : 'page'}>
                    {p}
                </span>
            )}
        </div>
    
};

export default Posts;