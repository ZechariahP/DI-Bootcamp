import { useEffect } from 'react';
import { usePostsSelector, usePostsStatus } from './state/hooks';
import ReactionsButton from './ReactionsButton';
import { useFetchPosts } from './state/hooks';

const PostsList = () => {
    const posts = usePostsSelector(); //useSelector((state) => state.posts.posts);
    const status = usePostsStatus(); //useSelector((state) => state.posts.status);
    const callFetchPosts = useFetchPosts(); //const dispatch = useDispatch();

    useEffect(() => {
        callFetchPosts();
    }, []);

    if (status === 'loading') {
        return <h2>Loading...</h2>;
    }
    if (status === 'failed') {
        return <h2>Failed to load posts.</h2>;
    }
    if (status === 'success') {
        return (
            <>
            <h2>Posts</h2>
                {posts.map((post) => {
                    return (
                        <article key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            <ReactionsButton post={post} />
                        </article>
                )
    })}
            </>
        );
    }
    return (
        <>
        <h2>The PostList APP</h2>
        </>
    );
};

export default PostsList;