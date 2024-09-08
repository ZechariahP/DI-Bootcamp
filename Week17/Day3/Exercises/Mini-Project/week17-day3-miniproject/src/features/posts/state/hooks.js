import { useSelector, useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { fetchPosts } from './slice';
import { selectPosts, selectStatus } from './selectors';

export const usePostsSelector = () => {
    return useSelector(selectPosts);
};

export const usePostsStatus = () => {
    return useSelector(selectStatus);
};

export const useFetchPosts = () => {
    const dispatch = useDispatch();
    return useCallback(() => {
        dispatch(fetchPosts());
    }, [dispatch]);
};

