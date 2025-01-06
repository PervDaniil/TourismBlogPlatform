import { useEffect, useState } from "react";


interface Post {
    id: number,
    image: string,
}

interface useFetchPostsResult {
    loading: boolean,
    error: string | null,
    data: Post[],
}

export function useFetchPosts(): useFetchPostsResult {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState<Post[]>([]);


    const fetchData = async () => {
        const response = await fetch('/api/v1/blog/posts/');

        if (response.ok) {
            const data = await response.json();
            return data
        }
        throw new Error(`Failed to fetch posts. Response status code: ${response.status}`);
    }

    useEffect(() => {
        const getPosts = async () => {
            try {
                const posts = await fetchData();
                setData(posts.results);

            } catch (error) {
                setError(error.message);
                setData([]);

            } finally {
                setLoading(false);
            }
        }

        getPosts();
    }, []);


    return { loading, error, data }
}