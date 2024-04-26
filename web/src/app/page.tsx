import styles from './page.module.css';
import { client } from '../../src/utils/client';

type Post = {
    _id: string;
    title?: string;
    slug?: {
        current: string;
    };
};

export default async function Home() {
    const posts = await client.fetch<Post[]>(`*[_type == "post"]`);

    return (
        <ul>
            {posts.map((post) => (
                <li key={post._id}>
                    <a href={post?.slug?.current}>{post?.title}</a>
                </li>
            ))}
        </ul>
    );
}
