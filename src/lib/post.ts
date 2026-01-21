'use server'

export async function getPosts() {
    try {
        const res = await fetch(`http://localhost:3000/api/posts`, { cache: 'no-store' })
        const { data } = await res.json()
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getPost(id: number) {
    try {
        const res = await fetch(`http://localhost:3000/api/posts/${id}`, { cache: 'no-store' })
        const { data } = await res.json()
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function updatePost(postId: number, data: { title: string; body: string }) {
    try {
        const res = await fetch(`http://localhost:3000/api/posts/${postId}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...data,
                id: postId
            })
        })
        return res.json()
    } catch (error) {
        console.error(error);
        return null;
    }
}

export async function createPost(data: { title: string; body: string }) {
    try {
        const res = await fetch(`http://localhost:3000/api/posts`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...data
            })
        })
        if (!res.ok) throw new Error('Failed to create post');
        return res.json()
    } catch (error) {
        console.error(error);
        throw new Error;
    }
}

export async function deletePost(postId: number) {
    try {
        const res = await fetch(`http://localhost:3000/api/posts/${postId}`, {
            method: 'DELETE',
        })
        if (!res.ok) throw new Error('Failed to delete post');
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}